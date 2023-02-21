const program = require('commander')
const { createProjectAction, addCpnAction } = require('./actions')
const createCommands = () => {
    program.command('create <project> [others...]').description('clone a repository into folder').action(createProjectAction)
    program.command('addcpn <name>').description('add vue component 例如 wyy-cli addcpn helloword.vue -d src/component').action((name) => {
        addCpnAction(name, program._optionValue.dest || 'src/component')
    })
}
module.exports = createCommands