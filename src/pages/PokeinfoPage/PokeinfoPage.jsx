import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PokeinfoPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, []);

  let claseBorder = "PokeCard  border-8 rounded-2xl flex flex-col shadow-2xl";
  let claseGradient = "PokeCard__header-img flex items-center justify-center z-0 w-70 h-40 bg-gradient-to-t "
  let claseName = "PokeCard__name text-3xl font-bold text-center";
  let claseType = "PokeCard__base_stat-span text-center font-bold";

  pokemon?.types.map((dato) => {
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
  })
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
      <article className="PokeCard border-8 rounded-2xl flex flex-col shadow-2xl  mt-52  ml-20 mr-20">
      <Link to="/pokedex" className="font-bold underline">Home</Link>
        <div className={claseGradient}>
          <img
            src={pokemon?.sprites?.other["official-artwork"]["front_default"]}
            alt={pokemon?.name}
            className="PokeCard__img flex items-center justify-center "
            width={400}
            height={400}
          />
        </div>
        <div className="PokeCard__body pt-28 flex flex-col items-center justify-center">
          <h1 className="PokeCard__name text-3xl font-bold border-2 p-2">
            #{pokemon?.id}
          </h1>
          <div className="PokeCard__types flex items-center justify-center flex-row">
            <h2 className="PokeCard__name text-3xl font-bold  p-2">
              {pokemon?.name}
            </h2>
          </div>
          <ul className="PokeCard__stats flex items-center justify-center flex-row space-x-8 pt-5">
            <li className="PokeCard__stat flex items-center justify-center flex-col">
              Height: <span className="font-bold">{pokemon?.height}</span>
            </li>
            <li className="PokeCard__stat flex items-center justify-center flex-col">
              Weight: <span className="font-bold">{pokemon?.weight}</span>
            </li>
          </ul>
        </div>
        <div className="PokeCard__footer flex items-center justify-around">
          <div className="PokeCard__types flex items-center justify-center flex-col">
            <span>Tipo</span>

            <div className="PokeCard__types flex items-center justify-center">
              <span className="PokeCard__type px-12 bg-green-500 mx-2">
                {pokemon?.types[0].type.name}
              </span>
              <span className="PokeCard__type px-12 bg-violet-500 text-white">
                {pokemon?.types[1]?.type.name}
              </span>
            </div>
          </div>

          <span className="PokeCard__types flex items-center justify-center flex-col">
            <span>Habilidades</span>
            <div>
              <span className="PokeCard__type px-12 bg-white border-2 border-grey-500 mx-2">
                {pokemon?.abilities[0].ability.name}
              </span>
              <span className="PokeCard__type px-12 bg-white border-2 border-grey-500 mx-2">
                {pokemon?.abilities[1].ability.name}
              </span>
            </div>
          </span>
        </div>

        <div>
          <span className="text-3xl flex flex-row pl-10">
            Stats <hr className=" border-b-2 w-screen pt-6 mx-10" />
          </span>
          <div className="flex flex-row justify-center items-center">
            <span className="font-bold">
              {pokemon?.stats[0].stat.name.toUpperCase()}
            </span>{" "}
            <div className="w-20 bg-gradient-to-r from-yellow-500 to-yellow-700 h-4 border-2"></div>
            <div className="w-20 bg-gray-300 h-4 border-2"></div>
            <span>{pokemon?.stats[0].base_stat}</span>
          </div>

          <div className="flex flex-row justify-center items-center">
            <span className="font-bold">{pokemon?.stats[1].stat.name}</span>
            <div className="w-20 bg-gradient-to-r from-yellow-500 to-yellow-700 h-4 border-2"></div>
            <div className="w-20 bg-gray-300 h-4 border-2"></div>
            <span>{pokemon?.stats[1].base_stat}</span>
          </div>

          <div className="flex flex-row justify-center items-center">
            <span className="font-bold">{pokemon?.stats[2].stat.name}</span>
            <div className="w-20 bg-gradient-to-r from-yellow-500 to-yellow-700 h-4 border-2"></div>
            <div className="w-20 bg-gray-300 h-4 border-2"></div>
            <span>{pokemon?.stats[2].base_stat}</span>
          </div>

          <div className="flex flex-row justify-center items-center">
            <span className="font-bold">{pokemon?.stats[3].stat.name}</span>
            <div className="w-20 bg-gradient-to-r from-yellow-500 to-yellow-700 h-4 border-2"></div>
            <div className="w-20 bg-gray-300 h-4 border-2"></div>
            <span>{pokemon?.stats[3].base_stat}</span>
          </div>

          <div className="flex flex-row justify-center items-center">
            <span className="font-bold">{pokemon?.stats[4].stat.name}</span>
            <div className="w-20 bg-gradient-to-r from-yellow-500 to-yellow-700 h-4 border-2"></div>
            <div className="w-20 bg-gray-300 h-4 border-2"></div>
            <span>{pokemon?.stats[4].base_stat}</span>
          </div>
        </div>
      </article>

      <article className="PokeCard border-8 rounded-2xl flex flex-col shadow-2xl  mt-10  ml-20 mr-20 mb-10">
        <span className="text-3xl flex flex-row pl-10 mt-10 mb-10">
          Movimientos <hr className=" border-t-2 w-screen pt-6 mx-10 mt-6" />
        </span>
        <div className="flex flex-row justify-center items-center flex-wrap">
          {pokemon?.moves.map((move) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-300 h-10 border-2 border-grey-500 mx-2 w-40 text-center font-bold text-lg rounded-2xl">
                  <span className="font-bold">{move.move.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default PokeinfoPage;
