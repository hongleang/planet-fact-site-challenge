import "./Navbar.css";

import HamburgerMenu from "../../assets/assets/icon-hamburger.svg";
import { activeBtnClass } from "../../utils/utilsFunction";
import { useEffect, useState } from "react";
import MoblieMenu from "./MoblieMenu";

type Props = {
  links: string[];
  selectedPlanet: String;
  setSelectedPlanet: React.Dispatch<React.SetStateAction<string>>;
  selectedInfo: string;
  setSelectedInfo: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ links, selectedPlanet, setSelectedPlanet, selectedInfo, setSelectedInfo }: Props) {
  function checkActiveLink(link: string) {
    return selectedPlanet === link ? 'active' : '';
  }

  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

  }, [openMenu])


  return (
    <header>
      <nav>
        <div className="nav-container">
          <h5 className="logo">The planet</h5>
          <img onClick={() => setOpenMenu(!openMenu)} src={HamburgerMenu} alt="nav-menu" className="hamburger-menu" />

          <ul className="navs">
            {links.map(link =>
              <li
                key={"planet-" + link}
                onClick={() => setSelectedPlanet(link)}
                className={"nav-link uppercase body-font " + checkActiveLink(link)}>
                <div className="overlay"></div>
                {link}
              </li>
            )}
          </ul>
        </div>
        <hr />
        <ul className="navs-info">
          <li
            className={"nav-link uppercase body-font text-dark-gray " + activeBtnClass("overview", selectedInfo)}
            onClick={() => setSelectedInfo("overview")}>
            <div className="overlay-bottom"></div>
            Overview
          </li>
          <li
            className={"nav-link uppercase body-font text-dark-gray " + activeBtnClass("internal structure", selectedInfo)}
            onClick={() => setSelectedInfo("internal structure")}>
            <div className="overlay-bottom"></div>
            Structure
          </li>
          <li
            className={"nav-link uppercase body-font text-dark-gray " + activeBtnClass("surface geology", selectedInfo)}
            onClick={() => setSelectedInfo("surface geology")}>
            <div className="overlay-bottom"></div>
            Surface
          </li>
        </ul>
        <hr className="line-info" />
      </nav>
      <MoblieMenu closeMenu={closeMenu} openMenu={openMenu} links={links} setSelectedPlanet={setSelectedPlanet} />
    </header>
  )
}
