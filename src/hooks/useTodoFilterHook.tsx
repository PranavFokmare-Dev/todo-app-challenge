import React, { useEffect, useState } from 'react'
import { Todo } from '../Models';

export default function useTodoFilterHook(todos:Todo[]) {
    
    let [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos]);
    
    function displayAll(){
        setFilteredTodos(todos);
    }
    function showActiveOnly(){
        setFilteredTodos(todos.filter(t => !t.isDone));
    }
    function showCompleted(){
        setFilteredTodos(todos.filter(t => t.isDone));
    }
    return {filteredTodos,displayAll,showActiveOnly,showCompleted}
}
