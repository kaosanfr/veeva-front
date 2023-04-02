import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class LegendColors extends MapControl {
    createLeafletElement(props) {}

    componentDidMount() {

        const legend = L.control({ position: "bottomright" });

        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            let labels = [];

            labels.push(
                '<i style="background:#00f279"></i>Initiating',
                '<i style="background:#f600dd"></i>Active',
                '<i style="background:#0000FF"></i>Candidate',
                '<i style="background:#FF7F50"></i>Qualifying',
                '<i style="background:#4aecde"></i>Qualifying Hold',
                '<i style="background:#ffffff"></i>Not Selected',
                '<i style="background:#ecb34a"></i>Closing'
            );
            div.innerHTML = "Site Status" + "<br/>" + labels.join("<br>");
            return div;
        };

        const { map } = this.props.leaflet;
        legend.addTo(map);
    }
}

export default withLeaflet(LegendColors);
