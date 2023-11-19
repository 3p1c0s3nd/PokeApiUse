import axios from 'axios';
import { useState } from 'react';
const useFetch = (baseurl) => {

    const [infoApi, setInfoApi] = useState();

    const getApi = async() =>  {
        const url = `${baseurl}`;
        await axios.get(url).then(response => {
            setInfoApi(response.data);
        }).catch(error => {
            console.log(error);
        })
    };


    const getTypeApi = async(urlType) => {
        const url = `${urlType}`;
        await axios.get(url).then(response => {
            const obj = {
                results: response.data.pokemon?.map(pokemon => pokemon.pokemon
                )
            }
            setInfoApi(obj);
        }).catch(error => {
            console.log(error);
        })
    };



    return [infoApi, getApi, getTypeApi];

}


export default useFetch;