const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const open = require('open')
const path = require('path')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile } = require('../utils/utils')
const createProjectAction = async (project, others) => {
    console.log('wyy-cli helps you create your project~');
    // 1 clone 项目
    // download().then().catch(err=>{

    // })
    await download(vueRepo, project, { clone: true })

    // 2 执行 npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${project}` })

    // 3 运行 npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

    //4 打开浏览器
    // open('')
}

// 执行添加组件命令方法
const addCpnAction = async (name, dest) => {
    // 1 有对应的ejs模块
    // 2 编译ejs模板
    // 3 将编译后的模板写入到.vue文件中
    // 4 放到传入的文件夹中
    const res = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() })
    const targetPath = path.resolve(dest, `${name}.vue`)
    await writeToFile(targetPath, res)
}

module.exports = {
    createProjectAction,
    addCpnAction
}