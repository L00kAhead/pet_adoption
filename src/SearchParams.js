import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  const onChangeLocationHandler = (e) => {
    // console.log(e.target.value);
    setLocation(e.target.value);
    console.log(location);
  };

  const onChangeAnimalHandler = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };

  const onBlurHandler = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location" className="">
          Location
          <input
            id="location"
            value={location}
            placeholder="Enter Location"
            onChange={onChangeLocationHandler}
          />
        </label>

        <label>
          Animal
          <select
            id="animal"
            value={animal}
            onChange={onChangeAnimalHandler}
            onBlur={onBlurHandler}
          >
            <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
  
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
