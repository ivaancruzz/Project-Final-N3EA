import React from "react";
import Modal from './components/Modal'
import { Time } from "./components/Time";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white">
      <Modal/>

     <Time/>
      </div>
     
    </>
  );
}

export default App;