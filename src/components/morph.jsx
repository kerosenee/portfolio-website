import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import FlowerSVG from "../assets/flower.svg?react";
import RectangleSVG from "../assets/rectangle.svg?react";

gsap.registerPlugin(MorphSVGPlugin);

export default function FlowerMorphHover() {
  const wrapRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;

    const ctx = gsap.context(() => {
      // Create the morph timeline (paused so hover controls it)
      tlRef.current = gsap.timeline({ paused: true, defaults: { ease: "power1.inOut" } });

      tlRef.current.to(".flower-morph-svg #flower", {
        duration: 0.8,
        morphSVG: { shape: ".rectangle-morph-svg #rectangle", },
      });
    }, el);

    const onEnter = () => tlRef.current?.tweenTo(tlRef.current.duration());
    const onLeave = () => tlRef.current?.tweenTo(0);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapRef}>
      <FlowerSVG className="flower-morph-svg" style={{ width: 220, height: 220 }} />
      <RectangleSVG
        className="rectangle-morph-svg"
        style={{ position: "absolute", left: -9999, top: -9999 }}
      />
    </div>
  );
}
