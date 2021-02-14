import React , { useState, useEffect } from "react";
import useTodolistState from "./useTodolistState";


const ToDoList = () => { 
  
  const { list, addTodo, deleteTodo, updateTodo } = useTodolistState([]);
  const { value, onChange, reset } = useInputState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("https://formspree.io/f/xaylkznd",{
    //     method: "POST",
    //     body: JSON.stringify(e.target.value),
    //     headers:{
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //     },
    // }       
    // ).then((res)=>res.json())
    // .then((result) => {
    //     if(result.ok){
          value.id = list.length + 1;
          addTodo(value);
          reset(e);
                   
    //    }

   // })
  };
      
return( 
<div>
    <form className="form-group" onSubmit={handleSubmit} method="POST">
    <div className="row offset-1">
        <input className="form-control col-md-4" placeholder="Add task" type="text" name="todoText" onChange={onChange} value={value.title}/>
        <button>ADD...</button>
    </div>
    </form>
      {
       list.map((item,index) => {
        return(

            <div id={item.id} className="row offset-1 border">
                <div><input type="checkbox" /></div>
                <div className="col-md-1">{item.userId}</div>
                <div className="col-md-1">{item.id}</div>
                <div className="col-md-3" id={"txtval"+item.id} >{item.title}</div>
                <div className="col-md-2">{(item.completed)?"Done":"Not Completed"}</div>
                {/* <div className="col-md-2"><textarea defaultValue={item.title}></textarea></div> */}
                <div className="col offset-1">
                <button className="btn btn-primary" id={"del"+item.id} onClick={() =>  deleteTodo(index)}>DEL</button>
                <button className="btn btn-warning" id={"edit"+item.id} onClick={() => updateTodo(index)}>Update</button>
                </div>
                
                <br />
            </div>
            )
        }

       ) 
      }
 </div>
       )

}

export default ToDoList;


const useInputState = () => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: event => {
      setValue({id: event.list , title:event.target.value,userId:5, completed:false});

    },
    reset: event => {
        setValue({id: ''  ,title:'',userId:'', completed:''}); 
        
      }

  };
};