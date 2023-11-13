import "./App.css";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./HomePage"));
function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback="Please Wait while data is loading ...">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route  exact path='/game'  element={''}  />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </>
  );
}

export default App;
