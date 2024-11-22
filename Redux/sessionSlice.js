import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // Información del usuario autenticado
  token: null, // Token de autenticación
};

const sessionSlice = createSlice({
  name: "session",
  initialState, // Usa la constante initialState
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user; // Guardamos el usuario
      state.token = action.payload.token; // Guardamos el token
      console.log("User set in state:", action.payload); // Verifica si se guarda correctamente
    },
    clearSession: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});

export const { setUser, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
