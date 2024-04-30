import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initCounter = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".animCounter").forEach((box) => {
    const endValue = parseInt(box.textContent);

    ScrollTrigger.create({
      trigger: box,
      start: "top bottom",
      onEnter: () => {
        animateNumber(box, 0, endValue);
      },
      onLeaveBack: () => {
        box.textContent = "0";
      },
    });
  });

  function animateNumber(element, startValue, endValue) {
    element.textContent = startValue;

    gsap.to(element, {
      duration: 2,
      textContent: endValue,
      ease: "power1.inOut",
      snap: { textContent: 1 },
      modifiers: {
        textContent: function (value) {
          return Math.round(value).toLocaleString();
        },
      },
    });
  }
};
