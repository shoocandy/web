import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import { NavBar } from "../components";
import { HomeView } from "../components/home";

const renderPage = (location) => {
  const { pathname } = location;
  if (pathname == "/") {
    return <HomeView />;
  } else {
    return <Outlet />;
  }
};

export default function Home() {
  const location = useLocation();
  console.log("location :", location);
  return (
    <div>
      <NavBar />
      {renderPage(location)}
    </div>
  );
}
