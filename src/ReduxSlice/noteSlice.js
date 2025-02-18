import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [
      {
        id: 1,
        title: "Meeting Notes",
        note: "Discuss project roadmap and tasks.",
      },
      {
        id: 2,
        title: "Shopping List",
        note: "Buy milk, eggs, bread, and coffee.",
      },
      {
        id: 3,
        title: "Workout Plan",
        note: "Jogging for 30 mins, push-ups, and squats.",
      },
      {
        id: 4,
        title: "Study Plan",
        note: "Revise Redux Toolkit, React hooks, and practice coding.",
      },
      {
        id: 5,
        title: "Book Recommendations",
        note: "Read 'Atomic Habits' and 'The Pragmatic Programmer'.",
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    dltNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    editNote: (state, action) => {
        const { id, title, note } = action.payload;
        const existingNote = state.notes.find((n) => n.id === id);
        if (existingNote) {
          existingNote.title = title;
          existingNote.note = note;
        }
      }
  },
});
export const { addNote, dltNote ,editNote} = noteSlice.actions;
export default noteSlice.reducer; //this is note reducer
