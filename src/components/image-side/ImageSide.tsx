import { useSpring, animated } from "@react-spring/web";

import "./ImageSide.css";

type Props = {
  planetImage: string | undefined;
  geologyImage?: {
    planet: string | undefined;
    geology: string | undefined;
  };
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function ImageSide({ planetImage, geologyImage }: Props) {
  const planetImgSpring = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: planetImage ? 0 : -100, opacity: 1 },
  });

  const geologyImgSpring = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: geologyImage ? 0 : 100, opacity: 1 },
    delay: 1,
  });

  return (
    <div className="img-wrapper">
      <animated.img
        className="planet-image"
        style={{ ...planetImgSpring }}
        src={geologyImage ? geologyImage.planet : planetImage}
        alt="planet-img"
      />
      <animated.img
        className="geology-image"
        src={geologyImage?.geology || ""}
        style={{ ...geologyImgSpring }}
      />
    </div>
  );
}
