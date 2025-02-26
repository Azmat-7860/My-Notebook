// src/api/noteAPI.js
import axios from "axios";

export const addNoteToDB = async (note) => {
  try {
    const response = await axios.post("http://localhost:8080/note", note);
    return response.data; // ✅ Returns saved note
  } catch (error) {
    console.error("Error adding note:", error);
  }
};
