// HOMESCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const homescripts = function () {
  // GSAP panatalla grande
  if (screen.width > 1024) {
    gsap.to(".arrow", {
      scrollTrigger: {
        trigger: "#uno",
        start: "top top",
        end: "bottom 1%",
        scrub: .2,
      },
      x: innerWidth * 1.05,
      ease: "power4.easeInOut",
      immediateRender: false,
    });
    gsap.to("#start-scroll", {
      scrollTrigger: {
        trigger: "#start-scroll",
        start: "top 70%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
      immediateRender: false,
    });
    const playhome = function () {
      const optionshome = {
        id: 655462942,
        width: 640,
        controls: false,
        loop: true
      };
      const playerhome = new Vimeo.Player('video_pag', optionshome, );
      playerhome.setVolume(0);
      playerhome.play().then(function () {
        gsap.to("#video_pag", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playhome();
    const stophome = function () {
      const optionshome = {
        id: 655462942,
        width: 640,
        controls: false,
        loop: true
      };
      const playerhome = new Vimeo.Player('video_pag', optionshome, );
      playerhome.destroy();
    }
    gsap.to("#uno_text", {
      scrollTrigger: {
        trigger: "#dos",
        scrub: 1,
        start: "top -10%",
        end: "top -20%",
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#uno",
      start: "top top",
      end: "bottom -10%",
      scrub: .2,
      pin: "#uno_text",
    });
    ScrollTrigger.create({
      trigger: "#dos",
      start: "top 85%",
      toggleClass: {
        targets: "#uno_text",
        className: "blue"
      }
    });
    ScrollTrigger.create({
      trigger: "#dos",
      start: "top 8%",
      end: "bottom -305%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue"
      }
    });
    gsap.from(".line", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
      },
      scaleX: 0,
    });
    ScrollTrigger.create({
      trigger: ".line",
      start: "center 62%",
      end: "bottom -130%",
      scrub: .2,
      pin: "#tres",
    });
    gsap.to("#content_logistica", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top -10%",
        end: "top -50%",
      },
      autoAlpha: 1,
      immediateRender: false,
    });
    gsap.to("#content_trans", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top -10%",
        end: "top -50%",
      },
      autoAlpha: 0,
      immediateRender: false,
    });
    ScrollTrigger.create({
      trigger: "#cuatro",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });
    // Conntador
    var startCount = 0,
      num = {
        var: startCount
      };
    gsap.timeline({
        scrollTrigger: {
          trigger: "#cuatro",
          start: "top 0",
          end: "top -80%",
          scrub: true,
        }
      })
      .to(num, {
        var: 1400,
        duration: 1,
        ease: "none",
        onUpdate: changeNumber
      })

    function changeNumber() {
      kilometrosnum.innerHTML = (num.var).toFixed();
    }
    gsap.to('#dot', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      rotation: 270,
    });
    gsap.from('.st0', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      drawSVG: 0,
    });
    // Fin contador
    gsap.to("#tiempo", {
      scrollTrigger: {
        trigger: "#gap",
        start: "bottom -60%",
        end: "bottom -80%",
        scrub: true,
      },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });
    ScrollTrigger.create({
      trigger: "#cinco",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
    gsap.to("#carrusel-imagenes", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: -innerWidth * 0.333,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#lodisna-grande span", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#numeros_in", {
      scrollTrigger: {
        trigger: "#mark1",
        start: "top -10%",
        end: "top -120%",
        scrub: .2,
      },
      x: -innerWidth * 1.33,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.from("#cinco article, #numeros", {
      scrollTrigger: {
        trigger: "#cinco article",
        start: "top 80%",
        end: "top 40%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power2.easeInOut",
    });
    gsap.to("#arrow_3", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10%",
        end: "top -100%",
        scrub: .2,
      },
      x: -innerWidth * 1.3,
      immediateRender: false,
    });
    gsap.to("#arrow_4", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10%",
        end: "top -100%",
        scrub: .2,
      },
      x: -innerWidth * 1.3,
      immediateRender: false,
    });
    gsap.to("#cinco, #gap2", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10",
        end: "top -80%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
    });
    ScrollTrigger.create({
      trigger: "#apostamos_home",
      start: "top 60%",
      end: "bottom -505%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue"
      }
    });
    ScrollTrigger.create({
      trigger: "#seis",
      start: "top 0",
      end: "top -120%",
      pin: true,
    });
    gsap.to("#seis-inner", {
      scrollTrigger: {
        trigger: "#mark2",
        start: "top -10%",
        end: "top -110%",
        scrub: .2,
      },
      x: innerWidth * 2,
      immediateRender: false,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#nueve",
      start: "bottom 100%",
      end: "bottom 0%",
      pin: true,
    });
    gsap.to("#clientes-1", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: -innerWidth * 1.25,
      immediateRender: false,
      ease: "power4.easeInOut",
    });
    gsap.to("#clientes-2", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "power4.easeInOut",
    });
    gsap.to("#canvas", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "bottom 99%",
        end: "bottom 47%",
        scrub: "true"
      },
      autoAlpha: 0,
      y: -innerHeight * 0.53,
      immediateRender: false,
      ease: "linear",
    });
    gsap.from("#client-line", {
      scrollTrigger: {
        trigger: "#client-line",
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
      },
      scaleX: 0,
    });
    gsap.to("#clients, #client-line", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "top 20%",
        end: "top 10%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
    //SCROLL IR A...
    const slider = document.querySelector('#mark0');

    var scrollToHere = slider.offsetTop;

    $('#start-scroll').on('click', function () {
      bodyScrollBar.scrollTo(0, scrollToHere, 4000);
      //
    });
// MEDIA ////////////////////////////////////////////////////////////////////////////////////
  }
  if (screen.width < 1024) {
	  const playhome = function () {
      const optionshome = {
        id: 678074510,
        width: 640,
        controls: false,
        loop: true
      };
      const playerhome = new Vimeo.Player('video_pag', optionshome, );
      playerhome.setVolume(0);
      playerhome.play().then(function () {
        gsap.to("#video_pag", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playhome();
	  
	ScrollTrigger.create({
      trigger: "#dos",
      start: "top 5%",
		end: "top -215%",
      toggleClass: {
        targets: "#logo, #movil-menu-boton",
        className: "blue"
      }
    });
    gsap.from(".line", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
      },
      scaleX: 0,
    });
    ScrollTrigger.create({
      trigger: "#cuatro",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });
    // Conntador
    var startCount = 0,
      num = {
        var: startCount
      };
    gsap.timeline({
        scrollTrigger: {
          trigger: "#cuatro",
          start: "top 0",
          end: "top -80%",
          scrub: true,
        }
      })
      .to(num, {
        var: 1400,
        duration: 1,
        ease: "none",
        onUpdate: changeNumber
      })

    function changeNumber() {
      kilometrosnum.innerHTML = (num.var).toFixed();
    }
    gsap.to('#dot', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      rotation: 270,
    });
    gsap.from('.st0', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      drawSVG: 0,
    });
	  gsap.to("#tiempo", {
      scrollTrigger: {
        trigger: "#gap",
        start: "bottom -60%",
        end: "bottom -80%",
        scrub: true,
      },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });
    // Fin contador
	  gsap.to("#carrusel-imagenes", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: -innerWidth * 3,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#lodisna-grande span", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
	ScrollTrigger.create({
      trigger: "#cinco",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
	gsap.to("#numeros_in", {
      scrollTrigger: {
        trigger: "#mark1",
        start: "top -10%",
        end: "top -120%",
        scrub: .2,
      },
      x: -innerWidth * 3.4,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
	   gsap.to("#cinco, #gap2", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10",
        end: "top -80%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
    });
	  ScrollTrigger.create({
      trigger: "#cinco",
      start: "bottom 15%",
		end: "bottom -515%",
      toggleClass: {
        targets: "#logo, #movil-menu-boton",
        className: "blue"
      }
    });
	  ScrollTrigger.create({
      trigger: "#siete",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
	gsap.to("#puntos", {
      scrollTrigger: {
        trigger: "#gap2",
        start: "top -20%",
        end: "top -110%",
        scrub: .2,
      },
      x: -innerWidth * 1.97,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
	  gsap.to("#canvas", {
      scrollTrigger: {
        trigger: "#nueve",
       	start: "start 75%",
        end: "start -25%",
        scrub: "true"
      },
      y: -innerHeight * 1,
      immediateRender: false,
      ease: "linear",
    });
	    gsap.to("#clientes-1", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: -innerWidth * 1.25,
      immediateRender: false,
       ease: "linear",
    });
    gsap.to("#clientes-2", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
	gsap.to("#nueve", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start -15%",
        end: "end 3%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
	    const slider = document.querySelector('#mark0');

    var scrollToHere = slider.offsetTop;

    $('#start-scroll').on('click', function () {
      bodyScrollBar.scrollTo(0, scrollToHere, 5000);
      //
    });  
	  
  }
}
homescripts();
