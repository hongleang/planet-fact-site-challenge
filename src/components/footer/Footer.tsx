import "./Footer.css"
import { RootData } from "../../models/RootData"


export default function Footer({ planetInfo }: { planetInfo?: RootData }) {

  return (
    <div className="planet-stats container">
      <ul className="stats-card-wrapper">
        <li className="stats-card">
          <h5 className="body-font uppercase">Rotation time</h5>
          <h3 className="h2 uppercase">{planetInfo ? planetInfo.rotation : "N/A"}</h3>
        </li>
        <li className="stats-card">
          <h5 className="body-font uppercase">Revolution time</h5>
          <h3 className="h2 uppercase">{planetInfo ? planetInfo.revolution : "N/A"}</h3>
        </li>
        <li className="stats-card">
          <h5 className="body-font uppercase">Radius</h5>
          <h3 className="h2 uppercase">{planetInfo ? planetInfo.radius : "N/A"}</h3>
        </li>
        <li className="stats-card">
          <h5 className="body-font uppercase">Average temp.</h5>
          <h3 className="h2 uppercase">{planetInfo ? planetInfo.temperature : "N/A"}</h3>
        </li>
      </ul>
    </div>
  )
}
