const fs = require('fs')
const shuffler = require('./shuffler')

const dice = JSON.parse(fs.readFileSync('./dice.json', 'utf8'))
const odai = shuffler.shuffle(dice)[0]

console.log('\n 🦁< '+odai+'\n')
