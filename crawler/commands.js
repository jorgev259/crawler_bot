const layout = require('./layout')

module.exports = {
  generate: {
    desc: 'Generates a random layout',
    usage: '>generate',
    async execute (client, msg, param, sequelize) {

      msg.channel.send(layout.generate(7,7))
    }
  }
}
