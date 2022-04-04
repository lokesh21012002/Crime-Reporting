import React, { Component } from "react";
import { Map, InfoWindow, Marker } from "google-maps-react";
import { GoogleApiWrapper } from "google-maps-react";

export class Home extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={{ height: "100%", width: "100%", position: "relative" }}
          initialCenter={{
            lat: 22.719568,
            lng: 75.857727,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

// export default Map
export default GoogleApiWrapper({
  apiKey: "AIzaSyCO-tXxKAahtQHMZuRsqxoGrhqxR5ntSpQ",
})(Home);
