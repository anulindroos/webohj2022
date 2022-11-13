import { useState } from "react";
import AddItem from "./components/AddItem";
import MenuList from "./components/MenuList";

const menu = [
  {
    id: 1,
    name: "hamburger",
    price: 9,
  },
  {
    id: 2,
    name: "pizza",
    price: 12,
  },
  {
    id: 3,
    name: "meatballs",
    price: 10,
  },
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

 /* const removeHandler = (id) => {
    console.log("Delete in App.js: " + id);
  };*/

  const removeHandler = (id) => {
    console.log("Clicked " + id);
    setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <h1>Vox's grill</h1>
      <MenuList menuItems={menuItems} removeHandler={removeHandler}/>
      <AddItem setMenuItems={setMenuItems}/>
    </div>
  );
};

export default App;
