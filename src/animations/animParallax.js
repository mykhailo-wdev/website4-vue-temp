import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initParallaxAnimations = (trigger, elements) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(elements, {
    y: (i, el) =>
      -1 *
      parseFloat(el.getAttribute("data-speed")) *
      (trigger.offsetHeight / 4),
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      invalidateOnRefresh: true,
      scrub: true,
      start: "center bottom",
    }
  });
};
