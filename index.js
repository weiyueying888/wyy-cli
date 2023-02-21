#! /usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommand = require('./lib/core/create')
// 查看版本号
program.version(require('./package.json').version,'-v,--version')
program.version(require('./package.json').version)

helpOptions()

// 创建项目指令
createCommand()

program.parse(process.argv)


