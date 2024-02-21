let events=require('events')
let eventemitter = new events.EventEmitter() 
//create-event
eventemitter.on('test',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test1',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test2',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test3',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test4',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test5',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test6',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test7',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test8',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test9',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test10',()=>{
    console.log('hello i am test event')  //addListner()
})
eventemitter.on('test11',()=>{
    console.log('hello i am test event')  //addListner()
})

//fire (emmit)
eventemitter.emit('test')
eventemitter.emit('test11')
eventemitter.removeAllListeners()
console.log(eventemitter.eventNames())