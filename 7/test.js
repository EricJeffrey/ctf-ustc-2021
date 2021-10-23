// 蓝色集装箱kfc - 秦皇岛kfc新澳海港店

xs = ['d', 'e']
for (let i = 1; i < 150; i++) {
    for (let j = 0; j < xs.length; j++) {
        what = btoa("1=b&2=" + xs[j] + "&3=" + i + "&4=0335-7168800&5=%E6%B5%B7%E8%B1%9A%E9%A6%86");
        fetch("http://202.38.93.111:10055/" + what + ".txt").then((v) => {
            if (v.status == 200) {
                console.log("ok");
                v.text().then((vv) => console.log(vv))
            }
        }).catch(() => {});
    }
}

btoa('')
fetch("http://202.38.93.111:10055/MT1iJjI9ZCYzPTE0JjQ9MDMzNS03MTY4ODAwJjU9JUU2JUI1JUI3JUU4JUIxJTlBJUU5JUE2JTg2.txt", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ca;q=0.5,fr;q=0.4,mt;q=0.3,zh-TW;q=0.2",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "http://202.38.93.111:10055/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
});