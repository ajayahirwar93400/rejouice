
function locomotive (){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotive ();


function cursoreffect (){
 var page1Content = document.querySelector(".page1-content");
 var page4blur = document.querySelector(".page4");
 var cursor = document.querySelector(".cur");

// page4blur.addEventListener("mousemove", function(dets){
//    cursor.style.left = dets.x+"px";
//    cursor.style.top = dets.y+"px";
// });


page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

//page4 animation that mean mousemove ya cursoer follower

// page4blur.addEventListener("mousemove",function(dets){
//   gsap.to(cursor,{
//       x:dets.x,
//       y:dets.y
//   })
// })

// page4blur.addEventListener("mouseenter",function(){
//   gsap.to(cursor,{
//       scale:1,
//       opacity:1
//   })
// })

// page4blur.addEventListener("mouseleave",function(){
//   gsap.to(cursor,{
//       scale:0,
//       opacity:0
//   })
// })


}

cursoreffect();


function page2Animation(){
   var elem1 = document.querySelector(".elem1");
   var p = document.querySelector(".elem1p");
  gsap.from("elem1 elem1p ",{
    y:120,
    stagger : 0.25,
    duration:1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%"
    }
  })
}

page2Animation();

function page5 (){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

page5();

//  function page4Animation(){
//   var blurpage = document.querySelector(".blur");
//   var cr = document.querySelector(".cur");

//   blurpage.addEventListener("mousemove",function(dets){
//     gsap.to(cr,{
//       x:dets.x,
//       y:dets.y
//     });
//   });
  
// blurpage.addEventListener("mouseenter",function(){
//   gsap.to(cr,{
//       scale:1,
//       opacity:1,
      
//   });
// });

// blurpage.addEventListener("mouseleave",function(){
//   gsap.to(cr,{
//       scale:0,
//       opacity:0
//   });
// });


// }

// page4Animation();