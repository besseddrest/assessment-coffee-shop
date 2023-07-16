import { useState, useEffect } from "react"
import ListItem from "./ListItem";
import { useOrders, useOrdersUpdate } from "@/context/OrdersContext";

const coffees = {
  drip: 1,
  americano: 2,
  latte: 3,
  cappucino: 4,
}

export default function Menu() {
  const [ menuItems, setMenuItems ] = useState([]);
  const orders = useOrders();
  const setOrders = useOrdersUpdate();

  function handleClick(name, duration) {
    const newOrder = {
      name,
      duration
    }
    setOrders([newOrder]);
  }

  useEffect(() => {
    const coffeeArr = [];

    for (const [key, value] of Object.entries(coffees)) {
      coffeeArr.push({ name: key, duration: value });
    }

    setMenuItems(coffeeArr);
  }, [])

  return (
    <div className="drinks__wrapper">
      <h1>Menu</h1>
      <ul className="drinks__list">
        {
          menuItems.map((item, i) => <ListItem key={`menu-${i}`} name={item.name} duration={item.duration} handleClick={handleClick} />)
        }
      </ul>
    </div>
  )
}