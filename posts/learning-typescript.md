---
title: 'Learning Typescript'
date: '2022-10-16'
image: learning-typescript.png
excerpt: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
isFeatured: true
---

TypeScript code example

```js
import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default NewTodo;
```


Course Here [Udemy](https://usbank.udemy.com/course/understanding-typescript)