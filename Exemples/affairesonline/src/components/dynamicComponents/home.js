import React from "react";
 import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const Home = () => {

    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated);
console.log(isAuthenticated);
  return  isAuthenticated ? <h1>Home</h1> :<Navigate to="/login"/>;
};

export default Home;