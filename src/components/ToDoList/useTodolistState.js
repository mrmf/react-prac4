import { useState, useEffect } from 'react';

export default initialValue => {
  const [list, setList] = useState(initialValue);

  useEffect(
    ()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((result) => setList(result));
    },[]);

  return {
    list,
    addTodo: (todoText) => {
      setList([...list, todoText]);
    },
    deleteTodo: todoIndex => {
      let newId = todoIndex+1;
      const newList = list.filter((_, index) => index !== todoIndex)
                            .map((item) => {

                                  if (item.id > newId) {
                                    const updatedItem = {
                                      ...item,
                                      id: newId, 
                                    };
                                    newId += 1;
                                    return updatedItem;
                                  }                            
                                  return item;
                                });

      setList(newList);
    }
    ,
    updateTodo: todoIndex => {
      const newList = list.map((item,index) => {
        
        if (index === todoIndex) { 
          const updatedItem = {
            ...item,
            completed: !item.completed,
          };
   
          return updatedItem;
        }
   
        return item;
      });
   
      setList(newList);
    }
  };
};
