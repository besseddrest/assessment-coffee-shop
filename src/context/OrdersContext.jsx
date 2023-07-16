import { createContext, useContext, useState } from "react";

const OrdersContext = createContext();
const OrdersUpdateContext = createContext();

export function useOrders() {
  return useContext(OrdersContext);
}

export function useOrdersUpdate() {
  return useContext(OrdersUpdateContext);
}

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function updateOrders(newOrders) {
    setOrders(prevOrders => {
      if (newOrders.length > 0) {
        return [...prevOrders, ...newOrders];
      }

      const [first, ...rest] = prevOrders;
      return rest;
    })
  }

  return (
    <OrdersContext.Provider value={orders}>
      <OrdersUpdateContext.Provider value={updateOrders}>
        {children}
      </OrdersUpdateContext.Provider>
    </OrdersContext.Provider>
  )
}