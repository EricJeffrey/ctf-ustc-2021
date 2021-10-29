import numpy as np
from matplotlib import pyplot as plt
from matplotlib.pyplot import figure
from scipy.fft import fft, fftfreq

figure(figsize=(14, 6), dpi=80)

DURATION = 0.01
SAMPLE_RATE = 44100

def gen_sine_wave(freq):
  x = np.linspace(0, DURATION, int(DURATION * SAMPLE_RATE), endpoint=False)
  y = np.sin(x * freq * 2 * np.pi)
  return y

hz200 = gen_sine_wave(200)
hz800 = gen_sine_wave(800)

# 叠加后的采样数据
# 这里每个样本不是 int16，而是 float，无关紧要
total = hz200 + hz800

y = fft(total)
x = fftfreq(len(total), 1 / SAMPLE_RATE)

# 此时横轴是频率，纵轴是该频率的分量
# 使用 np.abs 计算复数的模
plt.plot(x, np.abs(y))
plt.show()