import React, { useState, useEffect } from 'react';
import todos from './apis';
import './App.css';
import Form from './components/form';
import Section from './components/section';
import List from './components/list';

const Apptitle = "To-Do List";
const list = [
  { title: " test 1", completed: false, id: 1 },
  { title: "test 2", completed: false, id: 2 },
  { title: "test 3", completed: false, id: 3 }
];
const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await todos.get("/todos");
      setTodoList(response.data);
    }
    fetchData();
  }, []);


  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    const response = await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id != id));

  }


  const editTodo = async (id, item) => {
     await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="ui container center aligned">

      <Section>
        <h1> {Apptitle} </h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList} />
      </Section>

    </div>
  );
}

export default App;
