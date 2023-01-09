import React from "react";

const Jsx5 = () => {
  const names = ["Ali", "Veli", "Ayse", "Fatma"];
  const cities = ["Dubai", "Moscow", "NewYork", "Washington"];

  return (
    <>
      <ul className="test">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </>
  );
};

export default Jsx5;
