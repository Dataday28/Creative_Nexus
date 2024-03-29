import { useState, useEffect } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);

    const fetchEvents = async() => {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&fields=image_id&limit=12`);
        const data = await response.json();
        const event = data.data;
        
        setImages(event);
            
        console.log(event);
    
    }
    
    useEffect(() => {
        fetchEvents();
    }, []);
    
    return (
        <>
            <h1>Gallery</h1>
        
            <section>
        
                {images.map(image => (<img src={`https://www.artic.edu/iiif/2/${image.image_id}/full/400,/0/default.jpg`} />))}
        
            </section>
                
        </>
        )
}

export default Gallery;