// //navbar toggler
// $('.navbar-toggler').on('click', function () {
//     $('.spacer').toggleClass('navbar-expanded');
//     });

// //form handler
// const handleContactFormSubmit = () => {
//     alert("Message sent!");
//     const form = document.getElementById("contactForm");
//     form.reset();
//   };

//contrast toggler

// check if high contrast mode was previously enabled
// var highContrastMode = localStorage.getItem("highContrastMode") === "true";

// apply high contrast mode if it was previously enabled
// if (highContrastMode) {
//   var link = document.createElement("link");
//   link.href = "./css/highcontrast.css";
//   link.type = "text/css";
//   link.rel = "stylesheet";
//   document.getElementsByTagName("head")[0].appendChild(link);
// }

// document.getElementById("toggleContrast").onclick = function() {
//   if (highContrastMode) {
//     var link = document.querySelector('link[href="./css/highcontrast.css"]');
//     link.parentNode.removeChild(link);
//     highContrastMode = false;
//     localStorage.setItem("highContrastMode", "false");
//   } else {
//     var link = document.createElement("link");
//     link.href = "./css/highcontrast.css";
//     link.type = "text/css";
//     link.rel = "stylesheet";
//     document.getElementsByTagName("head")[0].appendChild(link);
//     highContrastMode = true;
//     localStorage.setItem("highContrastMode", "true");
//   }
// };

//particles-js config
particlesJS("particles-js", {
"particles": {
    "number": {
      "value": 66,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});