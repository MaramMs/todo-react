import React from 'react';

export default function Form({inputText,setInputText ,setTodos, todos}) {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const submitTodaoHandler= (e) =>{
       e.preventDefault();
       setTodos([
         ...todos,{text:inputText,completed:false,id:Math.random()*1000}
       ])
       setInputText('')
  }
  return (
    <form>
      <input type='text' className='task'  value={inputText} onChange ={inputTextHandler}/>
      <input type='date' className='task-date'  />
      <input type='time' className='task-time'  />
      <button className='btn-submit' onClick={submitTodaoHandler}>
        Add
      </button>
    </form>
  );
}
