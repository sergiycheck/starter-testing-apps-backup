Promise.resolve(0).then(() => console.log('promise resolved'));

process.nextTick(() => console.log('nextTick callback'));

setImmediate(() => console.log('setImmediate callback'));

console.log('synchronous log');
