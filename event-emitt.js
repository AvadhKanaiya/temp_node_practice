const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (user_name, id) => {
    console.log(`data recieved for user: ${user_name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic goes here`)
})
customEmitter.emit('response', 'avadh', 180)