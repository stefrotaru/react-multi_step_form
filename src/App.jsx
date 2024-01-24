// import { useState } from 'react'
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";

import "./styles/App.scss";

function App() {
  return (
    <>
      <div className="container">
        <ProgressBar />
        <Form />
      </div>
    </>
  );
}

export default App;
