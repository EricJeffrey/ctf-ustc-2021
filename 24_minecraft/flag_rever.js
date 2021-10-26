function Str4ToLong(params) {
    let tmp = 0;
    for (let i = 0; i < 0x4; i++)
        tmp |= params['charCodeAt'](i) << i * 0x8;
    return isNaN(tmp) ? 0 : tmp;
}
function LongToBase16(paramv) {
    let res = '';
    for (let i = 0x3; i >= 0; i--) {
        let tmps = (paramv >> 0x8 * i & 0xff)['toString'](0x10);
        if (parseInt('0x' + tmps) <= 0xf)
            tmps = '0' + tmps;
        res += tmps;
    }
    return res;
}
function Base16ToLong(params) {
    let tmp = 0;
    for (let i = 0; i < 0x8; i += 0x2) {
        let tmpv = parseInt('0x' + params['slice'](i, i + 0x2));
        tmp = (tmp << 0x8) + tmpv;
    }
    return tmp;
}
function LongToStr4(paramv) {
    const tmps = String['fromCharCode'](paramv & 0xff, paramv >> 0x8 & 0xff, paramv >> 0x10 & 0xff, paramv >> 0x18 & 0xff);
    return tmps;
}

/* 

function code(a: long[2], b: long[4]) {
    tmp = 0;
    let a0 = a[0], a1 = a[1];
    while (tmp != 0x9e3779b9 * 20) {
        a0 = a0 + ( ( (a1 << 4) ^ (a1 >>> 5) ) + a1 ) ^ ( tmp + b[tmp & 3] )
        tmp += 0x9e3779b9;
        a1 = a1 + ( ( (a0 << 4) ^ (a0 >>> 5) ) + a0 ) ^ (tmp + b[ (tmp >>> 11) & 3])
    }
}

*/
function code_r(a, b) {
    const v = 0x9e3779b9;
    let end = v * 0x20;
    let a0 = a[0], a1 = a[1];
    while (end != 0) {
        a1 -= (a0 << 4 ^ a0 >>> 5) + a0 ^ end + b[end >>> 0xb & 3];
        end -= v;
        a0 -= (a1 << 4 ^ a1 >>> 5) + a1 ^ end + b[end & 3];
    }
    a[0] = a0;
    a[1] = a1;
}
function code(a, b) {
    let a0 = a[0], a1 = a[1];
    const v = (0x52cfb2de + 0x4b67c6db), end = v * 0x20;
    let start = 0;
    while (start != end) {
        a0 += (a1 << 0x4 ^ a1 >>> 0x5) + a1 ^ start + b[start & 0x3];
        start += v;
        a1 += (a0 << 0x4 ^ a0 >>> 0x5) + a0 ^ start + b[start >>> 0xb & 0x3];
    }
    a[0] = a0;
    a[1] = a1;
}

// 6fbde674 819a59bf a1209256 5b4ca2a7 a11dc670 c678681d af4afb67 04b82f0c

let param = '1356853149054377';
let c = "6fbde674819a59bfa12092565b4ca2a7a11dc670c678681daf4afb6704b82f0c";
let longs = [];
for (let i = 0; i < c.length; i += 8) {
    longs.push(Base16ToLong(c.slice(i, i + 8)));
}
let b = new Array(4);
for (let i = 0; i < 4; i++) {
    b[i] = Str4ToLong(param.slice(i * 4, (i + 1) * 4));
}
let res = [];
for (let i = 0; i < longs.length; i += 2) {
    let a = [longs[i], longs[i + 1]];
    code_r(a, b);
    console.log("a: ", a);
    res.push(LongToStr4(a[0]));
    res.push(LongToStr4(a[1]));
}
console.log(unescape(res.join('')));


