import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setSessionLoggin } from "../../store/slice/sessionLoggin.slice";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  //La logica para proteger las rutas se encuentra en el store

  const trainerName = useSelector((store) => {
    return store.trainerName;
  });

  const sessionLoggin = useSelector((store) => {
    return store.sessionLoggin;
  });

  const dispatch = useDispatch();

  console.log(localStorage.getItem("trainerName"));
  if (localStorage.getItem("trainerName") != null) {
    return <Outlet />;
  } else {
    if (trainerName.length > 3) {
      useEffect(() => {
        localStorage.setItem("trainerName", trainerName);
      }, []);
      //dispatch(setSessionLoggin(true));
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  }
};

export default ProtectedRoutes;
