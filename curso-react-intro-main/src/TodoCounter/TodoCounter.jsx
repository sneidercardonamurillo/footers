import '../TodoCounter/Counter.css';

function TodoCounter({total, completed}) {
    return <h2>
      Has Completado <span> {completed} </span>
       d e <span>{total}</span> Todos
      </h2>
  } 

  export {TodoCounter}