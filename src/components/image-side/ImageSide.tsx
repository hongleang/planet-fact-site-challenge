import { useSpring, animated } from '@react-spring/web'

import "./ImageSide.css"

type Props = {
  planetImage: string | undefined,
  geologyImage?: {
    planet: string | undefined,
    geology: string | undefined
  }
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function ImageSide({ planetImage, geologyImage }: Props) {
  const springs = useSpring({
    from: { y: 100, display: "none" },
    to: { y: geologyImage ? 0 : 100, display: "block" },
    delay: 1
  })


  return (
    <div className="img-wrapper">
      <img className="planet-image" src={geologyImage ? geologyImage.planet : planetImage} alt="planet-img" />
      <animated.img
        className="geology-image"
        src={geologyImage?.geology || ""}
        style={{ ...springs }}
      />
    </div>
  )
}
