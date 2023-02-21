// 执行终端命令相关

const { spawn } = require('child_process')

const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        // 开启一个子进程 并且执行命令
        const childProcess = spawn(...args)

        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        childProcess.on('close', () => {
            resolve()
        })
    })

}

module.exports = {
    commandSpawn
}