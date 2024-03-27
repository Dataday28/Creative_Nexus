import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [images, setImages] = useState([]);

  const fetchEvents = async() => {

    const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&fields=image_id&page=2`);
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

        {images.map(image => (<img src={`https://www.artic.edu/iiif/2/${image.image_id}/full/200,/0/default.jpg`} />))}

      </section>
      
    </>
  )
}

export default App
