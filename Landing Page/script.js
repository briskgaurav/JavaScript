//responsive for Desktop

let mm = gsap.matchMedia();
mm.add("(min-width:800px)", () => {
  loading();
});

// for Mobile
function Mobile() {
  mm.add("(max-width:800px)", () => {
    let t1 = gsap.timeline();

    t1.from(".loader", {
      scale: 0,
      duration: 1.5,
      ease: "expoScale(0.5,7,none)",
    });
    t1.from(".logo", {
      scale: 0,
      duration: 1,
      ease: "bounce",
    });
    t1.from(".logo", {
      x: -100,
      duration: 1,
      ease: "circ.out",
    });
    t1.to(".logo-txt", {
      x: 50,
      opacity: 1,
    });
    t1.to(".loader", {
      height: "50vh",
      top: "60%",
      duration: 1.2,
      ease: "expoScale(0.5,7,none)",
      delay: -1.5,
    });

    t1.from(".enroll", {
      opacity: 0,
      x: 100,
      stagger: 0.2,
    });
    t1.from(".up ", {
      y: 50,
      opacity: 0,
      stagger: 0.05,
    });
    t1.from(".footer", {
      opacity: 0,
    });
  });
}

//Loading Animation
function loading() {
  let t1 = gsap.timeline();

  t1.from(".loader", {
    scale: 0,
    duration: 1.5,
    ease: "expoScale(0.5,7,none)",
  });
  t1.from(".logo", {
    scale: 0,
    duration: 1,
    ease: "bounce",
  });
  t1.from(".logo", {
    x: 700,
    y: 300,
    duration: 1,
    ease: "circ.out",
  });
  t1.to(".logo-txt", {
    x: 50,
    opacity: 1,
  });
  t1.to(".loader", {
    width: "50vw",
    duration: 1.2,
    ease: "expoScale(0.5,7,none)",
    delay: -1.5,
  });
  t1.from(".enroll", {
    opacity: 0,
    x: 100,
    stagger: 0.2,
  });
  t1.from(".up ", {
    y: 50,
    opacity: 0,
    stagger: 0.05,
  });
  t1.from(".footer", {
    opacity: 0,
  });
}

//Outro Animation
function endScreen() {
  const tl = gsap.timeline();
  const button = (document.querySelector(".submitButton p").style.display =
    "none");
  const circle = (document.querySelector(".circle").style.display = "initial");

  tl.to(".footer", {
    delay: 1,
    opacity: 0,
  });
  tl.to(".up ", {
    y: 50,
    opacity: 0,
    stagger: 0.05,
  });
  tl.to(".enroll", {
    opacity: 0,
    x: 100,
    stagger: 0.1,
  });
  tl.to(".logo-txt", {
    delay: -0.5,
    opacity: 0,
  });
  tl.to(".loader", {
    scale: 0,
    duration: 1,
    ease: "bounce.in",
  });
  tl.to(".logo", {
    delay: -0.2,
    x: 700,
    y: 300,
    rotate: 360,
    scale: 0,
    duration: 1.5,
    ease: "bounce.out",
  });
}

// Form Logics
function formLogics() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    endScreen();
  });
}
//checkbox
function checkbox() {
  const checkbox = document.querySelector(".checking");
  const tick = document.querySelector("svg");

  checkbox.addEventListener("click", function () {
    if (tick.style.display === "none" || tick.style.display === "") {
      tick.style.display = "initial";
    } else {
      tick.style.display = "none";
    }
  });
}

formLogics();
checkbox();
Mobile();
