import planetImageMapper, { imageNameMapper } from "../../data/imageNameMapper";
import { RootData } from "../../models/RootData";
import { activeBtnClass } from "../../utils/utilsFunction";
import './InfoSide.css';

type Props = {
  planetInfo?: RootData;
  selectedInfo: string;
  setSelectedInfo: React.Dispatch<React.SetStateAction<string>>;
}

export default function InfoSide({ planetInfo, selectedInfo, setSelectedInfo }: Props) {

  if (!planetInfo) return <h2 className="h2">No Info was found for this selected planet.</h2>

  return (
    <div className="info-side">
      <div className="info-container">
        <h2 className="h1 uppercase">
          {planetInfo.name}
        </h2>
        <p className="body-font">
          {planetInfo.overview.content}
        </p>
        <span className="body-font fw-light">Source:
          {" "}
          <span className="fw-bold underline">
            <a className="outer-link" href={planetInfo.overview.source} target="blank">Wikipedia</a>
          </span>
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5" /></svg>
        </span>
      </div>
      <div id="info-selection" className="btn-wrapper">
        <button className={"btn " + activeBtnClass("overview", selectedInfo)} onClick={() => setSelectedInfo("overview")}>
          <span className="text-light-gray">01</span>
          <span className="text-white">Overview</span>
        </button>
        <button className={"btn " + activeBtnClass("internal structure", selectedInfo)} onClick={() => setSelectedInfo("internal structure")}>
          <span className="text-light-gray">02</span>
          <span className="text-white">Internal structure</span>
        </button>
        <button className={"btn " + activeBtnClass("surface geology", selectedInfo)} onClick={() => setSelectedInfo("surface geology")}>
          <span className="text-light-gray">03</span>
          <span className="text-white">Surface geology</span>
        </button>
      </div>
    </div>
  )
}
