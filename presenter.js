const fs = require('fs')
const asciify = require('asciify')
const shuffler = require('./shuffler')

const persons = JSON.parse(fs.readFileSync('./persons.json', 'utf8'))
const presenter = shuffler.shuffle(persons)[0]

asciify(presenter, {font:'starwars'}, (_, res)=> {
  console.log(res)
  console.log(presenter+'さんの自己紹介タイムです\n')
})
