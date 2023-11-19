import "./Race.css";
import React, { Fragment, useState, useEffect } from "react";
const fakeFetch = (person) => {
  if (person === "") {
    return Promise.resolve("");
  }
  return new Promise((res) => {
    setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
  });
};
const RaceConditionSolution = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState("");

  useEffect(() => {

    // We are use a boolean "canceled" flag to ensure that the component is mounted. 
    // This way we only update state if the "canceled" flag is true. And if we were making multiple requests inside a component,
    // we would always display the data for the last one.


    let canceled = true;
    setLoading(true);

    fakeFetch(person).then((data) => {
      if (canceled) {
        setData(data);
        setLoading(false);
      }
    });

    return () => (canceled = false);
  }, [person]);

  return (
    <Fragment>
      <div className="solutionButton">
        <button onClick={() => setPerson("Nick")}>Nick's Profile</button>
        <button onClick={() => setPerson("Deb")}>Deb's Profile</button>
        <button onClick={() => setPerson("Joe")}>Joe's Profile</button>
      </div>
      <div className="solutionResult">
        {person && (
          <Fragment>
            <h1>{person}</h1>
            <p>{loading ? "Loading..." : data}</p>
          </Fragment>
        )}
      </div>
      {Boolean(data) && (
        <div
          className="raceSolutionStatement"
          style={{ left: "0px", right: "5px" }}
        >
          <div style={{ color: "red" }}>Solution For Race Condition.</div>
          We can fix this race condition by “canceling” the setData call for any
          clicks that aren’t most recent.We do this by creating a boolean
          variable scoped within the useEffect hook and returning a clean-up
          function from the useEffect hook that sets this boolean “canceled”
          variable to true. When the promise resolves, setData will only be
          called if the “canceled” variable is false.Even if a previous button
          click’s fakeFetch promise resolves later, its canceled variable will
          be set to true and setData(data) will not be executed!.
          <p>
            Perfect — No matter how many times we click different buttons, we
            will always only see data associated with the last button click.
          </p>
        </div>
      )}
    </Fragment>
  );
};
export default RaceConditionSolution;

/**                                                                        Solution
 * We can fix this race condition by “canceling” the setData call for any clicks that aren’t most recent. 
 * We do this by creating a boolean variable scoped within the useEffect hook and returning a clean-up function from the useEffect hook 
 * that sets this boolean “canceled” variable to true. When the promise resolves, setData will only be called if the “canceled” variable is false.
 * 
 * 
 * 
 * Even if a previous button click’s fakeFetch promise resolves later, its canceled variable will be set to true and setData(data) will not be executed!
 * Perfect — No matter how many times we click different buttons, we will always only see data associated with the last button click.

 */

/**                                                                       Solution Two
 * 
 * we Can fix this race condition by using setTimeout.
 * 
 * 
 * import React, { Fragment, useState, useEffect } from "react";
const fakeFetch = (person) => {
  return fetch(`https://api.postalpincode.in/postoffice/${person}`);
};
const App = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    let timer;
    setLoading(true);

    timer = setTimeout(() => {
      fakeFetch(person)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [person]);
  return (
    (
      <Fragment>
        <button onClick={() => setPerson("new delhi")}>delhi</button>
        <button onClick={() => setPerson("kolkata")}>kolkata</button>
        <button onClick={() => setPerson("mumbai")}>mumbai</button>
        {person && (
          <Fragment>
            <h1>{person}</h1>
            <p>
              {loading
                ? "Loading..."
                : data &&
                  data[0] &&
                  data[0].PostOffice &&
                  data[0].PostOffice[0].Division}
            </p>
          </Fragment>
        )}
      </Fragment>
    )
  );
};
export default App;
 * 
 */

/**                                                                     Solution 3
 * 
 *                                                        Cancelling the API request using AbortController()

JavaScript web API’s have a method called AbortController.
This AbortController has a property called signal that allows us to create an AbortSignal that can be associated with the Fetch API which provides an option to abort the API request.
With this during the clean-up when the component is about to unmount, we can invoke the abort to cancel the API request.
 * 
 * 
 * 
 * 
 * 
 * import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18.2.0'
   import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const App = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchData = async () => {
      try{
        let resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}`,{
            signal: abortController.signal,
          });
        resp = await resp.json();
        setData(resp);
      }catch(error){
        // abort controller throws error when aborted
        // thus it needs to be handled
      }
    };

    fetchData();
    
    () => {
       abortController.abort();
    }
  }, [props.id]);

  return <div>{data.title || "Hello World!"}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
 * 
 * 
 */

//                                                                  Real world Example with AbortController.

/**
 * import React, { Fragment, useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);

    const fetchData = () => {
      fetch(`https://api.postalpincode.in/postoffice/${person}`, {
        signal: abortController.signal
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err, "error");
        });
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [person]);
  return (
    <Fragment>
      <button onClick={() => setPerson("new delhi")}>delhi</button>
      <button onClick={() => setPerson("kolkata")}>kolkata</button>
      <button onClick={() => setPerson("mumbai")}>mumbai</button>
      {person && (
        <Fragment>
          <h1>{person}</h1>
          <p>
            {loading
              ? "Loading..."
              : data &&
                data[0] &&
                data[0].PostOffice &&
                data[0].PostOffice[0].Division}
          </p>
        </Fragment>
      )}
    </Fragment>
  );
};
export default App;

 */
