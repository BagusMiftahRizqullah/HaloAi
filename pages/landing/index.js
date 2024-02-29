import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import { login, logout } from "@/redux/reducers/AuthReducer";
import { useDispatch, useSelector } from "react-redux";

function landing() {
  const [isAuth, setIsAuth] = useState(false);
  // const dispatch = useDispatch();

  // const handleLogin = () => {
  //   dispatch(login("admin"));
  //   setIsAuth(true);
  // };

  const getAuthStatus = useSelector((state) => state.AuthReducer.isAuth);
  console.log("getAuthStatus", getAuthStatus);
  // useEffect(() => {}, []);

  return (
    <div className="w-full h-screen bg-white">
      {/* Header */}
      <div>{getAuthStatus ? "ada" : "gaada"}</div>
      <div>landing</div>

      <input type="text" onchange={(a) => setIsAuth(a.target.value)} />
      <br></br>
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
}

export default landing;
