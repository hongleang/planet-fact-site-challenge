import React, { useEffect } from "react";
import { Images, RootData } from "../../models/RootData";
import planetImageMapper from "../../data/imageNameMapper";
import planetColorMapper from "../../data/planetColorMapper";

type Props = {
  data: RootData[];
  selectedPlanet: string;
  selectedInfo: string;
};

function handleOpenMenu() {
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width > 452) {
      localStorage.setItem("open-menu", "false");
    }
  });
}

export function usePlanetFact({ data, selectedPlanet, selectedInfo }: Props) {
  const planetNames = data.map((planet: RootData) => planet.name);
  const planetDetails: RootData | undefined = data?.find(
    (planet) => planet.name.toLowerCase() === selectedPlanet.toLowerCase()
  );
  const planetImageType =
    planetImageMapper?.[selectedInfo as keyof typeof planetImageMapper];
  const planetImage = planetDetails?.images?.[planetImageType as keyof Images];

  const geologyImage =
    selectedInfo === "surface geology"
      ? {
          planet: planetDetails?.images?.["planet"],
          geology: planetDetails?.images?.["geology"],
        }
      : undefined;

  useEffect(() => {
    const planetColorValue =
      planetColorMapper?.[
        selectedPlanet.toLowerCase() as keyof typeof planetColorMapper
      ];

    if (planetColorValue) {
      document.documentElement.style.setProperty(
        "--planet-color",
        planetColorValue
      );
    }
    handleOpenMenu();
  }, [selectedPlanet, handleOpenMenu]);

  return { planetNames, planetImage, geologyImage, planetDetails };
}
