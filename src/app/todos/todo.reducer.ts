import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Llorar'),
  new Todo('Reir'),
  new Todo('jugar'),
  new Todo('Leer'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crearTarea, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    console.log('inicio state', state);

    return state.map((todo) => {
      if (todo.id === id) {
        console.log('inicio state >>', todo.id);
        console.log('id >>>>>>>>><', id);
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.borrar, (state, { id }) => {
    return state.filter((todo) => {
      return todo.id !== id;
    });
  }),

  on(actions.toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  }),
  //FILTROS

  // on(actions.allTodos, (state) => {
  //   return state;
  // }),

  on(actions.clearCompleted, (state) => {
    return state.filter((todo) => !todo.completado);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
