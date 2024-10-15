import { useCallback, useEffect, useRef, useState } from "react";

import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker } from "@googlemaps/markerclusterer";
import {
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  useMap,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
import cabinImage from "/src/assets/cabin.jpg";
import slopeImage from "/src/assets/slope.jpg";
import bkgImage from "/src/assets/bkg.jpg";

export default function MapComponent() {
  const [markerInfo, setMarkerInfo] = useState<{
    title: string;
    content: string;
    position: google.maps.LatLng | null;
  }>({
    title: "",
    content: "Javid & Aysel Hideout",
    position: null,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [windowState, setWindowState] = useState<string>("None");

  type Poi = { key: string; location: google.maps.LatLngLiteral };
  const locations: Poi[] = [
    {
      key: "Buxton Lodge - Melissa Kane Pagotto",
      location: { lat: 41.11898, lng: -75.05232 },
    },
    {
      key: "Cozy Cabin - Kate Flanagan",
      location: { lat: 41.25551, lng: -75.47079 },
    },
    {
      key: "Cozy Mountain Lakehouse - Avi Rose",
      location: { lat: 41.0606423, lng: -75.5910219 },
    },
    {
      key: "The Hideout Chalet - CG Vacation Rental Prop Management",
      location: { lat: 41.4196276, lng: -75.3472886 },
    },
    {
      key: "Just Breathe - CG Vacation Rental Prop Management",
      location: { lat: 41.4309425, lng: -75.352273 },
    },
    {
      key: "The Lightforest Chalet - CG Vacation Rental Prop Management",
      location: { lat: 41.4247878, lng: -75.338322 },
    },
    {
      key: "Up Cabin - CG Vacation Rental Prop Management",
      location: { lat: 41.4466568, lng: -75.3429261 },
    },
    {
      key: "Willow’s Place - CG Vacation Rental Prop Management",
      location: { lat: 41.4298275, lng: -75.3431131 },
    },
    {
      key: "Meadowview Manor - CG Vacation Rental Prop Management",
      location: { lat: 41.4393323, lng: -75.364341 },
    },
    {
      key: "Shiff Shack - CG Vacation Rental Prop Management",
      location: { lat: 41.4524227, lng: -75.3449826 },
    },
    {
      key: "Fawn Chateau - CG Vacation Rental Prop Management",
      location: { lat: 41.4486341, lng: -75.3432691 },
    },
    {
      key: "Sky’s the Limit - CG Vacation Rental Prop Management",
      location: { lat: 41.4540975, lng: -75.3237248 },
    },
    {
      key: "The Regal Lodge - CG Vacation Rental Prop Management",
      location: { lat: 41.4355231, lng: -75.3402843 },
    },
    {
      key: "Vacation Station - CG Vacation Rental Prop Management",
      location: { lat: 41.4569553, lng: -75.325709 },
    },
    {
      key: "Cozy Cabin - CG Vacation Rental Prop Management (Estimate)",
      location: { lat: 41.4157344, lng: -75.3570409 },
    },
    {
      key: "Tree House - CG Vacation Rental Prop Management (Estimate)",
      location: { lat: 41.4482893, lng: -75.3422964 },
    },
    {
      key: "Loch Nest Mtn. - CG Vacation Rental Prop Management",
      location: { lat: 41.4590676, lng: -75.3388106 },
    },
    {
      key: "Pine Lodge - CG Vacation Rental Prop Management",
      location: { lat: 41.4616204, lng: -75.3189202 },
    },
    {
      key: "The Escape at The Hideout - CG Vacation Rental Prop Management",
      location: { lat: 41.4560149, lng: -75.3156846 },
    },
    {
      key: "It’s 5 O’Clock Somewhere - CG Vacation Rental Prop Management",
      location: { lat: 41.4385772, lng: -75.3596001 },
    },
    {
      key: "The Fox Den - CG Vacation Rental Prop Management",
      location: { lat: 41.4151749, lng: -75.3484843 },
    },
    {
      key: "Lake Ariel Cottage - CG Vacation Rental Prop Management",
      location: { lat: 41.4266608, lng: -75.3388115 },
    },
    {
      key: "The Dacha - CG Vacation Rental Prop Management",
      location: { lat: 41.4263758, lng: -75.3548349 },
    },
    {
      key: "Palm Hideaway - CG Vacation Rental Prop Management",
      location: { lat: 41.413305, lng: -75.346938 },
    },
    {
      key: "A Frame of Mind - CG Vacation Rental Prop Management",
      location: { lat: 41.4500161, lng: -75.4412575 },
    },
    {
      key: "The Boulders - CG Vacation Rental Prop Management",
      location: { lat: 41.4497799, lng: -75.3474151 },
    },
    {
      key: "The Treehouse Retreat - CG Vacation Rental Prop Management",
      location: { lat: 41.4327877, lng: -75.3430975 },
    },
    {
      key: "House in the Trees - CG Vacation Rental Prop Management",
      location: { lat: 41.4275142, lng: -75.35502 },
    },
    {
      key: "Brentwood Chalet - CG Vacation Rental Prop Management",
      location: { lat: 41.4325663, lng: -75.3584066 },
    },
    {
      key: "Sunset View - CG Vacation Rental Prop Management",
      location: { lat: 41.4604726, lng: -75.3288758 },
    },
    {
      key: "On the Rocks - CG Vacation Rental Prop Management (Estimate)",
      location: { lat: 41.4107232, lng: -75.341797 },
    },
    {
      key: "Tree House - CG Vacation Rental Prop Management (Estimate) 2",
      location: { lat: 41.4107232, lng: -75.341797 },
    },
    {
      key: "Family Ties - CG Vacation Rental Prop Management (Same as On the Rocks)",
      location: { lat: 41.4107232, lng: -75.341797 },
    },
    {
      key: "Tree House - CG Vacation Rental Prop Management",
      location: { lat: 41.4477956, lng: -75.3415566 },
    },
    {
      key: "Deer Run Retreat - James Breese",
      location: { lat: 41.218724, lng: -75.363915 },
    },
    {
      key: "Home Away from Home - Anna Fledchun",
      location: { lat: 41.053268, lng: -75.368113 },
    },
    {
      key: "Paradise Retreat - Anna Fledchun",
      location: { lat: 41.050857, lng: -75.363556 },
    },
    {
      key: "Shawnee Mtn - Anna Fledchun (Estimate)",
      location: { lat: 41.043138, lng: -75.082993 },
    },
    {
      key: "Great Summer Escape - Javid & Aysel (Estimate)",
      location: { lat: 41.4403, lng: -75.353285 },
    },
    {
      key: "Kelly Property - Kelly Mongillo (Estimate)",
      location: { lat: 41.00254, lng: -75.528982 },
    },
    {
      key: "Lake Breeze Hideaway - Erika Stark",
      location: { lat: 41.16291, lng: -75.554776 },
    },
    {
      key: "Ski Chalet in Arrowhead Lake - Nena",
      location: { lat: 41.144829, lng: -75.561227 },
    },
    {
      key: "Summit Bear - Zbigniew Stankiewicz (Estimate)",
      location: { lat: 41.116341, lng: -75.396687 },
    },
    {
      key: "Three Daughters Properties - Don Mccollum",
      location: { lat: 41.053397, lng: -75.36819 },
    },
    {
      key: "Little Summit Location - Don Mccollum (Estimate)",
      location: { lat: 41.084789, lng: -75.412782 },
    },
    {
      key: "Boulder Lake Location - Don Mccollum (Estimate)",
      location: { lat: 41.05373, lng: -75.592474 },
    },
    {
      key: "Emerald Estate - Don Mccollum (Estimate)",
      location: { lat: 41.0853644, lng: -75.4314456 },
    },
    {
      key: "Luxury Lakefront - Liz Grant (Estimate)",
      location: { lat: 41.0600317, lng: -75.5987751 },
    },
    {
      key: "Lake Harmony - Liz Grant (Estimate)",
      location: { lat: 41.0563215, lng: -75.6054331 },
    },
  ];

  const PoiMarkers = (props: { pois: Poi[] }) => {
    const map = useMap();
    mapRef.current = map;
    const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
    const clusterer = useRef<MarkerClusterer | null>(null);

    const handleClick = useCallback(
      (ev: google.maps.MapMouseEvent, poi: Poi) => {
        if (!map) return;
        if (!ev.latLng) return;
        console.log("marker clicked:", ev.latLng.toString());
        map.panTo(ev.latLng);

        if (windowState!) setWindowState("open");
        setMarkerInfo({
          ...markerInfo,
          title: poi.key,
          position: ev.latLng,
        });
      },
      []
    );

    // Initialize MarkerClusterer, if the map has changed
    useEffect(() => {
      if (!map) return;
      if (!clusterer.current) {
        clusterer.current = new MarkerClusterer({ map });
      }
    }, [map]);

    // Update markers, if the markers array has changed
    useEffect(() => {
      clusterer.current?.clearMarkers();
      clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);

    const setMarkerRef = (marker: Marker | null, key: string) => {
      if (marker && markers[key]) return;
      if (!marker && !markers[key]) return;

      setMarkers((prev) => {
        if (marker) {
          return { ...prev, [key]: marker };
        } else {
          const newMarkers = { ...prev };
          delete newMarkers[key];
          return newMarkers;
        }
      });
    };

    return (
      <>
        {props.pois.map((poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}
            clickable={true}
            onClick={(event) => handleClick(event, poi)}
            ref={(marker) => setMarkerRef(marker, poi.key)}
          >
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </AdvancedMarker>
        ))}
      </>
    );
  };

  const LocationList = (props: { poi: Poi; index: number }) => {
    const map = mapRef.current;
    if (!map) {
      return <div></div>;
    }

    const changePosition = (poi: Poi) => {
      map.panTo(poi.location);

      map.setZoom(15);
      setMarkerInfo({ ...markerInfo, title: poi.key });
      setWindowState("open");
    };
    return (
      <h5
        key={props.index}
        onClick={() => changePosition(props.poi)}
        className="location-elt"
      >
        {props.poi.key}
      </h5>
    );
  };

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Explore Our Locations</h1>
          <p>
            Find the perfect place to stay and enjoy private ski lessons at top
            slopes in the region.
          </p>
          <a href="#content" className="btn-primary">
            Learn More
          </a>
        </div>
      </section>

      <section id="content" className="content">
        <h2>About Our Map</h2>
        <p>
          Our interactive map helps you find the best accommodations, including
          Airbnb, VRBO, and private listings, as well as top ski slopes where we
          offer private lessons. Whether you're looking for a cozy cabin or the
          perfect run, our map has you covered.
        </p>

        <div className="partnerships">
          <div className="partnership">
            <img loading="lazy" src={cabinImage} alt="Accommodation" />
            <h3>Accommodations</h3>
            <p>
              We've curated a selection of Airbnb, VRBO, and private listings
              close to the slopes, ensuring you have a comfortable place to stay
              during your ski adventure. Each listing is chosen for its
              convenience and quality.
            </p>
          </div>
          <div className="partnership">
            <img loading="lazy" src={slopeImage} alt="Ski Slope" />
            <h3>Ski Slopes</h3>
            <p>
              Discover the best ski slopes where you can enhance your skills
              with our expert instructors. Explore our map to find the perfect
              location for your next lesson.
            </p>
          </div>
        </div>

        <h2>Our Locations</h2>
        <p>
          Explore the map below to find your perfect accommodation and the
          nearest slopes where you can enjoy skiing and snowboarding lessons.
        </p>
      </section>

      <div className="mapContainer">
        {windowState == "open" ? (
          <div className="contentWindow">
            <header>
              <button
                className="show-all-btn"
                onClick={() => setWindowState("back")}
              >
                {" "}
                Show All
              </button>

              <h3> {markerInfo.title}</h3>
            </header>

            <img src={bkgImage} alt="Image" />
            <h5 className="link-container">
              {" "}
              <a
                className="link"
                href={`https://www.google.com/maps/search/?api=1&query=${markerInfo.position?.lat()}%2C${markerInfo.position?.lng()}`}
              >
                View on Google Maps
              </a>
            </h5>
            <p>
              This location is an expressive venue with numerous attractions
              along radius of the nile river. Clearly some bullshit but come
              book a night you the vibes. This location is an expressive venue
              with numerous attractions along radius of the nile river. Clearly
              some bullshit but come book a night you the vibes.
            </p>
          </div>
        ) : (
          windowState == "back" && (
            <div className="contentWindow">
              <header>
                <button onClick={() => setWindowState("close")}>Close </button>

                <h3 onClick={() => setWindowState("open")}>
                  {" "}
                  {markerInfo.title}
                </h3>
              </header>
              <section>
                {locations.map((poi: Poi, index) => (
                  <LocationList poi={poi} index={index} />
                ))}
              </section>
            </div>
          )
        )}
        {true ? (
          <Map
            id="map"
            defaultZoom={5}
            defaultCenter={{ lat: 40.865, lng: -73.789 }}
            mapId="d3fc6c650c03d57f"
            onCameraChanged={(ev: MapCameraChangedEvent) =>
              console.log(
                "camera changed:",
                ev.detail.center,
                "zoom:",
                ev.detail.zoom
              )
            }
          >
            <PoiMarkers pois={locations} />
            {markerInfo.title && (
              <InfoWindow
                pixelOffset={[0, -40]}
                position={markerInfo.position}
                headerContent={<div>{markerInfo.title}</div>}
              />
            )}
          </Map>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
