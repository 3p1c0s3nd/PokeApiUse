import { useRef } from "react";
import { setTrainerName } from "../../store/slice/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () =>{


    const buscador = useRef();

    //Siempre que ejecutamos un dispatch ejecutamos una accion
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const HandleSubmit = (event) =>{
        event.preventDefault();
        const valor = buscador.current.value.trim();
        dispatch(setTrainerName(valor));
        navigate("/pokedex");
    }


    return (

        <div className="Home__principal flex flex-col items-center justify-center w-full h-screen">
                <h1 className="Home__title pb-10"><img src="pokedex.png"  alt="pokedex" width={500} height={300}/></h1>
                <h2 className="Home__subtitle text-red-600 text-3xl text-bold">Hi Trainer!</h2>
                <p className="Home__text pb-5">you can start, give me your name</p>
                <form onSubmit={HandleSubmit}>
                    <input type="search" ref={buscador} placeholder="Enter your name" className="Home__input border-2 border-grey-500 rounded-1xl p-2 bg-white shadow-2xl"></input>
                    <button className="Home__button bg-red-600 text-white rounded-1xl p-2">Comenzar</button>
                </form>
                <footer className="Home__footer flex flex-col items-center justify-center w-full absolute bottom-0">
                    <p className="Home__footer bg-red-600 text-center w-screen h-12 rounded-1xl z-0"></p>
                    <img src="pokebola.png" className="z-10 absolute " width={50} height={50}/>
                    <p className="Home__footer bg-black text-center w-screen h-12 rounded-1xl z-0"></p>
                </footer>
        </div>
    )


}

export default HomePage;