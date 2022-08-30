import React from 'react';
import Todo from "./todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderList = list.map(
        (item) =>
            <Todo title={item.title}
                completed={item.completed}
                key={item.title}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                removeTodoItemProp={() => removeTodoListProp(item._id)}>
            </Todo>)
    return (
        <div className="ui grid center aligned">
            {renderList}
        </div>
    );

};

export default List;
