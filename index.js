// this will occur every second (1000ms)
// global variable
let timer = 90

//this must be rendered to the page and every second it must be rerendered onto the page
//we need this internal to be able to be cleared
setInterval(function(){
    
    timer -=10
    
    
    console.log("example");
    console.log(timer);


},1000)

// link together files