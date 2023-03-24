import { animated, useSprings, useTransition } from "@react-spring/web";

import { RootData } from "../../models/RootData";
import "./Footer.css";

function getValue(strVal: string) {
  const value = strVal.split(" ")
  console.log(value);
  
  return {
    number: Number(value[0]),
    unit: value[1]
  }
}



export default function Footer({ planetInfo }: { planetInfo: RootData }) {
  const components = [
    {
      name: "Rotation time",
      value: getValue(planetInfo.rotation),
    },
    {
      name: "Revolution time",
      value: getValue(planetInfo.revolution),
    },
    {
      name: "Radius",
      value: getValue(planetInfo.radius),
    },
    {
      name: "Average temp.",
      value: getValue(planetInfo.temperature)
    },
  ];

  const transitions = useTransition(components, {
    from: { value: 0 },
    enter: ({ value }) => ({ value: value.number }),
    delay: 500,
    config: { mass: 5, tension: 500, friction: 100, duration: 1500 },
  });

  return (
    <div className="planet-stats container">
      <ul className="stats-card-wrapper">
        {transitions((style, item) => (
          <animated.li key={item.name} className="stats-card">
            <div className="h5 body-font uppercase">{item.name}</div>
            <animated.span className="h2 uppercase">
              {style.value.to((x) => x.toFixed(2))} 
            </animated.span>
            {item.value.unit}
          </animated.li>
        ))}
      </ul>
    </div>
  );
}
