// 逆向 6fbde674819a59bfa12092565b4ca2a7a11dc670c678681daf4afb6704b82f0c

String.prototype.encrypt = function (param1) {
    const a = new Array(0x2), b = new Array(0x4);
    let tmps = '';
    plaintext = escape(this);
    for (var i = 0x0; i < 0x4; i++)
        b[i] = Str4ToLong(param1['slice'](i * 0x4, (i + 0x1) * 0x4));
    for (i = 0x0; i < plaintext['length']; i += 0x8) {
        a[0x0] = Str4ToLong(plaintext['slice'](i, i + 0x4)),
            a[0x1] = Str4ToLong(plaintext['slice'](i + 0x4, i + 0x8)),
            code(a, b),
            tmps += LongToBase16(a[0x0]) + LongToBase16(a[0x1]);
    }
    return tmps;
}
function code(a, b) {
    const tmpa = 0x9e3779b9, tmpa20 = tmpa * 0x20;
    let tmp = 0x0;
    let a0 = a[0x0], a1 = a[0x1];
    while (tmp != tmpa20) {
        a0 += ((a1 << 0x4 ^ a1 >>> 0x5) + a1) ^ (tmp + b[tmp & 0x3]);
        tmp += tmpa;
        a1 += ((a0 << 0x4 ^ a0 >>> 0x5) + a0) ^ (tmp + b[tmp >>> 0xb & 0x3]);
    }
    a[0x0] = a0;
    a[0x1] = a1;
}
// '1234' -> 0x34333231
function Str4ToLong(params) {
    let tmp = 0x0;
    for (let i = 0x0; i < 0x4; i++)
        tmp |= params['charCodeAt'](i) << i * 0x8;
    return isNaN(tmp) ? 0x0 : tmp;
}
// 
function LongToBase16(paramv) {
    let _0x4176bf = '';
    for (let _0x3c7880 = 0x3; _0x3c7880 >= 0x0; _0x3c7880--) {
        let _0x43811c = (paramv >> 0x8 * _0x3c7880 & 0xff)['toString'](0x10);
        if (parseInt('0x' + _0x43811c) <= 0xf)
            _0x43811c = '0' + _0x43811c;
        _0x4176bf += _0x43811c;
    }
    return _0x4176bf;
}
function Base16ToLong(params) {
    let tmp = 0x0;
    for (let i = 0x0; i < 0x8; i += 0x2) {
        let tmpv = parseInt('0x' + params['slice'](i, i + 0x2));
        tmp = (tmp << 0x8) + tmpv;
    }
    return tmp;
}
function LongToStr4(paramv) {
    const tmps = String['fromCharCode'](paramv & 0xff, paramv >> 0x8 & 0xff, paramv >> 0x10 & 0xff, paramv >> 0x18 & 0xff);
    return tmps;
}