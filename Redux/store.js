import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux'; // Combinar reducers
import sessionReducer from './sessionSlice'; // Tu reducer para sesión

// Configuración de persistencia
const persistConfig = {
  key: 'session', // Clave específica para este estado persistido
  storage: AsyncStorage,
};

// Combinar reducers
const rootReducer = combineReducers({
  session: sessionReducer, // Más slices pueden agregarse aquí
});

// Reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurar la tienda
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Deshabilitar advertencias sobre objetos no serializables
    }),
});

// Crear persistor
const persistor = persistStore(store);

export { store, persistor };
