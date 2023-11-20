import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [datosApi, getInfoApi, getTypeApi] = useFetch(url);
  useEffect(() => {
    getInfoApi();
  }, []);

  const navigate = useNavigate();
  const handleNavigator = () => {
    navigate(`/pokedex/${datosApi?.id}`);
  };

  let claseBorder = "PokeCard  border-8 rounded-2xl flex flex-col shadow-2xl";
  let claseGradient = "PokeCard__header-img z-0 w-70 h-40 bg-gradient-to-r "
  let claseName = "PokeCard__name text-3xl font-bold text-center";
  let claseType = "PokeCard__base_stat-span text-center font-bold";
  datosApi?.types.map((dato) => {
    switch (dato.type.name) {
      case "poison" || "grass":
        claseBorder += " border-green-500";
        claseGradient += " from-green-500 to-green-700";
        claseName += " text-green-500";
        claseType += " text-green-500";
        break;
      case "fire":
        claseBorder += " border-red-500";
        claseGradient += " from-red-500 to-red-700";
        claseName += " text-red-500";
        claseType += " text-red-500";
        break;
      case "water":
        claseBorder += " border-blue-500";
        claseGradient += " from-blue-500 to-blue-700";
        claseName += " text-blue-500";
        claseType += " text-blue-500";
        break;
      case "bug":
        claseBorder += " border-yellow-500";
        claseGradient += " from-yellow-500 to-yellow-700";
        claseName += " text-yellow-500";
        claseType += " text-yellow-500";
        break;
      case "normal":
        claseBorder += " border-gray-500";
        claseGradient += " from-gray-500 to-gray-700";
        claseName += " text-gray-500";
        claseType += " text-gray-500";
        break;
      case "electric":
        claseBorder += " border-orange-500";
        claseGradient += " from-orange-500 to-orange-700";
        claseName += " text-orange-500";
        claseType += " text-orange-500";
        break;
      case "ground":
        claseBorder += " border-brown-500";
        claseGradient += " from-brown-500 to-brown-700";
        claseName += " text-brown-500";
        claseType += " text-brown-500";
        break;
      case "fairy":
        claseBorder += " border-pink-500";
        claseGradient += " from-pink-500 to-pink-700";
        claseName += " text-pink-500";
        claseType += " text-pink-500";
        break;
      case "fighting":
        claseBorder += " border-purple-500";
        claseGradient += " from-purple-500 to-purple-700";
        claseName += " text-purple-500";
        claseType += " text-purple-500";
        break;
      case "psychic":
        claseBorder += " border-pink-500";
        claseGradient += " from-pink-500 to-pink-700";
        claseName += " text-pink-500";
        claseType += " text-pink-500";
        break;
      case "rock":
        claseBorder += " border-gray-500";
        claseGradient += " from-gray-500 to-gray-700";
        claseName += " text-gray-500";
        claseType += " text-gray-500";
        break;
      case "ghost":
        claseBorder += " border-purple-500";
        claseGradient += " from-purple-500 to-purple-700";
        claseName += " text-purple-500";
        claseType += " text-purple-500";
        break;
      case "ice":
        claseBorder += " border-blue-500";
        claseGradient += " from-blue-500 to-blue-700";
        claseName += " text-blue-500";
        claseType += " text-blue-500";
        break;
      case "dragon":
        claseBorder += " border-purple-500";
        claseGradient += " from-purple-500 to-purple-700";
        claseName += " text-purple-500";
        claseType += " text-purple-500";
        break;
      default:
        claseBorder += " border-black-500";
        claseGradient += " from-black-500 to-black-700";
        claseName += " text-black-500";
        claseType += " text-black-500";
        break;
    }
  });


  return (<div className="p-2 pb-10" style={{ cursor: 'pointer' }}>
<div onClick={handleNavigator} className={claseBorder}>
      <header className="PokeCard__header pb-20">
        <div className={claseGradient}>
          <div className="pl-2 pt-5 flex ">
            <img
              src={
                datosApi?.sprites?.other["official-artwork"]["front_default"]
              }
              alt={""}
              className="z-10 absolute " 
              width={200}
              height={200}
            />
          </div>
        </div>
      </header>
      <span className="PokeCard__id text-center">#{datosApi?.id}</span>
      <h3 className={claseName}>{datosApi?.name}</h3>
      <ul className="PokeCard__types-ul flex gap-2 justify-center">
        {datosApi?.types.map((dato) => {
          return (
            <li key={dato.type.url} className="PokeCard__types-li">
              {dato.type.name}
            </li>
          );
        })}
      </ul>
      <span className="PokeCard__stats-title text-center">Tipo</span>
      <hr />
      <ul className="PokeCard__stats-ul grid grid-cols-2">
        {datosApi?.stats.map((dato) => {
          return (
            <li
              key={dato?.stat.url}
              className="PokeCard__stats-li flex flex-col"
            >
              <span className="PokeCard__stats-span text-center">
                {dato?.stat.name}
              </span>
              <span className={claseType}>
                {dato?.base_stat}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
    
  );
};

export default PokeCard;
