import { createContext, useContext, useEffect, useState } from "react";

const CounterContext = createContext();
const CounterUpdateContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}

export function useCounterUpdateContext() {
  return useContext(CounterUpdateContext);
}

export function CounterProvider({ children }) {
  const [counterItems, setCounterItems] = useState([]);

  function updateCounterItems(items) {
    setCounterItems(prevItems => [...prevItems, ...items]);
  }

  useEffect(() => {
    if (counterItems.length > 0) {
      setTimeout(() => {
        setCounterItems(prevItems => {
          prevItems.shift();
          return [...prevItems];
        })
      }, 3000);
    }
  }, [counterItems])

  return (
    <CounterContext.Provider value={counterItems}>
      <CounterUpdateContext.Provider value={updateCounterItems}>
        {children}
      </CounterUpdateContext.Provider>
    </CounterContext.Provider>
  )
}