function part1(){
    var tl =gsap.timeline()


tl.from("#nav h1,h3, .buttonnav",{
    y:-30,
    duration:0.8,
    delay:1,
    opacity:0,
    stagger:0.1

})

tl.from("#center .left h1, .center-p, .buttoncen",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from(".right img",{
    opacity:0,
    duration:0.5
},"-=0.5")


}
part1()

function part2(){
    
var tl2 = gsap.timeline({
    // scrollerTigger:{
    //     trigger:"#section2",
    //     scroller:"body",
    //     markers:true,
    //     start:"top 70%",
    //     end:"top 0",
    //     scrub:2,
    // }
})


tl2.from("#section2 img",{
    y:30,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#section2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

tl2.from("#services",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#section2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

tl2.from(".elem.line1.left ",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#boxs",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

tl2.from(".elem.line1.black.right ",{
    x:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#boxs",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true
    }
})

tl2.from(".elem.line2.right ",{
    x:100,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#boxs",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:true
    }
})

tl2.from(".elem.line2.black.left",{
    x:-100,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:"#boxs",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:true
    }
})
}
part2()

function part3(){
    var tl3=gsap.timeline()

    tl3.from("#happ-can",{
        opacity:0,
        duration:2,
        scrollTrigger:{
            trigger:"#happ-can",
            scroll:"body",
            // markers:true,
            start:"top 90%",
            end:"top 50%",
            scrub:true
        } 
    })
    
    tl3.from(" #happen  ",{
        x:-50,
        opacity:0,
        duration:2,
        stagger:1,
        scrollTrigger:{
            trigger:"#happen",
            scroll:"body",
            // markers:true,
            start:"top 80%",
            end:"top 50%",
            scrub:true
        }
    })
    
    tl3.from("#happen .divimg2",{
        y:-100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#happ-can",
            scroll:"body",
            // markers:true,
            start:"top 60%",
            end:"top 30%",
            scrub:true,
        }
    })
    gsap.from("#casestudy",{
        x:-100,
        opacity:0,
        scrollTrigger:{
            trigger:"#casestudy",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 40%",
            scrub:true
        }
    })
}
part3()

function part4(){
    var tl4=gsap.timeline()

tl4.from("#footer-can",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#footer-can",
        scroll:"body",
        start:"top 80%",
        end:"top 20%",
        // markers:true,
        scrub:true,
    }
})

}
part4()


