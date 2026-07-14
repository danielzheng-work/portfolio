const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


var config = {
    particles: {
        number: {
            value:100,
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        color: {
            value: ["#ffffff", "#FF6F91", "#F9F871", "#D65DB1"],
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#b2becd",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

window.onload = function() {
    particlesJS('particles-js', config);
   };


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections active
    allSections.addEventListener('click', (e) =>{
        const control = e.target.closest('[data-id]');
        const id = control ? control.dataset.id : null;

        if(id){
            // Remove selected state from the other buttons.
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            control.classList.add('active')

            // Hide other sections.
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    var imgstate = false;
    themeBtn.addEventListener('click',() =>{
        const logo = document.querySelector('.logo img');
        imgstate = !imgstate;
        if (imgstate === true) {
            logo.src="img/new_logo_light.png";;
        } else {
            logo.src="img/new_logo.png";;
        }
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();
