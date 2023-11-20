import { useSelector } from "react-redux";
import useFetch from "../../Hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../../components/PokedexPage/PokeCard";
import SelectType from "../../components/PokedexPage/SelectType";

const PokedexPage = () => {
  /*const trainerName = useSelector((store) => {
    return store.trainerName;
  });
*/
  const [urldata, setUrldata] = useState(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
  const trainerName = localStorage.getItem("trainerName");
  const buscador = useRef();
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  
  const [dataApi, getInfoApi, getTypeApi] = useFetch(urldata);
  const countPaginacion = dataApi?.count;
  useEffect(() => {
    if (selectValue == "") {
      getInfoApi();
    } else {
      getTypeApi(selectValue);
    }
  }, [urldata, selectValue]);

  useEffect(() => {
    localStorage.setItem("page", 0);
  },[]);
  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(buscador.current.value.toLowerCase().trim());
    buscador.current.value = "";
  };

  const cbfilter = (pokemon) => {
    return pokemon.name.includes(inputValue);
  };

  const handleCerrarsession = () => {
    localStorage.removeItem("trainerName");
    window.location.reload();
  };

  const newArray = [];
  for(let i = 0; i < countPaginacion; i++){
    newArray.push(i);
  }

  return (
    <div>
       <div>
          <img
            src="pokedex.png"
            className="z-10 absolute pt-8"
            width={300}
            height={50}
          />
          <p className="Home__footer bg-black text-center w-screen h-12 rounded-1xl z-0"></p>
        </div>
      <header className="Home__footer grid justify-items-end w-full absolute top-0">
        <p className="Home__footer bg-red-600 text-center w-screen h-12 rounded-1xl z-0"></p>
        <img
          src="pokebola.png"
          className="z-10 absolute pt-8"
          width={80}
          height={50}
        />
        <p className="Home__footer bg-black text-center w-screen h-12 rounded-1xl z-0"></p>
      </header>
      <p className="Home__subtitle text-red-600 text-2xl mt-28">
        <span>Welcome to {trainerName}</span>,{" "}
        <span className="text-black">here you can find favorite pokemons</span>
      </p>
      <span
        onClick={handleCerrarsession}
        className="Home__button bg-red-600 text-white rounded-1xl p-2 absolute right-10 hover:bg-red-700" style={{cursor: 'pointer'}}
      >
        Cerrar Session
      </span>
      <div className="Home__principal flex flex-row pl-10 pt-10">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            ref={buscador}
            className="Home__input border-2 border-grey-500 rounded-1xl p-2 bg-white shadow-2xl"
            placeholder="Search your pokemon"
          />
          <button className="Home__button bg-red-600 text-white rounded-1xl p-2 hover:bg-red-700">
            Search
          </button>
        </form>
        <SelectType setSelectValue={setSelectValue} />
      </div>
      <ul className="PokedexPage__ul flex flex-wrap justify-center pt-10">
        {dataApi?.results?.filter(cbfilter).map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
      </ul>

         
      <div className="paginacion flex flex-row align-items-center justify-center">
        <button className="Home__button bg-red-600 text-white rounded-1xl p-2 hover:bg-red-700" onClick={
          () => {
            var newOffset = parseInt(localStorage.getItem("page")) - 10;  
            localStorage.setItem("page", newOffset.toString());
            console.log(newOffset);
            setUrldata(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${newOffset}`);
          }
        }>
          Anterior
        </button>
        <span className="Home__button bg-red-600 text-white rounded-1xl p-2">
          
        </span>
        
        <button className="Home__button bg-red-600 text-white rounded-1xl p-2 hover:bg-red-700" onClick={() => {  
          var newOffset = parseInt(localStorage.getItem("page")) + 10;  
          localStorage.setItem("page", newOffset.toString());
          console.log(newOffset);
          setUrldata(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${newOffset}`);
        }}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PokedexPage;
