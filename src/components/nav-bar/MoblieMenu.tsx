import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import planetColorMapper from "../../data/planetColorMapper";

import "./MobileMenu.css"

type Props = {
    openMenu: boolean;
    links: string[];
    setSelectedPlanet: React.Dispatch<React.SetStateAction<string>>;
    closeMenu: () => void;
}

export default function MoblieMenu({ openMenu, links, setSelectedPlanet, closeMenu }: Props) {
    const spring = useSpring({
        from: { x: 500, y: 60 },
        to: { x: openMenu ? 10 : 500, y: 60 }
    });

    return (
        <animated.div className="mobile-menu" style={{ ...spring }}>
            <ul className="mobile-menu-navs">
                {links.map(link =>
                    <li
                        key={"planet-" + link}
                        onClick={() => {
                            setSelectedPlanet(link);
                            closeMenu();
                        }}
                    >
                        <div className="planet-name-menu">
                            <div className="circle" style={{
                                backgroundColor: planetColorMapper?.[link.toLowerCase() as keyof typeof planetColorMapper]
                            }}></div>
                            <div>{link}</div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" /></svg>
                    </li>
                )}
            </ul>
        </animated.div>
    )
}
