import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [
      { id: 1, title: "Example", checked: false },
      { id: 2, title: "Example 2", checked: false },
    ],
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 10,
        title: action.payload.title,
        // checked: false,
      };
      state.list.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.list[index].checked = action.payload.checked;
    },

    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompletedTodo: (state, action) => {
      state.list = state.list.filter((todo) => !todo.checked);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  clearCompletedTodo,
  setFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
