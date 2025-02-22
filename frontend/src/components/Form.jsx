import { React, useState } from "react";

function Form () {
    const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [carType, setCarType] = useState({
    sedan: false,
    suv: false,
    truck: false,
  });
  const [carMake, setCarMake] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(minPrice, maxPrice, location, carMake, carType);
    // Add your form submission logic here
  };

  const handleCarTypeChange = (sub) => {
    setCarType((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setMinPrice("");
    setMaxPrice("");
    setLocation("");
    setCarType({
      sedan: true,
      suv: false,
      truck: false,
    });
    setCarMake("");
  };
  return (
    <div>
      <h1>Match My Car</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="minPrice">Minimum Price ($)</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Enter min price"
          />
          <label htmlFor="maxPrice">Maximum Price ($)</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter max price"
          />
          <label htmlFor="firstname">Location*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter City or Zip Code"
            required
          />
          <label htmlFor="lang">Car Type</label>
          <input
            type="checkbox"
            name="lang"
            id="sedan"
            checked={carType.sedan === true}
            onChange={(e) => handleCarTypeChange("sedan")}
          />
          Sedan
          <input
            type="checkbox"
            name="lang"
            id="suv"
            checked={carType.suv === true}
            onChange={(e) => handleCarTypeChange("suv")}
          />
          SUV
          <input
            type="checkbox"
            name="lang"
            id="truck"
            checked={carType.truck === true}
            onChange={(e) => handleCarTypeChange("truck")}
          />
          Truck
          <label>Car Make</label>
          <select
            name="select"
            id="select"
            value={carMake}
            onChange={(e) => setCarMake(e.target.value)}
          >
            <option value="" disabled selected={carMake === ""}>
              Select an Option
            </option>

            <option value="1">Jeep</option>
            <option value="2">Audi</option>
            <option value="3">Cadillac</option>
            <option value="4">Volkswagen</option>
            <option value="5">Toyota</option>
            <option value="6">Ford</option>
            <option value="7">Chevrolet</option>
            <option value="8">Nissan</option>
          </select>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Form;