import React, { useState } from 'react';

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
    const [isEditing, setisEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempvalue, setTempValue] = useState(title);
    const [completedState, setCompletedState] = useState(completed);

    const handleDivDoubleClick = () => {
        setisEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if (key === 27) {

            setValue(tempvalue);
            setisEditing(false);
        }
        else if (key === 13) {
            editTodoItemProp({ title: value });
            setTempValue(value);
            setisEditing(false);
        }



    }

    const handleInputOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleButtonClick = () => {
        setCompletedState((oldCompletedState) => {
            const newState = !oldCompletedState;
            editTodoItemProp({ completed: newState });
            return newState;
        });


    }
    return (
        <div className="row" >
            {isEditing ?
                <div className="column seven wide">
                    <div className="ui input field">
                        <input

                            onChange={handleInputOnChange}
                            autoFocus={true}
                            onKeyDown={handleInputKeyDown}
                            value={value}
                        />
                    </div>
                </div>
                :
                <>
                    <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                        <h2 className={"ui header" + (completedState ? " green" : " ")} >{value}</h2>
                    </div>

                    <div className="column one wide">
                        <button
                            onClick={handleButtonClick}
                            className={"ui button circular icon" + (completedState ? " blue" : " green")}><i className="white check icon"></i></button>
                    </div>

                    <div className="column one wide">
                        <button
                            onClick={removeTodoItemProp}
                            className="ui button circular icon red"><i className="white remove icon"></i></button>
                    </div>
                </>
            }
        </div >
    );

};

export default Todo;
