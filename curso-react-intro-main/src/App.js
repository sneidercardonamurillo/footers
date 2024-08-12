import React from 'react';
import { TodoCounter } from '../src/TodoCounter/TodoCounter';
import { TodoItem } from '../src/TodoItem/TodoItem';
import { TodoList } from '../src/TodoList/TodoList';
import { TodoSearch } from '../src/TodoSearch/TodoSearch';
import { CreateTodoButton} from '../src/CreateTodoButton/CreateTodoButton';


const DefaultTodos = [
  { text: 'Sime La Chupa Le Digo', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Y Si Se La Meto Ala LLorona', completed: false },
  { text: 'Solo la puntica', completed: false }
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList >
       {DefaultTodos.map(todo => (<TodoItem 
       key={todo.text} 
       text={todo.text}
       completed={todo.completed}/>
      ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
