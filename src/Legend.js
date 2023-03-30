import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
    createLeafletElement(props) {}

    componentDidMount() {

        const legend = L.control({ position: "bottomright" });

        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            let labels = [];

            labels.push(
                '<i style="background:#0000FF"></i>Candidate',
                '<i style="background:#FF7F50"></i>Planning',
                '<i style="background:#9932CC"></i>Active',
                '<i style="background:#83ec4a"></i>Closing',
                '<i style="background:#ecb34a"></i>Archived'
            );
            div.innerHTML = "Site Status" + "<br/>" + labels.join("<br>");
            return div;
        };

        const { map } = this.props.leaflet;
        legend.addTo(map);
    }
}

export default withLeaflet(Legend);
