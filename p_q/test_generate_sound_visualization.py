#!/usr/bin/env python3

from array2gif import write_gif  # version: 1.0.4
import librosa  # version: 0.8.1
from scipy.signal.windows import hann
import numpy  # version: 1.19.5


num_freqs = 32
quantize = 2
min_db = -60
max_db = 30
fft_window_size = 2048
frame_step_size = 512
window_function_type = 'hann'
red_pixel = [255, 0, 0]
white_pixel = [255, 255, 255]
y, sample_rate = librosa.core.load("gg.wav")  # sample rate is 22050 Hz

spectrogram = (
    # 向0四舍五入
    numpy.around(
        # 将频率转为db(log10) 2d
        librosa.core.power_to_db(
            # 构造梅尔频谱，对频率进行非线性变换 -> 2d (nmels, t)
            librosa.feature.melspectrogram(
                y, sample_rate, n_mels=num_freqs, n_fft=fft_window_size, hop_length=frame_step_size, window=window_function_type
            )
        ) / quantize
    ) * quantize
)

gif_data = []
# transpose -> 转置
for frame in spectrogram.transpose():
    # 65 x 46 x 3
    pixelsli = []
    for freq in range(num_freqs * 2 + 1):
        pixels = []
        thresholds = list(range(min_db, max_db + 1, quantize))[::-1]
        for threshold in thresholds:
            if freq % 2 and round(frame[freq // 2]) > threshold:
                pixels.append(red_pixel)
            else:
                pixels.append(white_pixel)
        pixelsli.append(pixels)
    gif_data.append(
        # [65 x 46 x 3] kron [2, 2, 1] -> [2*65, 2*46, 3]
        numpy.kron(numpy.array(pixelsli), numpy.ones([quantize, quantize, 1]))
    )

gif_data = [
    numpy.kron(numpy.array([
        [
            red_pixel
            if freq % 2 and round(frame[freq // 2]) > threshold
            else white_pixel
            for threshold in list(
                range(min_db, max_db + 1, quantize)
            )[::-1]
        ]
        for freq in range(num_freqs * 2 + 1)
    ]), numpy.ones([quantize, quantize, 1]))
    for frame in spectrogram.transpose()
]

write_gif(gif_data, 'testflag.gif', fps=sample_rate/frame_step_size)
