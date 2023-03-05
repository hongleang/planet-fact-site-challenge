import "./Footer.css"
import { RootData } from "../../models/RootData"


export default function Footer({ planetInfo }: { planetInfo?: RootData }) {

  return (
    <div className="planet-stats container">
      <ul className="stats-card-wrapper">
        <li className="stats-card">
          <div className="h5 body-font uppercase">Rotation time</div>
          <div className="h2 uppercase">{planetInfo ? planetInfo.rotation : "N/A"}</div>
        </li>
        <li className="stats-card">
          <div className="h5 body-font uppercase">Revolution time</div>
          <div className="h2 uppercase">{planetInfo ? planetInfo.revolution : "N/A"}</div>
        </li>
        <li className="stats-card">
          <div className="h5 body-font uppercase">Radius</div>
          <div className="h2 uppercase">{planetInfo ? planetInfo.radius : "N/A"}</div>
        </li>
        <li className="stats-card">
          <div className="h5 body-font uppercase">Average temp.</div>
          <div className="h2 uppercase">{planetInfo ? planetInfo.temperature : "N/A"}</div>
        </li>
      </ul>
    </div>
  )
}
