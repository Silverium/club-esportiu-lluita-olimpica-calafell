import 'mapbox-gl/dist/mapbox-gl.css';

import BlogMeta from 'components/BlogMeta';
import Head from 'next/head';
import { FC, useState } from 'react';
import MapBox, { NavigationControl } from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
const EL_CASTELL_POSITION = {
    latitude: 41.2034281,
    longitude: 1.5679,
}

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const style = "mapbox://styles/mapbox/streets-v9";
const ContactePage: FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return (
        <div className="h-svh flex flex-col justify-around m-2 md:p-10 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
            <Head>
                <title>Contacte | LLuita Olímpica Calafell</title>
                <BlogMeta path='/contacte'/>
            </Head>
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='font-bold'>La lluita és un esport de contacte... contacta&apos;ns!</h1>
                    <p>Club Esportiu Lluita Olímpica Calafell</p>
                    <p>Plaça Cosme Maine</p>
                    <p>43820 Calafell, Tarragona</p>
                </div>
                <div>
                    <h2 className='font-bold'>Horari</h2>
                    <p>De Dilluns a divendres de 18:00 a 20:30</p>
                </div>
                <div>
                    <span className='font-bold'>Email:</span> <a href="mailto:lluitaolimpicacalafell@gmail.com?subject=Informaci%C3%B3.%20%5Borigen%3A%20web%5D&body=Hola%20V%C3%ADctor%21%0A%0A">lluitaolimpicacalafell@gmail.com</a>
                </div>
                <div>
                    <span className='font-bold'>Telèfon:</span> <a href="tel:+34636557181">+34 636 557 181 (Víctor)</a> {/* Added telephone link */}
                </div>
            </div>
            <div className="h-1/2 md:h-full w-full">

                <MapBox
                    mapboxAccessToken={accessToken}
                    initialViewState={{
                        ...EL_CASTELL_POSITION,
                        zoom: 16,
                    }}
                    mapStyle={style}>
                    <NavigationControl />
                    <Marker latitude={EL_CASTELL_POSITION.latitude} longitude={EL_CASTELL_POSITION.longitude} onClick={ev => {
                        ev.originalEvent?.stopPropagation();
                        setShowPopup((prev) => !prev);
                    }}>
                        <div className="text-4xl">📍</div>
                        {showPopup && (
                            <Popup
                                longitude={EL_CASTELL_POSITION.longitude}
                                latitude={EL_CASTELL_POSITION.latitude}
                                anchor="bottom"
                                offset={20}
                                closeButton={false}
                                onClose={() => setShowPopup(false)}
                            >
                                <div className='p-1'>
                                    <h3>Club Esportiu Lluita Olímpica Calafell</h3>
                                    <p>Plaça Cosme Maine</p>
                                    <p>43820 Calafell, Tarragona</p>
                                    <a href='https://www.google.com/maps/dir/?api=1&destination=Escola+Castell+de+Calafell'
                                        className='text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                        target="_blank" rel="noopener noreferrer">Com arribar-hi</a>
                                </div>
                            </Popup>
                        )}
                    </Marker>
                </MapBox>
            </div>
        </div >
    );
};

export default ContactePage;
