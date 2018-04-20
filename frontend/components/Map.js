import React, { Component } from 'react'
import { Map, Marker, Popup, Tooltip, TileLayer } from 'react-leaflet-universal'
import {
  Paragraph,
  Small
} from '../text/text'

import './Map.sass'

// const MapComponent = ReactMapboxGl({
//   accessToken: "pk.eyJ1Ijoib2xsZXN2IiwiYSI6IllQdDFvcEkifQ.Mjzq5Vc6iUwd2d6KnkM26A",
//   scrollZoom: false
// })

const find_location_icon = require('../img/find_location_icon.png')

const openStreetMapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let latLngBounds
export default class MapLala extends Component {
  state = {
    latitude: 59.3260674,
    longitude: 18.0696948,
    zoom: 10,
    loaded: false,
    tilesUrl: 'https://api.mapbox.com/styles/v1/ollesv/cjepticczegwr2rp1blki44m0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2xsZXN2IiwiYSI6IllQdDFvcEkifQ.Mjzq5Vc6iUwd2d6KnkM26A',
    geolocation_available: false
  }

  componentDidMount = () => {
    const Leaflet = require('leaflet')
    latLngBounds = Leaflet.latLngBounds
    this.setState({
      loaded: true,
      icon: new Leaflet.Icon({
        iconUrl: require('./marker.png'),
        shadowUrl: require('./marker_shadow.png'),
        iconSize:     [40, 58], // size of the icon
        shadowSize:   [32.5, 45], // size of the shadow
        iconAnchor:   [20, 58], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 45],  // the same for the shadow
        // popupAnchor:  [-3, -76]// point from which the popup should open relative to the iconAnchor
      })
    })
    if ('geolocation' in navigator) {
      console.warn('geolocation available')
      this.setState({ geolocation_available: true })
    } else {
      /* geolocation IS NOT available */
    }
  }

  getPosition = () => {
    if (!navigator.geolocation) {
      /* geolocation IS NOT available */
      return
    }

    // console.log('getting position', navigator.geolocation.getCurrentPosition)

    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position)
      const {
        latitude,
        longitude
      } = position.coords
      this.setState({
        latitude,
        longitude,
        zoom: 14
      })
    }, console.error, { maximumAge: 5000 })
  }

  getBounds = () => {
    const bounds = latLngBounds([])
    this.props.locations.forEach((data) => {
      bounds.extend([data.latitude, data.longitude])
    })
    return bounds
  }

  render() {
    const {
      geolocation_available,
      icon,
      latitude,
      longitude,
      loaded,
      sites,
      tilesUrl,
      zoom
    } = this.state

    const {
      locations
    } = this.props

    return (
      <div className="map-container">
        <Map
          center={ [latitude, longitude] }
          zoom={ zoom }
          style={{ height: '50vh' }}
          scrollWheelZoom={ false }
          boundsOptions={{padding: [50, 50]}}
          bounds={ loaded && this.getBounds() }
        >
          <TileLayer
            url={ tilesUrl }
          />
          {
            locations && locations.map((location) => (
              <Marker
                key={ location.address }
                position={ [location.latitude, location.longitude] }
                icon={ icon }
              >
                <Tooltip>
                  <span>
                    <Paragraph>{ location.title }</Paragraph>
                    <Small>{ location.address }</Small>
                    <Small>{ location.post_code + ' ' + location.city }</Small>
                    <Small>{ location.country }</Small>
                  </span>
                </Tooltip>
              </Marker>
            ))
          }
        </Map>
        {
          geolocation_available &&
            <div onClick={ this.getPosition } className="find-location">
              <Small>Find your location</Small>
              <img src={ find_location_icon } />
            </div>
        }
      </div>
    )
  }
}