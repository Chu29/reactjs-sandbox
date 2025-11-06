import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleQtyChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleQtyChange}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button>Add</button>
    </form>
  );
}
