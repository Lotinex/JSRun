const t = '$(`ss`).addClass(`test=ss`)'
console.log(t.match(/\$\(\`\S+\`\)\.addClass\(\`\S+\=\S+\`\)/))