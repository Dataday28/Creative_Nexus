import { create } from "zustand";

const useStateManage = create((set) => ({
    data: [],
    error: null,
    isLoading: false,

    fetchArt: async (params) => {
        try {
            await set(() => ({ isLoading: true }));

            const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&fields=id,title,artist_display,date_display,image_id&limit=12${params?.length ? params : ''}`);
            const data = await response.json();

            await set(() => ({ data, isLoading: false }));

        } catch(error) {
            await set(() => ({ error }));
        }
    },
}));

export default useStateManage;