import React, { ReactNode } from "react";
import { animated } from "@react-spring/web";

type Props = {
  children: ReactNode;
  animationProps: any;
};

const AnimationContainer = ({ children, animationProps }: Props) => {
  return <animated.div style={{ ...animationProps }}>{children}</animated.div>;
};

export default AnimationContainer;
