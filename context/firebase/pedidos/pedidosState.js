import React, { useReducer } from "react";

import PedidoReducer from "./pedidosReducer";
import PedidoContext from "./pedidosContext";

import {
  SELECCIONAR_PRODUCTO,
  CONFIRMAR_ORDENAR_PLATILLO,
  MOSTRAR_RESUMEN,
  ELIMINAR_PRODUCTO,
  PEDIDO_ORDENADO,
} from "../../../types";

const PedidoState = (props) => {
  //Crear state inicial
  const initialState = {
    pedido: [],
    platillo: null,
    total: 0,
    idpedido: "",
  };

  //useReductor con dispach para ejecutar las funciones
  const [state, dispach] = useReducer(PedidoReducer, initialState);

  //Selecciona el producto que el usuario desea ordenar
  const seleccionarPlatillo = (platillo) => {
    dispach({
      type: SELECCIONAR_PRODUCTO,
      payload: platillo,
    });
  };

  //Cuando el usuario confirma un platillo
  const guardarPedido = (pedido) => {
    dispach({
      type: CONFIRMAR_ORDENAR_PLATILLO,
      payload: pedido,
    });
  };

  //Muestra el total a pagar en el resumen

  const mostrarResumen = (total) => {
    dispach({
      type: MOSTRAR_RESUMEN,
      payload: total,
    });
  };

  //Eliminar un articulo del carrito
  const eliminarProducto = (id) => {
    dispach({
      type: ELIMINAR_PRODUCTO,
      payload: id,
    });
  };

  const pedidoRealizado = (id) => {
    dispach({
      type: PEDIDO_ORDENADO,
      payload: id,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        platillo: state.platillo,
        total: state.total,
        idpedido: state.idpedido,
        seleccionarPlatillo,
        guardarPedido,
        mostrarResumen,
        eliminarProducto,
        pedidoRealizado,
      }}
    >
      {props.children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
