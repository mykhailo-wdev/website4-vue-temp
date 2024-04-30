import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAnimationsAbout = () => {
  gsap.registerPlugin(ScrollTrigger);

  // section mission
  const gmission = gsap.timeline();
  gmission
    .from(".mission-bg", {
      scrollTrigger: {
        trigger: ".mission",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      scale: 0,
      autoAlpha: 0
    })
    .from(".mission-text", {
      scrollTrigger: {
        trigger: ".mission",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
      duration: 1
    });

    // section goal
  const ggoal = gsap.timeline();
  ggoal
    .from(".goal-heading", {
      scrollTrigger: {
        trigger: ".goal",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 200,
      autoAlpha: 0
    })
    .from(".goal-item", {
      scrollTrigger: {
        trigger: ".goal",
        start: "-100 center",
        end: "+=200",
        scrub: 4,
      },
      y: 300,
      autoAlpha: 0,
      stagger: 0.5,
    })

  // section demographic
  const gdemographic = gsap.timeline();
  gdemographic
    .from(".demographic-heading", {
      scrollTrigger: {
        trigger: ".demographic",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0,
    })
    .from(".demographic-subheading", {
        scrollTrigger: {
          trigger: ".demographic",
          start: "-100 center",
          end: "+=200",
          scrub: true,
        },
        y: 300,
        autoAlpha: 0,
      })
    .from(".demographic-picture", {
      scrollTrigger: {
        trigger: ".demographic",
        start: "-100 center",
        end: "+=200",
        scrub: 4,
      },
      scale: 0,
      autoAlpha: 0,
    });

  // choise
  const gchoise = gsap.timeline();
  gchoise
    .from(".choise-text", {
      scrollTrigger: {
        trigger: ".choise",
        start: "-200 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0
    });

  // section partner
  const gpartner = gsap.timeline();
  gpartner
    .from(".partner-preheading", {
      scrollTrigger: {
        trigger: ".partner",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0
    })
    .from(".partner-heading", {
      scrollTrigger: {
        trigger: ".partner",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      y: 300,
      autoAlpha: 0
    });
};
