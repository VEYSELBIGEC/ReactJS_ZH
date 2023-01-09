import React from "react";
import countries from "./countries.json";

const JsxPractise = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>

      <tbody>
        {countries.map((country, index) => (
          <tr key={country.code}>   {/* inspect yaptigimizda console Uyari veriyor: Each child in a list should have a unique "key" prop! o yuzden unique key name olarak index te yazabilirdik , onceki yazdigimiz icin */}
            <td>{index+1}</td>
            <td>{country.name}</td>
            <td>{country.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsxPractise;
