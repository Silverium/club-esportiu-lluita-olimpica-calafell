import 'mapbox-gl/dist/mapbox-gl.css';

import MapBox, { NavigationControl } from "react-map-gl";
const BCN_POSITION = {
	latitude: 41.2034281,
	longitude: 1.5679,
}
import { MapEvent, Marker, MarkerProps, Popup } from "react-map-gl";

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const style = "mapbox://styles/mapbox/streets-v9";
const ContactePage: React.FC = () => {
    return (
        <div className="flex h-full flex-col justify-center m-2 md:m-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
            <div>
                Email: <a href="mailto:lluitaolimpicacalafell@gmail.com?subject=Informaci%C3%B3.%20%5Borigen%3A%20web%5D&body=Hola%20V%C3%ADctor%21%0A%0A">lluitaolimpicacalafell@gmail.com</a>
            </div>
            <div className="h-[500px] w-full">

            <MapBox
                mapboxAccessToken={accessToken}
                initialViewState={{
                    ...BCN_POSITION,
                    zoom: 16,
                }}
                mapStyle={style}>
                    <NavigationControl />
                    <Marker latitude={BCN_POSITION.latitude} longitude={BCN_POSITION.longitude}>
                        <div className="text-4xl">📍</div>
                    </Marker>
                </MapBox>
            </div>
        </div >
    );
};

export default ContactePage;
