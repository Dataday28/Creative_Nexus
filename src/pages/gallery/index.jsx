import { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer"
import Events from "../../components/Events";
import useApis from "../../hooks/useApis";

const Gallery = () => {
    const {events, isLoading, error, fetchArt} = useApis()

    useEffect(() => {
        fetchArt();
    }, []);

    const renderEvents = () => {
        if (isLoading) {
            return <h2>Cargando Imagenes...</h2>
        }

        if (error) {
            return <h2>Ha ocurrido un error</h2>
        }

        return (
            <div>
                <Events events = {events} />
            </div>
        )
    }
    
    return (
        <>
            <NavBar />
            <h1>Gallery</h1>
            {renderEvents()}

            <Footer />
        </>
        )
}

export default Gallery;