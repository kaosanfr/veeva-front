import {MapControl, withLeaflet} from "react-leaflet";
import {marker} from "leaflet";
import L from "leaflet";

class MyMarker extends MapControl {
    createLeafletElement(props) {}

    componentDidMount() {

        const templateFrance =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : 123<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K15/0ST/0ST000000003005?expanded=details__c&idx=2&pt=aobj&tvsl=JmNvbmZpZ05hbWU9c3R1ZHlfX3YmbG9jYXRpb25JZD0wVEIwMDAwMDAwMDBLMTUmc2VhcmNoVHlwZT12b2ZTb2xyJml2cD0xJnNvcnRGaWVsZHMlNUIwJTVEJTVCdmFsdWUlNUQ9bmFtZV9fdiZzb3J0RmllbGRzJTVCMCU1RCU1Qm9yZGVyJTVEPWFzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPWFsbCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE1&ivp=1&s=0" target="_parent" class=link-info >More Info</a><br/><br/></div>'
;

        const templateColombia =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : XXXX<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K15/0ST/0ST000000003001?expanded=details__c&idx=1&pt=aobj&tvsl=JmNvbmZpZ05hbWU9c3R1ZHlfX3YmbG9jYXRpb25JZD0wVEIwMDAwMDAwMDBLMTUmc2VhcmNoVHlwZT12b2ZTb2xyJml2cD0xJnNvcnRGaWVsZHMlNUIwJTVEJTVCdmFsdWUlNUQ9bmFtZV9fdiZzb3J0RmllbGRzJTVCMCU1RCU1Qm9yZGVyJTVEPWFzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPWFsbCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE1&ivp=1&s=0"  target="_parent" class=link-info >More Info</a><br/><br/></div>'
        ;

        const templateBrazil =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : XXXX<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K15/0ST/0ST000000003004?expanded=details__c&idx=0&pt=aobj&tvsl=JmNvbmZpZ05hbWU9c3R1ZHlfX3YmbG9jYXRpb25JZD0wVEIwMDAwMDAwMDBLMTUmc2VhcmNoVHlwZT12b2ZTb2xyJml2cD0xJnNvcnRGaWVsZHMlNUIwJTVEJTVCdmFsdWUlNUQ9bmFtZV9fdiZzb3J0RmllbGRzJTVCMCU1RCU1Qm9yZGVyJTVEPWFzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPWFsbCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE1&ivp=1&s=0" target="_parent" class=link-info >More Info</a><br/><br/></div>'
        ;

        const templateJapan =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : Number One<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K15/0ST/0ST000000003002?expanded=details__c&idx=3&pt=aobj&tvsl=JmNvbmZpZ05hbWU9c3R1ZHlfX3YmbG9jYXRpb25JZD0wVEIwMDAwMDAwMDBLMTUmc2VhcmNoVHlwZT12b2ZTb2xyJml2cD0xJnNvcnRGaWVsZHMlNUIwJTVEJTVCdmFsdWUlNUQ9bmFtZV9fdiZzb3J0RmllbGRzJTVCMCU1RCU1Qm9yZGVyJTVEPWFzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPWFsbCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE1&ivp=1&s=0" target="_parent" class=link-info >More Info</a><br/><br/></div>'
        ;


        const { map } = this.props.leaflet;

        // France
        var franceCoordinates = L.latLng(47.85392, 2.73861);
        const markerLayer = marker(franceCoordinates).bindPopup(templateFrance);
        map.addLayer(markerLayer);

        // Colombia
        var colombiaCoordinates = L.latLng(5.622884, -72.34290);
        const markerLayer2 = marker(colombiaCoordinates).bindPopup(templateColombia);
        map.addLayer(markerLayer2);

        // Japan
        var japanCoordinates = L.latLng(37.541497, 140.499704);
        const markerLayer3 = marker(japanCoordinates).bindPopup(templateJapan);
        map.addLayer(markerLayer3);

        var brazilCoordinates = L.latLng(-15.74002, -47.88807);
        const markerLayer4 = marker(brazilCoordinates).bindPopup(templateBrazil);
        map.addLayer(markerLayer4);

    }
}

export default withLeaflet(MyMarker);





