function UtilityFx() {

    const ringImage = document.querySelector('#ringImage');
    gsap.to(ringImage, {
        translateY: `350px`,
        scrollTrigger: {
            trigger: '#bg-img-icone',
            start: "top 70%",
            end: 'bottom -20%',
            scrub: 0.2,
        }
    });

    // custom cursor FX
    const Maincursor = document.querySelector('.axd');
    document.querySelector('body').addEventListener('mousemove', (e) => {
        gsap.to(Maincursor, {
            x: e.x,
            y: e.y,
            duration: 0.6
        })
    })

    // smooth scrolling 
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

UtilityFx()

const videoSectionFX = () => {
    //  video playing FX
    const VIDEOWRAPPER = document.querySelector('.videosec');

    const cussor = document.querySelector('.axd');
    VIDEOWRAPPER.addEventListener('mouseenter', () => {
        cussor.innerHTML = "CLICK";
        gsap.to(cussor, {
            scale: 12,
            ease: "linear",
            backgroundColor: "green",
            border: "none",
        })
    })
    VIDEOWRAPPER.addEventListener('mouseleave', () => {

        cussor.innerHTML = ""
        gsap.to(cussor, {
            scale: 1,
            ease: "linear",
            backgroundColor: "transparent",
            border: "1px solid rgb(183, 255, 172)"
        })
    })

    const video = document.querySelector('.videosection')
    const videoWrapper = document.querySelector('.videosec')

    videoWrapper.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            video.currentTime = 1
        } else {
            video.muted = true;
        }
    })

}
videoSectionFX();

const navigationStyling = (height) => {
    const navBottom = document.querySelector('#navbottom');
    const navigationDetails = document.getElementsByClassName('detsection');
    const DetailsSection = document.querySelector('.details');
    const DetailsSectionheading = document.querySelector('.details h1');
    const detailsicon = document.querySelector('.icone')
    const tl = gsap.timeline();
    tl.to(navBottom, {
        height: `${height}vh`,
        ease: "linear",
        stagger: true,
        duration: "5s",
    }, "same")
    tl.to(DetailsSectionheading, {
        color: "black"
    }, "same")
    tl.to(DetailsSection, {
        backgroundColor: "white",
    }, "same")
    tl.to(navigationDetails, {
        display: "flex",
        ease: 'linear',
        opacity: 1,
        stagger: true,
        height: "35vh",
    }, "same")
    tl.to(detailsicon, {
        color: "black",
        rotate: "180deg"
    }, "same")
    nav.addEventListener('mouseenter', () => {
        gsap.to('.axd', {
            display: 'none',
            duration: 0.01,
            ease: 'expo'
        })
    })
    if (height === 0) {
        tl.to(navBottom, {
            height: `${height}vh`,
            ease: "linear",
            stagger: true,
            duration: "5s"
        }, "same")
        tl.to(DetailsSectionheading, {
            color: "white"
        }, "same")
        tl.to(DetailsSection, {
            backgroundColor: 'transparent'
        }, "same")
        tl.to(navigationDetails, {
            display: "flex",
            ease: 'linear',
            opacity: 0,
            height: "0vh"
        }, "same")
        tl.to(detailsicon, {
            color: "white",
            transform: "rotate(0deg)"
        }, "same")

        nav.addEventListener('mouseleave', () => {
            gsap.to('.axd', {
                display: "flex",
                duration: 0.01,
                ease: 'expo'
            })
        })
    }
}

function splitTextintospan(btn_text) {
    let text = btn_text.textContent.split('');
    let TextLength = text.length;
    let spanArray = [];
    let divArray = [];
    for (let i = 0; i <= TextLength - 1; i++) {
        if (text[i] == " ") {
            divArray += `<div class="texteffectDives">${spanArray} </div>`;
            spanArray = [];
        } else {
            spanArray += `<p class="spanText">${text[i]}</p>`;
        }
    }
    btn_text.innerHTML = divArray;
}
const textSpliting = (btn) => {
    let text = btn.textContent.split('');
    let TextLength = text.length;

    let Ptages = [];
    let divTages = [];

    for (let i = 0; i <= TextLength - 1; i++) {
        if (text[i] == " ") {
            divTages += `<div class="pagethree_btn_div">${Ptages}</div>`
            Ptages = [];
        }
        else {
            Ptages += `<p class="page_three_para"> ${text[i]}</p>`
        }

    }
    divTages += `<div class="pagethree_btn_div">${Ptages}</div>`;

    btn.innerHTML = divTages

}
const textrollingEffect = (evet) => {
    let tag = evet.target.childNodes[0].childNodes[0].className;

    const tl = gsap.timeline()
    if (evet.type === "mouseenter") {
        tl.to(`.${tag}`, {
            transform: "translateY(-70%)",
            opacity: 0,
            stagger: "0.02",
        })
        tl.to(`.${tag}`, {
            transform: 'translateY(0%)',
            opacity: 1,
            stagger: "0.02"
        }, '-=0.9')
    }
    if (evet.type === "mouseleave") {
        tl.to(`.${tag}`, {
            transform: "translateY(-70%)",
            opacity: 0,
            stagger: "-0.02",
        })
        tl.to(`.${tag}`, {
            transform: 'translateY(0%)',
            opacity: 1,
            stagger: "-0.02"
        }, '-=0.9')
    }
}

function pageThreeFX() {

    pikaWrapper.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            gsap.to(element.childNodes[3], {
                scale: 1,
                opacity: 1,
                ease: 'expo'
            })
            gsap.to('.axd', {
                display: 'none',
                duration: 0.01,
                ease: 'expo'
            })
        })
        element.addEventListener("mouseleave", () => {
            gsap.to(element.childNodes[3], {
                scale: 0,
                opacity: 0,
                ease: 'linear'
            })
            gsap.to('.axd', {
                display: "flex",
                duration: 0.01,
                ease: 'expo'
            })
        })
        element.addEventListener('mousemove', (evet) => {
            gsap.to(element.childNodes[3], {
                x: evet.x - element.getBoundingClientRect().x - 50,
                y: evet.y - element.getBoundingClientRect().y - 50
            })
        })
    })
    pikaDiv.forEach((element) => {
        let video = element.childNodes[1];
        element.addEventListener('mouseenter', () => {
            video.play();
            video.loop = true;
        })
        element.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        })
    })
}


function pinnedpageThree() {
    const left_aside = document.querySelectorAll('.left-aside')
    left_aside.forEach((element) => {
        gsap.to('.page-three-det-wrapper', {
            scrollTrigger: {
                scroller: "body",
                start: 'top 15%',
                end: 'bottom -60%',
                pin: element,
            }
        })
    })
}

function splitTxtbywhiteSpace(text) {


    let splitText = text.textContent.split(" ");
    let spantags = []
    for (let index = 0; index < splitText.length; index++) {
        if (splitText[index] == "+") {
            spantags += `<span class="headspanthree headingSpan">${splitText[index]}</span>`
        } else {
            spantags += `<span class="headingSpan">${splitText[index]}</span>`
        }
    }
    text.innerHTML = spantags
}

function TexttrasnsformFX() {
    let webheading = document.querySelectorAll('#pageone .headingSpan')
    gsap.from(webheading, {
        y: 30,
        stagger: 0.1,
        opacity: 0,
        ease: "expoScale(0.5,7,power2.inOut)"
    })
    gsap.from("#pageone>p", {
        scale: 0.5,
        duration: "1",
        opacity: 0,
        ease: "expoScale(0.5,7,power2.inOut)"
    })
}

const GSAPFX = () => {
    const cubeBox = document.querySelector('#cube-box');
    const tl = gsap.timeline();
    tl.to(cubeBox, {
        transform: 'translate(-20vw, 30vw)',
        rotate: 74,
        scrollTrigger: {
            scroller: 'body',
            trigger: ".box-two",
            start: "top 60%",
            end: 'top -30%',
            scrub: 1
        }
    }).from('.page-three-heading', {
        opacity: 0,
        scale: 0,
        x: "100%",
        scrollTrigger: {
            scroller: 'body',
            trigger: '.page-three-heading',
            start: 'top bottom',
            end: 'bottom 45%',
            scrub: 2
        }
    }).from('.proejct-summery .headingSpan', {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: 'linear',
        scrollTrigger: {
            scroller: 'body',
            trigger: ".proejct-summery h1",
            start: "top 90%",
            end: 'top 90%',
            scrub: 2,
        }
    }).from('.page-7-list-item h2', {
        x: 0,
        scrollTrigger: {
            scrub: 2,
            scroller: "body",
            trigger: ".page-7-list-item",
            end: 'top -10%'
        }
    }, "same").from('.left-line-div', {
        height: '0',
        scrollTrigger: {
            scrub: 2,
            scroller: "body",
            trigger: ".left-line-div",
            start: 'top 50%',
            end: 'top -10%',
        }
    }, "same")
}
function loadingAnimation() {
    let ti = gsap.timeline();
    ti.from("#pageone ,#pagetwo ,#pagethree ,#pagefour ,#pagefive , #pageseven, #pageonesix ,#page-8 ,nav", {
        duration: 2,
        opacity: 0
    })
}

const nav = document.querySelector('.details')
nav.addEventListener("mouseenter", () => { navigationStyling(40) })
nav.addEventListener("mouseleave", () => { navigationStyling(0) })


const page_tow_btn = document.querySelector('#pagetwobtn');
const pageThree_btn = document.querySelectorAll('.page-three-det-btn')
const pageThree_each_btn = document.querySelectorAll('.page-three-det-btn')


pageThree_btn.forEach((btn) => {
    textSpliting(btn)
})

page_tow_btn.addEventListener('mouseenter', (evet) => textrollingEffect(evet))
page_tow_btn.addEventListener('mouseleave', (evet) => textrollingEffect(evet))


// for each calling 
pageThree_each_btn.forEach((btn) => {
    btn.addEventListener('mouseenter', (evet) => textrollingEffect(evet));
    btn.addEventListener('mouseleave', (evet) => textrollingEffect(evet));
})


// mouse enter on video on page three
const pikaDiv = document.querySelectorAll('.pika-video')
const pikaWrapper = document.querySelectorAll('.pika-wrapper');



const Webheading = document.querySelector('#pageone>h2')
splitTxtbywhiteSpace(Webheading);
const summeryText = document.querySelector('.proejct-summery>h1')
splitTxtbywhiteSpace(summeryText)



splitTextintospan(page_tow_btn);
UtilityFx()
pinnedpageThree()
GSAPFX()
TexttrasnsformFX();
pageThreeFX()
loadingAnimation()