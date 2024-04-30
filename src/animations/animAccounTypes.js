import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAnimationsAccount = () => {
  gsap.registerPlugin(ScrollTrigger);

  // section account-wrap
  const gwork = gsap.timeline();
  gwork
    .from(".account-item", {
      scrollTrigger: {
        trigger: ".account-wrap",
        start: "-200 center",
        end: "+=200",
        scrub: 4,
      },
      y: 200,
      autoAlpha: 0,
      stagger: 0.5
    });
 
};
