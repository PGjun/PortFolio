import data from "../data";
import { useState, useMemo } from "react";

export default function SelectArea() {
  const [currentCountry, setCurrentCountry] = useState("전국");
  const [currentCity, setCurrentCity] = useState(data[currentCountry][0]);
  const countries = useMemo(() => Object.keys(data), []);
  const cities = useMemo(() => data[currentCountry], [currentCountry]);

  const onChange = (e) => {
    const currentCountry = e.target.value;
    setCurrentCountry(currentCountry);
    setCurrentCity(data[currentCountry][0]);
  };
  const onChange2 = (e) => {
    setCurrentCity(e.target.value);
  };

  return (
    <>
      <select
        name="selectId1"
        id="selectId1"
        onChange={onChange}
        value={currentCountry}
        style={{ padding: "5px", border: "none", outline: "none" }}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select
        name="selectId2"
        id="selectId2"
        value={currentCity}
        onChange={onChange2}
        style={{ padding: "5px", border: "none", outline: "none" }}
      >
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
}
