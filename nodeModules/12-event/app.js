const eventEmitter = require('events');
const emitter = new eventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args);
}

emitter.on('nomankey', (args) => {
    console.log('first callback - ', args)
});

emitter.on('nomankey', (args) => {
    console.log('second callback - ', args)
});

emitter.emit('nomankey', { message: 1 });
emitter.emit('nomankey', { message: 2 });
emitter.removeListener('nomankey', callback1);
emitter.emit('nomankey', { message: 3 });

// first callback -  { message: 1 }
// second callback -  { message: 1 }
// first callback -  { message: 2 }
// second callback -  { message: 2 }
// first callback -  { message: 3 }
// second callback -  { message: 3 }