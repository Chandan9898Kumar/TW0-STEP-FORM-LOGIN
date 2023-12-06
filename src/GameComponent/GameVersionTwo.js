import "./gameStyle.css";
import React from "react";
import { useState } from "react";

function Cell({ filled, onClick, isDisabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

export default function GameVersionTwo() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      //  Here if console.log(order) , it will always show you the initial values which we stored before setInterval started.
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });

      //                                                                     OR
      //     order.pop()
      //     setOrder([...order])
      //     if (order.length === 0) {
      //     clearInterval(timer);
      //     setIsDeactivating(false);
      //     }

      //    Note :  Do not set data like this - setData(order), it will perform some unexpected results, because we are setting same const value: order.
      //    Reason :  setInterval's closure only accesses the "order" variable in the first render,
      //    when you set same value then react will not update the component.It has to be different. And we set data inside setInterval which takes initial values due to closures.
    }, 1000);
  };

  const activateCells = (index) => {
    //  Here instead of doing setOrder([...order,index]) we are creating a new constant to store its value because setState performs asynchronus behaviour.;

    const newOrder = [...order, index];
    setOrder(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
}
