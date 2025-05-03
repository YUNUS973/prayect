import React from "react";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { id: "m2", name: "Schnitzel", description: "A german specialty!", price: 16.5 },
  { id: "m3", name: "Barbecue Burger", description: "American, raw, meaty", price: 12.99 },
  { id: "m4", name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
];

export default function Main({ cart, setCart, amounts, setAmounts }) {
  const handleAmountChange = (id, value) => {
    setAmounts((prev) => ({ ...prev, [id]: +value }));
  };

  const addToCart = (meal) => {
    const amount = amounts[meal.id] || 1;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === meal.id);
      if (existing) {
        return prev.map((item) =>
          item.id === meal.id ? { ...item, amount: item.amount + amount } : item
        );
      }
      return [...prev, { ...meal, amount }];
    });
  };

  return (
    <>
      <section className="summary">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious
          lunch or dinner at home.
        </p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </section>

      <div className="meal-list">
        {DUMMY_MEALS.map((meal) => (
          <div key={meal.id} className="meal-item">
            <div>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
              <div className="price">${meal.price.toFixed(2)}</div>
            </div>
            <div className="add-controls">
              <input
                type="number"
                min="1"
                value={amounts[meal.id] || 1}
                onChange={(e) => handleAmountChange(meal.id, e.target.value)}
              />
              <button onClick={() => addToCart(meal)}>+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

