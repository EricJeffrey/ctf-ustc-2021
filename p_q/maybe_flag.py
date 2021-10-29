
import librosa
import numpy
import soundfile
from PIL import Image, ImageSequence

img = Image.open("flag.gif")

gif_data = []
for frame in ImageSequence.Iterator(img):
    data = []
    pix_mat = frame.load()
    width = frame.size[0]
    height = frame.size[1]
    for x in range(width):
        tmpli1 = []
        for y in range(height):
            # tmpli.append([0, 0, 0] if pix_mat[x, y] == 0 else [255, 0, 0])
            tmpli1.append(pix_mat[x, y])
        data.append(tmpli1)
    gif_data.append(data)

data_before_kron = []

for i in range(0, len(gif_data)):
    u = gif_data[i]
    tmpli1 = []
    for j in range(0, len(u), 2):
        v = gif_data[i][j]
        tmpli2 = []
        for k in range(0, len(v), 2):
            tmpli2.append(v[k])
        tmpli1.append(tmpli2)
    data_before_kron.append(tmpli1)

print(numpy.array(data_before_kron).shape)

raw_spectrogram = []

for i in range(len(data_before_kron)):
    # every frame
    raw_frame = []
    for freq in range(1, 32 * 2 + 1, 2):
        thresholds = list(range(-60, 30 + 1, 2))[::-1]
        raw_value = -60
        for j in range(len(thresholds)):
            threshold = thresholds[j]
            if data_before_kron[i][freq][j] == 1:
                raw_value = threshold
                break
        raw_frame.append(raw_value)
    raw_spectrogram.append(raw_frame)

raw_spectrogram = numpy.array(raw_spectrogram).transpose()
print(raw_spectrogram.shape)

raw_spectrogram = raw_spectrogram / 2 * 2
mel_spectrogram = librosa.core.db_to_power(raw_spectrogram)

print(mel_spectrogram.shape)

fft_window_size = 2048
frame_step_size = 512
window_function_type = 'hann'

audio = librosa.feature.inverse.mel_to_audio(
    mel_spectrogram, n_fft=fft_window_size, hop_length=frame_step_size,
    window=window_function_type)
soundfile.write("gg.wav", audio, 22050)
