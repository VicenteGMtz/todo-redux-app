import { createAction, props } from '@ngrx/store';

export const crearTarea = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completado: boolean }>()
);

// >>>>>>>>>>> filtros    >>>>>>>>>>>

// //todos
// export const allTodos = createAction('[TODO] All Todos');

// //activos
// export const activeTodos = createAction('[TODO] Active Todos');

// //completados
// export const completedTodos = createAction('[TODO] Completed Todos');

// //limpiar completados
export const clearCompleted = createAction('[TODO] Clear Completed Todos');
