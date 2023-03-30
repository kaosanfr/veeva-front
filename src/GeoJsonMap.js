import React, {Component} from 'react'
import {Map as LeafletMap, GeoJSON, Marker, Popup} from 'react-leaflet';
import mapData from "./countries.json";
import 'regenerator-runtime/runtime';
import Legend from "./Legend";
import "bootstrap/dist/css/bootstrap.min.css";
import {reloadComponent} from "./others";


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
        this.fetchData();
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
                "<div>Study Site Number : Number One<br/>Location: Japan <br/> Status: Candidate <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/>';
        }

        if (countryName == 'FR') {
            layer.options.fillColor = '#FF7F50';
            template =
                "<div>Study Site Number : Special123<br/>Location: France <br/> Status: Planning <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/>';


        }

        if (countryName == 'CO') {
            layer.options.fillColor = '#9932CC';
            template =
                "<div>Study Site Number : XXXX<br/>Location: Colombia <br/> Status: Active <br/> </div>" +
                '<a href="https://candidate-eu-tech-services---sandra.veevavault.com/ui/#t/0TB000000000K17/0SI/0SI000000001001?expanded=details__c&idx=0&pt=robj&tvsl=JmNvbmZpZ05hbWU9c2l0ZV9fdiZsb2NhdGlvbklkPTBUQjAwMDAwMDAwMEsxNyZzZWFyY2hUeXBlPXZvZlNvbHImaXZwPTEmc29ydEZpZWxkcyU1QjAlNUQlNUJ2YWx1ZSU1RD1Eb2NMYXN0Vmlld2VkJnNvcnRGaWVsZHMlNUIwJTVEJTVCb3JkZXIlNUQ9ZGVzYyZjdXN0b21EYXRhJTVCdmlld0lkJTVEPXJlY2VudCZjdXN0b21EYXRhJTVCdGFiSWQlNUQ9MFRCMDAwMDAwMDAwSzE3&ivp=1&s=0" target="_blank" class=link-info >More Info</a><br/><br/>';


        }


        layer.on({
            click: this.handleLayer(layer, template)
        });


    }



    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Dashboard Study Coverage</h1>
                <button className="btn btn-link" onClick={reloadComponent}>Refresh Information</button><br/>
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
                    <Legend/>
                </LeafletMap>
            </div>
        );
    }
}

export default GeoJsonMap
