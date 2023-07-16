import { useEffect, useRef, useState } from "react";
import ListItem from "./ListItem"
import { useOrders, useOrdersUpdate } from "@/context/OrdersContext";
import { useCounter, useCounterUpdateContext } from "@/context/CounterContext";

export default function Orders() {
  const [ isWorking, setIsWorking ] = useState(false);
  const orders = useOrders();
  const setOrders = useOrdersUpdate();
  const counterItems = useCounter();
  const setCounterItems = useCounterUpdateContext();

  useEffect(() => {
    if (!isWorking && orders.length > 0) {
      setIsWorking(true);
      const [first, ...rest] = orders;
      setTimeout(() => {
        setOrders(() => {
          return rest;
        });
        setCounterItems([first]);
        setIsWorking(false);
      }, first.duration * 1000)
    }
  }, [setCounterItems, setOrders, isWorking, orders]);

  return (
    <div className="drinks__wrapper">
      <h1>Orders</h1>
      <ul className="drinks__list">
        { 
          orders.map((item, i) => <ListItem key={`order-${i}`} name={item.name} duration={item.duration} />)
        }
      </ul>
    </div>
  )
}