 "use strict"
    
// $(window).scroll(function(){
    
//     let pixel = $(window).scrollTop()

//     console.log({pixel});
//     practica.currentTime = pixel / 1000;

// })

 $(window).scroll( function(){

    let pixel = $(window).scrollTop()
    console.log( { pixel })

    practica.currentTime = pixel / 500;
})