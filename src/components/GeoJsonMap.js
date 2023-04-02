import React, {Component} from 'react'
import {Map as LeafletMap, GeoJSON} from 'react-leaflet';
import mapData from "../ressources/json/countries.json";
import 'regenerator-runtime/runtime';
import LegendColors from "./LegendColors";
import "bootstrap/dist/css/bootstrap.min.css";
import {reloadComponent} from "./utils";
import MyMarker from "./MyMarker";
import Tooltip from 'react-tooltip-component-16';



class GeoJsonMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {countryState: []}
    }


    handleLayer= (layer, template) => {
        layer.bindPopup(template);
    }
    countryStyle = {
        color: '#000000',
        weight: 0.5,
        height: "80vh",
        fillColor: "#8C8EB0",
        fillOpacity: 0.5,
    };

    fetchData() {

        fetch('http://127.0.0.1:8081/api/site/colors',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    credentials: 'same-origin',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Origin': '*'
                },
            })
            .then(res => res.json())
            .then(res => {
                //console.log(res);
                this.setState({
                        countryState: res
                    }
                )
                console.log(this.state.countryState);
            }).catch(err => {
            console.log(err);
        });
    }


    componentDidUpdate() {


    }

    componentDidMount() {
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    onEachCountry = (country, layer) => {
        const countryName = country.properties.iso_a2;
        const countryLongName = country.properties.admin;
        let template;

        template ="<div>Location: " + countryLongName + "<br/> does not have Sites <br/> </div>";
        if (countryName == 'JP') {
            layer.options.fillColor = '#0000FF';
            template =
                "<div class='h4'>Site</div>" +
                "<div>Study Site Number : Number One<br/>Location: Japan <br/> Status: Candidate <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000003005?expanded=details__c&idx=4&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0"  target="_parent" class=link-info >More Info</a><br/><br/>';
        }

        if (countryName == 'FR') {
            layer.options.fillColor = '#FF7F50';
            template =
                "<div class='h4'>Site</div>" +
                "<div>Study Site Number : Special123<br/>Location: France <br/> Status: Qualifying <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000003008?expanded=details__c&idx=2&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_parent" class=link-info >More Info</a><br/><br/>';


        }

        if (countryName == 'CO') {
            layer.options.fillColor = '#f600dd';
            template =
                "<div class='h4'>Site</div>" +
                "<div>Study Site Number : XXXX<br/>Location: Colombia <br/> Status: Active <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000003001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_parent" class=link-info >More Info</a><br/><br/>';
        }

        if (countryName == 'BR') {
            layer.options.fillColor = '#4aecde';
            template =
                "<div class='h4'>Site</div>" +
                "<div>Study Site Number : XXXX<br/>Location: Colombia <br/> Status: Qualifying Hold <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000003007?expanded=details__c&idx=4&pt=aobj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1uYW1lX192JnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9YXNjJmN1c3RvbURhdGElNUJ2aWV3SWQlNUQ9YWxsJmN1c3RvbURhdGElNUJ0YWJJZCU1RD0wVEIwMDAwMDAwMDBLMTc&ivp=1&s=0" target="_parent" class=link-info >More Info</a><br/><br/>';
        }

        layer.on({
            click: this.handleLayer(layer, template)
        });


    }



    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Dashboard Study Coverage</h1>
                <button className="btn btn-link" onClick={reloadComponent}>Refresh Information</button>

                <Tooltip id="help" position="bottom" title="Click a color country for Site details. Click a marker for Study country information">
                    <button className="btn btn-link">Help on map use  </button>
                </Tooltip>

                <br/>
                <LeafletMap
                    center={[0, 10]}
                    zoom={1.5}
                    maxZoom={5}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <GeoJSON
                        data={mapData.features}
                        style={this.countryStyle}
                        onEachFeature={this.onEachCountry}
                    />
                    <LegendColors/>
                    <MyMarker/>
                </LeafletMap>
            </div>
        );
    }
}

export default GeoJsonMap
