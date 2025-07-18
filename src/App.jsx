import React, { useEffect } from "react";
import Nav from "./components/Nav";

const App = () => {

  const fetchUserdate = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("User data fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  useEffect(() => {
    fetchUserdate(import.meta.env.VITE_URL_API)
  }, []);
  return (
    <div className="m-0 p-0 box-border h-screen w-screen ">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full"></div>
    </div>
  );
};

export default App;
