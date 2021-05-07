import gsap from 'gsap';

export const landingAnimation = () => {
  const sections = document.querySelectorAll(".primary");

  sections.forEach((sect, i) => {
    const parent = sect.parentElement;
    const buttons = parent.querySelector("div");
    const tl = new gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.inOut",
      },
    });

    tl.to(sect, {
      clipPath: i % 2 === 0 ? "polygon(20% 0, 80% 0, 80% 100%, 20% 100%)" :
        "polygon(20% 0, 80% 0, 80% 100%, 20% 100%)",
      duration: .5,
    });
    tl.to(buttons, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: .25,
    }, ".15");

    parent.addEventListener('mouseenter', () => tl.play());
    parent.addEventListener('mouseleave', () => tl.reverse());
  });
};
