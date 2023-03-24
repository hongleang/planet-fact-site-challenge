import React from "react";
import {
  animated,
  useSpring,
  useSprings,
  useTransition,
} from "@react-spring/web";

const BackgroundStars = () => {
  const minY = 8;
  const maxY = 1291;
  const minX = 10;
  const maxX = 1532;
  const radius = [1.5, 2, 2.5, 3.5];
  const numsStar = 170;
  const cricles = [];
  for (let i = 0; i <= numsStar; i++) {
    const cx = Math.random() * (maxX - minX) + minX;
    const cy = Math.random() * (maxY - minY) + minY;
    const randomIndex = Math.floor(Math.random() * radius.length - 1);
    const r = radius[randomIndex];

    cricles.push({ cx, cy, r });
  }

  const transitions = useTransition(cricles, {
    from: ({ cx, cy, r }: { cx: number; cy: number; r: number }) => ({
      cy: cy - 100,
      opacity: 0,
    }),
    enter: ({ cx, cy, r }: { cx: number; cy: number; r: number }) => ({
      cx,
      cy,
      opacity: 1,
    }),
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 5
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1532" height="1291">
      <g fill="#FFF" fillRule="evenodd" opacity=".202">
        {transitions((style, item) => (
          <animated.circle style={style} {...item} />
        ))}
      </g>
    </svg>
  );
};

export default BackgroundStars;
