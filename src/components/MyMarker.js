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
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/></div>'
;

        const templateColombia =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : XXXX<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/></div>'
        ;

        const templateArgentina =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : XXXX<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/></div>'
        ;

        const templateJapan =
            "<div class='h6'>Country Study description</div>" +
            "<div><b>Site Number</b> : Number One<br/><b>Study Phase></b>: III<br/><b>Study Type></b>: Human Pharmacodynamics<br/><b>Product></b>: Olofen</div>" +
            "<br/>" +
            '<div><a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/></div>'
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

        var argentinaCoordinates = L.latLng(-34.61562, -58.38627);
        const markerLayer4 = marker(argentinaCoordinates).bindPopup(templateArgentina);
        map.addLayer(markerLayer4);

    }
}

export default withLeaflet(MyMarker);




