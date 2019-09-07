import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
    constructor(props) {
        super(props)
        this.setMapBounds = this.setMapBounds.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this.mapBounds = {
            northEast: { lat: 37.80971, lng: -122.39208 },
            southWest: { lat: 37.74187, lng: -122.47791 }
        };
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    
        this.map.addListener('idle', this.setMapBounds);
        google.maps.event.addListener(this.map, "click", this._handleClick);
        this.props.updateFilter(this.mapBounds);

        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);

    }

    _handleClick(coords) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${coords.latLng.lat()}&lng=${coords.latLng.lng()}`
        });
    }

    setMapBounds() {
        const mapCoords = this.map.getBounds();
        this.mapBounds.northEast.lat = mapCoords.getNorthEast().lat();
        this.mapBounds.northEast.lng = mapCoords.getNorthEast().lng();
        this.mapBounds.southWest.lat = mapCoords.getSouthWest().lat();
        this.mapBounds.southWest.lng = mapCoords.getSouthWest().lng();
        this.props.updateFilter(this.mapBounds);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }
    
    
    render() {
        return(
            <div id="map-container" ref={map => this.mapNode = map} >

            </div>
        )
    }
}

export default withRouter(BenchMap);