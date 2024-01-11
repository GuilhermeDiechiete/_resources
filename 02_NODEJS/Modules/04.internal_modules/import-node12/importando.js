import {EventEmitter} from 'events'

//const events = require('events');


class Evento extends EventEmitter {}
const meuEvento = new Evento()


// assinante
meuEvento.on('segurança', (x,y)=> {
  console.log(`Executando o evento 'segurança': ${x} : ${y}`)
})

// emissor
meuEvento.emit('segurança', 'userAdmin', 'Alterou Salário')