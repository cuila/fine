import React, { useEffect, useState } from "react";

const Events = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/items");
      const newItems = await res.text();
      setItems(newItems);
    }
    getDate();
  }, []);

  return (
    <>
      <h2>Events</h2>
      <p>{JSON.stringify(items) || "Loading items..."}</p>
    </>
  );
};

export default Events;
