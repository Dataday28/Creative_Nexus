import { useState } from "react";

const useApis = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchArt = async(params) => {
        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&fields=id,title,artist_display,date_display,image_id&limit=12${params?.length ? params : ''}`);
            const data = await response.json();
            
            setData(data);
            setIsLoading(false)
        } catch(error) {
            setError(error);
        }
    }

    return {
        events: data?.data || [],
        page: data?.pagination || {},
        isLoading,
        error,
        fetchArt,
    }
}

export default useApis;