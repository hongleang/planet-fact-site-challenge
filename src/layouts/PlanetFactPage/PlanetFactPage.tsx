import { useEffect, useRef, useState } from "react";
import { Navbar, InfoSide, ImageSide, Footer } from "../../components";
import { Images, RootData } from "../../models/RootData";

import "./Body.css";
import { usePlanetFact } from "../hooks/usePlanetFact";
import {
  useTrail,
} from "@react-spring/web";
import AnimationContainer from "./AnimationContainer";

type Props = {
  data: RootData[];
};

export default function PlanetFactPage({ data }: Props) {
  const defaultSelectedPlanet = data[0].name;
  const [selectedPlanet, setSelectedPlanet] = useState<string>(
    defaultSelectedPlanet
  );
  const [selectedInfo, setSelectedInfo] = useState<string>("overview");

  const { planetNames, planetImage, geologyImage, planetDetails } =
    usePlanetFact({ data, selectedInfo, selectedPlanet });

  const components = [
    <Navbar
      links={planetNames}
      selectedPlanet={selectedPlanet}
      setSelectedPlanet={setSelectedPlanet}
      selectedInfo={selectedInfo}
      setSelectedInfo={setSelectedInfo}
    />,
    <Body>
      <ImageSide planetImage={planetImage} geologyImage={geologyImage} />
      <InfoSide
        planetInfo={planetDetails}
        selectedInfo={selectedInfo}
        setSelectedInfo={setSelectedInfo}
      />
    </Body>,
    planetDetails && <Footer planetInfo={planetDetails} />,
  ];

  const trails = useTrail(components.length, {
    from: { y: -100, x: 0, opacity: 0 },
    to: { y: 0, x: 0, opacity: 1 },
    config: {duration: 400 },
    delay: 100,
  });

  return (
    <>
      {trails.map(({ x, y, opacity }, idx) => {
        const verticalAnimation = { y, opacity };
        const horizontalAnimation = { x, opacity };
        return (
          <AnimationContainer
            animationProps={idx !== 1 ? verticalAnimation : horizontalAnimation}
          >
            {components[idx]}
          </AnimationContainer>
        );
      })}
    </>
  );
}

const Body = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <section id="planet-fact" className="planetFactBody">
      <div className="container bodyContainer">{children}</div>
    </section>
  );
};
