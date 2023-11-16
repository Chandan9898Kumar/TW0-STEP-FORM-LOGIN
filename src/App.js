import "./App.css";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
const HomePage = lazy(() => import("./HomePage"));
const Game = lazy(() => import("./Game"));

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <BrowserRouter basename="/">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/game" element={<Game />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </>
  );
}

export default App;

export function NotFound() {
  return (
    <>
      <div style={{fontSize: "40px", margin: "auto" }}>
        <Link to="/">You have landed on a page that doesn't exist</Link>
      </div>
    </>
  );
}

/**
 *                                                                     404 Route
 * 
If we attempt to go to a path that doesn't exist in our application, what are we going to see?
We're not going to see anything if we don't have a route corresponding to that. How do we make a catch-all route?
If a user attempts to go to a page for which we don't have a defined route, we can create a route and then set the path to an asterisk *:


This will match any attempt to visit a page that doesn't exist and
we can connect it to a not found component to tell our users that they have "landed on a page that doesn't exist."
 * 
 * 
 */

/**
 *                                                                        @BrowserRouter 
 * BrowserRouter component has a basename prop, which accepts a string as its value in case the React app is hosted from a sub-directory.
 * 
 * Adding basename in the BrowserRouter component ensures that all the links in the routes are prefixed with the base URL. 
 * For example,
 * <BrowserRouter basename="/app">
      <Route path=/contact  element={<div> </div>} />
    </BrowserRouter>
 * 
 *  <Link to='/contact' /> will be rendered as <a href='/app/contact'>.


 */
