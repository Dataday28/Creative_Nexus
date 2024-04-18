import { create } from "zustand";

const useStateSpoty = create((set) => ({
    dataSpoty: [], 
    error: null,
    isLoading: false,

    fetchSpoty: async() => {
        try {
            await set(() => ({ isLoading: true }));

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '06d3aa3f6cmsh2dd4f96605a02cap14e06bjsn8e6e2f60712a',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };
    
            const url = 'https://spotify23.p.rapidapi.com/playlist/?id=70GOtPdEBvGeg90cBJc6QO';

            const responseSpoti = await fetch(url, options);
            const dataSpoty = await responseSpoti.json();

            await set(() => ({ dataSpoty, isLoading: false }));

        } catch(error) {
            await set(() => ({ error }));
        }
    }

}));

export default useStateSpoty;