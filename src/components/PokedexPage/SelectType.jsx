import { useEffect, useRef, useState } from "react";
import useFetch from "../../Hooks/useFetch";

const SelectType = ( { setSelectValue }) =>{

    const url = 'https://pokeapi.co/api/v2/type';
    const [infoApi, getInfoApi, getTypeApi] = useFetch(url);
    

    useEffect(() => {
        getInfoApi();
    }, []);

    const selectElement = useRef();
    const handleChange = () => {
        setSelectValue(selectElement.current.value);
    };

    return (
        <div className="pl-8">
            <select onChange={handleChange} ref={selectElement} className="Home__input border-2 border-grey-500 rounded-1xl p-2 bg-white shadow-2xl w-full px-5">
                <option value="">All to Pokemons</option>
               {infoApi?.results.map((type) => (
                   <option key={type.url} value={type.url}>{type.name}</option>
               ))}
            </select>
        </div>
    );
}

export default SelectType;