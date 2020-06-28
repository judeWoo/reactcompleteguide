import React, { useState } from "react";

const Person = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Bro-0", age: "23-0" },
      { name: "Bro2-0", age: "24-0" },
      { name: "Bro3-0", age: "25-0" },
    ],
    otherProps: "otherProps",
  });

  // console.log(personsState);
  // console.log(props);

  const buttonHandler = () => {
    setPersonsState({
      persons: [
        { name: "Bro-2", age: "23-2" },
        { name: "Bro2-2", age: "24-2" },
        { name: "Bro3-2", age: "25-2" },
      ],
    });
  };

  return (
    <div className="Person">
      <p>
        My name is {personsState.persons[0].name} and My age is{" "}
        {personsState.persons[0].age}
      </p>
      <p>
        My real name is {props.name} and My age is {props.age}
      </p>
      <input onChange={props.change} value={props.name} />
      <button onClick={buttonHandler}>Click to change Text</button>
    </div>
  );
};

export default Person;
