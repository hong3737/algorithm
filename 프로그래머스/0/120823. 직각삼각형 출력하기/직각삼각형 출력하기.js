const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    let num = Number(input);
    for(i=1;i<=num;i++){
        console.log('*'.repeat(i));
    }
});