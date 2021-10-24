
fp = open("transparent.txt")
s = fp.read()
s = s.replace('[', '\033[')
# s = s.replace('H', 'mH')
print(s)
fp.close()

# flag{abxnniohkalmcowsayfi9let}
