import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addNoteToDB } from "../API/setNote";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
  },
  reducers: {
    addInitial: (state, action) => {
    state.notes = action.payload
    },
    addNote: (state, action) => {
     
      state.notes.push(action.payload)
    },
    dltNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    editNote: (state, action) => {
      const {id, title, note } = action.payload;
      const index = state.notes.findIndex((n) => n.id === id);
      if (index !== -1) {
        state.notes[index] = { id, title, note }; // ✅ Update Redux State Only
      }
    },
  },
});
export const { addNote, dltNote, editNote ,addInitial} = noteSlice.actions;
export default noteSlice.reducer; //this is note reducer
