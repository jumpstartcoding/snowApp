import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { getListings } from "./Crud";
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
import { clientContext } from "./clientContext";

export default function MapComponent() {
  const [markerInfo, setMarkerInfo] = useState<{
    title: string;
    content: string;
    position: google.maps.LatLng | null;
  }>({
    title: "",
    content: "",
    position: null,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [windowState, setWindowState] = useState<string>("None");
  const client = useContext(clientContext);

  type Poi = { key: string; location: google.maps.LatLngLiteral; content: "" };

  const [lol, setLol] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const lis = await getListings(client);
      const newLocations = lis.data.listListings?.items.map((elt) => ({
        key: elt?.title || "Unknown",
        location: {
          lat: Number(elt?.lat) || 0,
          lng: Number(elt?.long) || 0,
        },
        content: elt?.description || "Details coming soon.",
      }));

      setLol(newLocations || []);
    }
    fetchData();
  }, [client]); // Add client as a dependency

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
          content: poi.content,
        });
      },
      [map]
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
    if (!map || props.poi.key == markerInfo.title) {
      return <></>;
    }

    const changePosition = (poi: Poi) => {
      map.panTo(poi.location);

      map.setZoom(15);
      setMarkerInfo({
        title: poi.key,
        content: poi.content,
        position: poi.location
          ? new google.maps.LatLng(poi.location.lat, poi.location.lng)
          : null, // Convert LatLngLiteral to LatLng if available
      });
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
            <div className="details-container">
              <h6>
                <strong>Details</strong>
              </h6>
              <p>{markerInfo.content}</p>
            </div>
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
                {lol.map((poi: Poi, index: number) => (
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
            <PoiMarkers pois={lol} />
            {markerInfo.title && (
              <InfoWindow
                pixelOffset={[0, -40]}
                position={markerInfo.position}
                headerContent={
                  <div className="infoWindow">{markerInfo.title}</div>
                }
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
