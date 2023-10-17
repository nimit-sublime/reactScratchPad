import React, { useState } from 'react';

function TodoForm({props}) {
	const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
	if(item) {
		props?.addTodoItem(item);
		setItem('')
	}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="itemInput" value={item} onChange={(e)=>setItem(e.target.value)} placeholder='Task Todo'/>
      <button className="addItemButton">Add Item</button>
    </form>
  );
}

export default TodoForm;