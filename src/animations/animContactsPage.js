import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAnimationsContacts = () => {
  gsap.registerPlugin(ScrollTrigger);

  // section contacts
  const gcontacts = gsap.timeline();
  gcontacts
    .from(".contacts-form", {
      scrollTrigger: {
        trigger: ".contacts-panel",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: -300,
      autoAlpha: 0,
    })
    .from(".contacts-datas", {
      scrollTrigger: {
        trigger: ".contacts-panel",
        start: "-150 center",
        end: "+=200",
        scrub: true,
      },
      x: 300,
      autoAlpha: 0,
    });
};
