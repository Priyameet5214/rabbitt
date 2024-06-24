import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GoogleGeminiEffect } from "./GoogleGeminiEffect";

export default function GoogleGeminiEffectDemo() {
  const ref = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  useEffect(() => {
    const onScroll = () => {
      if (scrollYProgress.get() > 0.2 && scrollYProgress.get() < 0.8) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    };

    scrollYProgress.onChange(onScroll);

    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isAnimating]);

  return (
    <div
      className="h-screen bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
