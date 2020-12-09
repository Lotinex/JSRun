let res = /(?<name>a)(<?gg>b)/.exec('ab')
console.log(res.groups.name)