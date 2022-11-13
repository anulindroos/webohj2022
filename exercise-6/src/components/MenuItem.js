//import { useState } from "react";

const MenuItem = (props) => {
  //                               default value
  //     muuttuja, jonka tilaa seurataan
  //const [name, setName] = useState(props.name);

  //           funktio, jolla muutetaan tilaa
  const clickHandler = () => {
    console.log("Moi");
    props.removeHandler(props.id);
    //setName("Deleted");
  };

  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default MenuItem;