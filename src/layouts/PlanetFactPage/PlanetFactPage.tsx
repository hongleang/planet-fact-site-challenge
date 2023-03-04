import { useEffect, useRef, useState } from "react"
import { Navbar, InfoSide, ImageSide, Footer } from '../../components'
import { Images, RootData } from "../../models/RootData"

import planetImageMapper from "../../data/imageNameMapper"

import "./Body.css"
import planetColorMapper from "../../data/planetColorMapper"


type Props = {
    data: RootData[]
}

export default function PlanetFactPage({ data }: Props) {
    const defaultSelectedPlanet = data[0].name;
    const [selectedPlanet, setSelectedPlanet] = useState<string>(defaultSelectedPlanet);
    const [selectedInfo, setSelectedInfo] = useState<string>("overview");

    const planetNames = data.map((planet: RootData) => planet.name);
    const planetDetails: RootData | undefined = data.find(planet => planet.name.toLowerCase() === selectedPlanet.toLowerCase());
    const planetImageType = planetImageMapper?.[selectedInfo as keyof typeof planetImageMapper]
    const planetImage = planetDetails?.images?.[planetImageType as keyof Images];

    const geologyImage = selectedInfo === "surface geology" ? {
        planet: planetDetails?.images?.["planet"],
        geology: planetDetails?.images?.["geology"]
    } : undefined

    useEffect(() => {
        const planetColorValue = planetColorMapper?.[selectedPlanet.toLowerCase() as keyof typeof planetColorMapper];

        if (planetColorValue) {
            document.documentElement.style.setProperty('--planet-color', planetColorValue);
        }
    }, [selectedPlanet])

    useEffect(() => {
        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            if (width > 452) {
                localStorage.setItem("open-menu", "false")
            }
        })

    }, [])



    return (
        <>
            <Navbar
                links={planetNames}
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
                selectedInfo={selectedInfo}
                setSelectedInfo={setSelectedInfo}
            />
            <Body>
                <ImageSide planetImage={planetImage} geologyImage={geologyImage} />
                <InfoSide planetInfo={planetDetails} selectedInfo={selectedInfo} setSelectedInfo={setSelectedInfo} />
            </Body>
            <Footer planetInfo={planetDetails} />
        </>
    )
}

const Body = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return <section id="planet-fact" className="planetFactBody">
        <div className="container bodyContainer">
            {children}
        </div>
    </section>
}
