import { useState, useEffect } from "react";
import styles from "./styles.module.css"
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer"
import Events from "../../components/Events";
import useApis from "../../hooks/useApis";
import ReactPaginate from "react-paginate";

const Gallery = () => {
    const {events, isLoading, error, page, fetchArt} = useApis()

    useEffect(() => {
        fetchArt();
    }, []);

    const handlePageClick = ({selected}) => {
        fetchArt(`&page=${selected + 1}`)

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

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
                <ReactPaginate
                    className = {styles.pagination}
                    nextClassName = {styles.next}
                    previousClassName = {styles.previous}
                    pageClassName = {styles.page}
                    activeClassName = {styles.activePage}
                    breakClassName={styles.break}
                    
                    breakLabel="|"
                    nextLabel = ">"
                    onPageChange = {handlePageClick}
                    pageRangeDisplayed = {2}
                    pageCount = {83}
                    previousLabel = "<"
                    renderOnZeroPageCount={null}
                />
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