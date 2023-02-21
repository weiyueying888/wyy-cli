
const program = require('commander')
const helpOptions = () => {
    // 增加可选option
    program.option('-w --wyy-cli', 'a wyy-cli cli')
    program.option('-d --dest <dest>', 'a destination folder,例如: -d /src/components')
    program.option('-f --framework <framework>', 'your framework')


    program.on('--help', function () {
        console.log("");
        console.log("other:");
        console.log("other options~");
    })

}

module.exports = helpOptions