const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
// const { promisify } = require('util')
const compile = (template, data) => {
    const templatePosition = `../templates/${template}`
    const templatePath = path.resolve(__dirname, templatePosition)
    console.log(templatePath, 9090);
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, {}, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

const writeToFile = (path, content) => {
    // fs.writeFileSync()
    return fs.promises.readFile(path, content)
}

module.exports = {
    compile,
    writeToFile
}