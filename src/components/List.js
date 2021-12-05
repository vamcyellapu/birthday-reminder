const List = (props) => {
  const people = props.people;
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        const removeItem = (id) => {
          let newPeople = people.filter((person) => {
            return person.id !== id;
          });
          props.onSetPeople(newPeople);
        };
        return (
          <div className="item" key={id}>
            <div className="social">
              <img src={image} alt={name} />
              <div>
                <h2>{name}</h2>
                <p>{age} years</p>
              </div>
            </div>
            <button className="btn btn--small" onClick={() => removeItem(id)}>
              clear
            </button>
          </div>
        );
      })}
    </>
  );
};
export default List;
