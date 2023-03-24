import React, { useEffect, useState } from "react";
import BackgroundStars from "./BackgroundStars";

import { useSpring, animated, useTransition } from "@react-spring/web";

import "./LoadingScreen.css";
import {
  EarthPlanet,
  MarsPlanet,
  MecuryPlanet,
  NeptunePlanet,
  VenusPlanet,
} from "../../data/imageData";

const loadingMsg = [
  "Welcome to the planet fact site",
  "Initialize the data...",
  "Loading result",
];

type Props = {
  loading: boolean;
  completeLoading: () => void;
};

const LoadingScreen = ({ loading, completeLoading }: Props) => {
  const [msgIdx, setMsgIdx] = useState(0);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [loadingBarStatus, setLoadingBarStatus] = useState(0);

  const planetsImgs = [
    MecuryPlanet,
    EarthPlanet,
    MarsPlanet,
    NeptunePlanet,
    VenusPlanet,
  ];

  const transitions = useTransition(activeImgIndex, {
    key: activeImgIndex,
    from: { right: -200 },
    enter: { right: 0 },
    leave: { right: 200 },
    config: { duration: 1500 },
    onRest: (_a, _b, item) => {
      if (activeImgIndex === item) {
        setActiveImgIndex((state) => (state + 1) % planetsImgs.length);
      }
    },
    exitBeforeEnter: true,
  });

  const textTransition = useTransition(msgIdx, {
    key: msgIdx,
    from: { opacity: 0, x: -5 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 5 },
    config: { duration: 1500 },
    onRest: (_a, _b, item) => {
      if (msgIdx === item) {
        setMsgIdx((state) => (state + 1) % loadingMsg.length);
      }
    },
    exitBeforeEnter: true,
  });

  const loadingBarspring = useSpring({
    width: `${loadingBarStatus}%`,
  });

  useEffect(() => {
    const timer1 = setTimeout(
      () => loadingBarStatus < 100 && setLoadingBarStatus(loadingBarStatus + 2),
      100
    );
    return () => {
      clearTimeout(timer1);
    };
  }, [loadingBarStatus]);

  useEffect(() => {
    if (loadingBarStatus === 100) {
      completeLoading();
    }
  }, [completeLoading, loadingBarStatus]);

  return (
    <div>
      {/* <BackgroundStars /> */}
      <div className="loadingScreen">
        <div className="loadingAnimation">
          {transitions((style, i) => (
            <animated.img style={{ ...style }} src={planetsImgs[i]} />
          ))}
        </div>
        <div className="loadingBar">
          <animated.div
            style={loadingBarspring}
            className="fillBar"
          ></animated.div>
          {loadingBarStatus}%
        </div>
        <div className="animationText">
          {textTransition((style, i) => (
            <animated.p style={style}>{loadingMsg[i]}</animated.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
