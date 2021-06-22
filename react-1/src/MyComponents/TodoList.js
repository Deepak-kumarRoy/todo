import React,{useState} from "react";
import View from "../MyComponents/View";

export const TodoList = (props) => {
   const [todo, setTodo] = useState("");
   const [newtodo, setNewTodo] = useState([]);
   
   const submit =(event) => {
     event.preventDefault();
   }

   const listofItems = ()=>{
     setNewTodo((prevValue)=>{
       return[...prevValue, todo];
     });
     setTodo(" ");
   };
   
  return (
    <div className="container  my-3">
      <form onSubmit={submit}>
        <h1>Add a Todo </h1>
        <div className="mb-3">
          <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} className="form-control" id="todo" />
           
         </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={listofItems}>Add Todo</button>
  </div>
    <br />
    <ol> 
      {newtodo.map((val, index)=> {
        return <View key={index} text={val}/>;
      })}
      </ol>
      <br />
 </form>
    
    </div>
  );

}

export default TodoList;