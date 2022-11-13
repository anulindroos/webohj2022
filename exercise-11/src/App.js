import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

 /* const todos = [
    {
      id: 1,
      text: "Learn React",
      date: "2022-08-17",
    },
    {
      id: 2,
      text: "Choose project work topic",
      date: "2022-10-15",
    },
  ];
*/
 /* const addTodoHandler = (todo) => {
    console.log(todo);
  };*/

  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://todo-list-54918-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchTodos();
  };

  const fetchTodos = async () => {
    const response = await fetch(
      "https://todo-list-54918-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );
    const data = await response.json();

    const fetchedTodos = [];

    for (const key in data) {
      fetchedTodos.push({
        id: key,
        text: data[key].text,
        date: data[key].date,
      });
    }

    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

 /* let content = todos.map((todo) => (
    <div key={todo.id}>
      <h2>{todo.text}</h2>
      <h3>{todo.date}</h3>
      <br></br>
    </div>
  ));*/

  let content;
  if(todos.length > 0) {
    content = <ToDoList todos = {todos} />;
  } else {
    content = <p>No todos yet!</p>
  }

  return (
    <>
      <section>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <section>
        {content}
      </section>
    </>
  );
};

export default App;
