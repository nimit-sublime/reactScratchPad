import React from 'react';

function TodoItem({props}) {
	function markAsComplete() {
		props?.markAsComplete(props?.index)
	}
	function deleteTodoItem() {
		props?.deleteTodoItem(props?.index)
	}
  return (
    <div className="singleTodoItem">
      <div style={{ textDecoration: props?.item?.status === 'complete' ? "line-through green" : ""}}>
		{props?.item?.data}
		{ props?.item?.status !== 'complete' &&
			<button className="markCompleteTodoItem" onClick={markAsComplete}>Complete</button>
		}
        <button className="removeTodoItem" onClick={deleteTodoItem}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;