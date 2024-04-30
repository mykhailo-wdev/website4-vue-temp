import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // section work
  const gwork = gsap.timeline();
  gwork
    .from(".work-preheading", {
      scrollTrigger: {
        trigger: ".work",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 200,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".work-heading", {
      scrollTrigger: {
        trigger: ".work",
        start: "-100 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".work-num1", {
      scrollTrigger: {
        trigger: ".work-row1",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: -300,
      autoAlpha: 0,
    })
    .from(".work-num2", {
      scrollTrigger: {
        trigger: ".work-row2",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: -300,
      autoAlpha: 0,
    })
    .from(".work-num3", {
      scrollTrigger: {
        trigger: ".work-row3",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: -300,
      autoAlpha: 0,
    })
    .from(".work-title1, .work-subtitle1", {
      scrollTrigger: {
        trigger: ".work-row1",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
    })
    .from(".work-title2, .work-subtitle2", {
      scrollTrigger: {
        trigger: ".work-row2",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
    })
    .from(".work-title3, .work-subtitle3", {
      scrollTrigger: {
        trigger: ".work-row3",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
    })
    .from(".work-picture1", {
      scrollTrigger: {
        trigger: ".work-row1",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    })
    .from(".work-picture2", {
      scrollTrigger: {
        trigger: ".work-row2",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    })
    .from(".work-picture3", {
      scrollTrigger: {
        trigger: ".work-row3",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    });

  // section ttrader
  const gttrader = gsap.timeline();
  gttrader
    .from(".ttrader-preheading", {
      scrollTrigger: {
        trigger: ".ttrader",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 200,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".ttrader-heading", {
      scrollTrigger: {
        trigger: ".ttrader",
        start: "-100 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".ttrader-item", {
      scrollTrigger: {
        trigger: ".ttrader-row",
        start: "-150 center",
        end: "+=200",
        scrub: 3,
      },
      scale: 0,
      autoAlpha: 0,
      stagger: 0.5,
    })
    .from(".ttrader-picture", {
      scrollTrigger: {
        trigger: ".ttrader-row",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    });

  // section technology
  const gtechnology = gsap.timeline();
  gtechnology
    .from(".technology-text", {
      scrollTrigger: {
        trigger: ".technology",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    })
    .from(".technology-picture", {
      scrollTrigger: {
        trigger: ".technology",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: -300,
      autoAlpha: 0,
    });

  // tplatform
  const gtplatform = gsap.timeline();
  gtplatform
    .from(".tplatform-preheading", {
      scrollTrigger: {
        trigger: ".tplatform",
        start: "-200 center",
        end: "+=200",
        scrub: true,
      },
      y: 200,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".tplatform-heading", {
      scrollTrigger: {
        trigger: ".tplatform",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
      duration: 1,
    })
    .from(".tplatform-item", {
      scrollTrigger: {
        trigger: ".tplatform-row",
        start: "-150 center",
        end: "+=200",
        scrub: 4,
      },
      scale: 0,
      autoAlpha: 0,
      stagger: 0.4,
    });

  // section learn
  const glearn = gsap.timeline();
  glearn
    .from(".learn-text", {
      scrollTrigger: {
        trigger: ".learn",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: -300,
      autoAlpha: 0,
    })
    .from(".learn-picture", {
      scrollTrigger: {
        trigger: ".learn",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    });
};
