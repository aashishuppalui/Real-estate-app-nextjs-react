import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


  
  export const fetchApi = async(url) => {
      const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a298280648msh449a1f49f54b1a0p13efacjsn4c2c851bccb9'
          }
    })

    return data;
}