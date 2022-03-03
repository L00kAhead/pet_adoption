import Pet from "./Pet";

const Results = (props) => {
  return (
    <div>
      {!props.pets.length ? (
        <h1>Not Pets Found</h1>
      ) : (
        props.pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
