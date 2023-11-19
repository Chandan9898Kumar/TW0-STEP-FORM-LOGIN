import "./App.css";
import React, { Suspense, lazy } from "react";
// eslint-disable-next-line 
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
const HomePage = lazy(() => import("./HomePage"));
const Game = lazy(() => import("./Game"));

const RaceCondition = lazy(() => import("./HandleRaceCondition/MainComponent"));
function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <BrowserRouter basename="/">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/game" element={<Game />} />
              <Route path="/raceCondition" element={<RaceCondition />} />
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
  /**                                                   @LinkComponent 
 * 
  we actually want to create some links so we can move around our application more easily instead of having to change the URL manually in the browser.
 * 
  We can do so with another special component from React Router DOM called the Link component. It accepts the "to" prop,
  which specifies where we want the link to navigate our user to.
 * 

  Ex -    <Link to="/about">About</Link>
 * */

  return (
    <>
      <div style={{ fontSize: "40px", margin: "auto" }}>
        {/*                      This Link will directly take us to home page because we have given location of home page  like :   to='/'       */}
        <Link to="/">You have landed on a page that doesn't exist</Link>
      </div>
    </>
  );
}

/**
 *                                                                     404 @Route
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

/**                                                                            Redirect and Navigate Component
* 
The Redirect component was usually used in previous versions of the react-router-dom package to quickly do redirects by 
simply importing the component from react-router-dom and then making use of the component by providing the to prop, passing the page you desire to redirect to.


Ex -   
import { Redirect } from 'react-router-dom';

<Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/>

BUT  - 
With the release of React Router v6, the "Redirect" component was removed and replaced with the "Navigate" component, 
which operates just as the Redirect component does by taking in the to prop to enable you to redirect to the page you specify.


* Ex - 
*/

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import ErrorPage from './ErrorPage';
// import Home from './Home';

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={ <Home /> }
//                 />
//                 {/* The next line is very important for the Navigate component to work */}
//                 <Route
//                     path="/error-page"
//                     element={ <ErrorPage /> }
//                 />
//                 <Route
//                     path="/redirect"
//                     element={ <Navigate to="/error-page" /> }
//                 />
//             </Routes>
//         </BrowserRouter>
//     );
// }
// export default App;

/**                                                                        Conditional Redirects
 * 
 * 
 * 
 * const [cartItems, setCartItems] = useState([]);

<Route
    path="/checkout"
    element={ cartItems.length < 1 ? <Navigate to="/products" /> : <Checkout /> }
/>

 * 
 * 
 */
