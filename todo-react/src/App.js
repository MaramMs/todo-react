import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/headers/Header';
import TodoList from './components/TodoList';

function App () {
  const [ inputText , setInputText] = useState('');
  const [todos , setTodos] = useState([])
    return (
      <div className='App'>
        <Header />
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList />
      </div>
    );
  }

export default App;
