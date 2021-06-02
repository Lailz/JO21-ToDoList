// Components
import Age from "./Age";

const Greeting = (props) => {
  const hobbyItems = props.person.hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div>
      <h1>Hello everyone, I'm {props.person.name}</h1>
      <h2> How you doin?</h2>
      <p>Hobbies: </p>
      <ul>{hobbyItems}</ul>
      <Age age={props.person.age} />
    </div>
  );
};

export default Greeting;
