import { useCounter, useCounterUpdateContext } from "@/context/CounterContext";
import ListItem from "./ListItem"
import { useEffect, useState } from "react";

export default function Counter() {
  const counterItems = useCounter();
  const setCounterItems = useCounterUpdateContext();

  // useEffect(() => {
  //   if (counterItems.length > 0) {
  //     setTimeout(() => {
  //       counterItems.shift();
  //       setCounterItems([...counterItems])
  //     }, 3000);
  //   }
  // }, [counterItems])

  return (
    <div className="drinks__wrapper">
      <h1>Counter</h1>
      <ul className="drinks__list">
        {
          counterItems.map((item, i) => <ListItem key={`counter-item-${i}`} name={item.name} duration={item.duration}/>)
        }
      </ul>
    </div>
  )
}