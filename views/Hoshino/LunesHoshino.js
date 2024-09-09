// import React, { useContext, useEffect } from 'react';
// import { ScrollView, Pressable } from 'react-native';
// import { View, Text, Image } from 'native-base';
// import { useNavigation } from '@react-navigation/native';
// import firebaseContextHoshino from '../../context/firebase/FirebaseStateHoshino/firebaseContextHoshino';
// import PedidoContext from '../../context/firebase/pedidos/pedidosContext';

// const Lunes = () => {
//   const { menu, obtenerProductos } = useContext(firebaseContextHoshino);
//   const { seleccionarPlatillo } = useContext(PedidoContext);
//   const navigation = useNavigation();

//   useEffect(() => {
//     obtenerProductos();
//   }, [obtenerProductos]);

//   // Filtra los platillos para mostrar solo los del lunes
//   const platillosLunes = menu.filter(platillo => platillo.categoria === 'lunes');

//   return (
//     <ScrollView>
//       {platillosLunes.map((platillo) => (
//         <Pressable
//           key={platillo.id}
//           onPress={() => {
//             seleccionarPlatillo(platillo);
//             navigation.navigate('DetallePlatillo');
//           }}
//         >
//           <View>
//             <Image source={{ uri: platillo.imagen }} alt="imagen" size={100} />
//             <Text>{platillo.nombre}</Text>
//             <Text>{platillo.descripcion}</Text>
//             <Text>Precio: $ {platillo.precio}</Text>
//           </View>
//         </Pressable>
//       ))}
//     </ScrollView>
//   );
// };

// export default Lunes;

// import { useNavigation } from "@react-navigation/native";
// import { NativeBaseProvider, View, Image, Text, List, ScrollView, Pressable } from "native-base";
// import globalStyles from "../../styles/global";
// import { BlurView } from "expo-blur";
// import { useContext, useEffect } from "react";
// import { StyleSheet, Alert } from "react-native";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import firebaseContextHoshino from '../../context/firebase/FirebaseStateHoshino/firebaseContextHoshino';
// import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

// const Hoshino = () => {
//   // Context de Firebase
//   const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(firebaseContextHoshino);

//   // Context del Pedido
//   const { seleccionarPlatillo } = useContext(PedidoContext);

//   // Hook para redireccionar
//   const navigation = useNavigation();

//   useEffect(() => {
//     obtenerProductos();
//   }, []);

//   // Categoría que deseas filtrar
//   const categoriaDeseada = 'lunes'; // Cambia esto por la categoría que necesites

//   // Filtrar platillos por categoría específica
//   const platillosFiltrados = menu.filter(platillo => platillo.categoria === categoriaDeseada);

//   // Agrupar platillos por categoría (para esta categoría específica)
//   const categorias = {
//     [categoriaDeseada]: platillosFiltrados
//   };

//   // Elimina un producto de Firebase
//   const eliminarProducto = async (platilloId) => {
//     try {
//       await eliminarProductoFirebase(platilloId); // Llama a la función del contexto que interactúa con Firebase
//       obtenerProductos(); // Actualiza el menú después de eliminar el producto
//     } catch (error) {
//       console.error("Error eliminando producto:", error);
//     }
//   };

//   // Confirmar antes de eliminar un producto
//   const confirmarEliminacion = (platilloId) => {
//     Alert.alert(
//       "Deseas eliminar este artículo?",
//       "Una vez eliminado no se puede recuperar",
//       [
//         {
//           text: "Confirmar",
//           onPress: () => eliminarProducto(platilloId),
//         },
//         { text: "Cancelar", style: "cancel" },
//       ]
//     );
//   };

//   return (
//     <NativeBaseProvider style={globalStyles.contenedor}>
//       <ScrollView style={{ backgroundColor: "#FFF" }}>
//         <View>
//           {Object.keys(categorias).map((categoria) => (
//             <View key={categoria}>
//               <View style={styles.separador}>
//                 <Text style={styles.separadorTexto}>{categoria}</Text>
//               </View>
//               {categorias[categoria].map((platillo) => (
//                 <Pressable
//                   key={platillo.id}
//                   onPress={() => {
//                     const { existencia, ...platillo2 } = platillo;
//                     seleccionarPlatillo(platillo2);
//                     navigation.navigate("DetallePlatillo");
//                   }}
//                 >
//                   <List style={{ flexDirection: "row", alignItems: "center" }}>
//                     <View mx={5}>
//                       <Image
//                         source={{ uri: platillo.imagen }}
//                         alt="desde firebase"
//                         size={100}
//                         borderRadius={16}
//                       />
//                     </View>
//                     <View>
//                       <Text>{platillo.nombre} </Text>
//                       <Text
//                       numberOfLines={3}
//                       style={styles.descripcion}
//                       >{platillo.descripcion}</Text>
//                       <Text>Hora de salida {platillo.precio} </Text>
//                     </View>

//                     {/* Botón para eliminar */}
//                     <View>
//                       <Pressable
//                         onPress={() => confirmarEliminacion(platillo.id)}
//                         full
//                         padding={5}
//                         style={{ marginTop: "center" }}
//                       >
//                         <AntDesign
//                           name="delete"
//                           style={{
//                             color: "red",
//                             fontSize: 30,
//                           }}
//                         />
//                       </Pressable>
//                     </View>
//                   </List>
//                 </Pressable>
//               ))}
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//       <BlurView intensity={90}>
//         <View
//           paddingY={4}
//           alignItems="center"
//           safeAreaBottom
//           shadow={9}
//           marginBottom={5}
//         />
//       </BlurView>
//     </NativeBaseProvider>
//   );
// };

// const styles = StyleSheet.create({
//   separador: {
//     backgroundColor: "#000",
//   },
//   descripcion: {
//     maxWidth: 140, // Ajusta el ancho según tu diseño
//     lineHeight: 15, // Controla el espaciado entre líneas
//   },
//   separadorTexto: {
//     marginLeft: 10,
//     color: "#FFDA00",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//   },
// });

// export default Hoshino;

import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  View,
  Image,
  Text,
  List,
  ScrollView,
  Pressable,
  Checkbox,
} from "native-base";
import globalStyles from "../../styles/global";
import { BlurView } from "expo-blur";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import firebaseContextHoshino from "../../context/firebase/FirebaseStateHoshino/firebaseContextHoshino";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";

const Hoshino = () => {
  const { menu, obtenerProductos, eliminarProductoFirebase } = useContext(
    firebaseContextHoshino
  );
  const { seleccionarPlatillo } = useContext(PedidoContext);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const categoriaDeseada = "lunes";
  const platillosFiltrados = menu.filter(
    (platillo) => platillo.categoria === categoriaDeseada
  );
  const categorias = { [categoriaDeseada]: platillosFiltrados };

  const [selectedPlatillos, setSelectedPlatillos] = useState({});

  const handleCheckboxChange = (platilloId, isChecked) => {
    setSelectedPlatillos((prevState) => ({
      ...prevState,
      [platilloId]: isChecked,
    }));
  };

  // Función para eliminar un platillo seleccionado
  const eliminarProducto = async (platilloId) => {
    try {
      await eliminarProductoFirebase(platilloId);
      obtenerProductos();
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  // Función para confirmar y eliminar los platillos seleccionados
  const eliminarSeleccionados = () => {
      // Verificar si hay algún platillo seleccionado
      const platillosIds = Object.keys(selectedPlatillos);
      if (platillosIds.length === 0) {
        Alert.alert("No hay nada seleccionado", "Por favor, selecciona al menos uno.");
        return;
      }
    Alert.alert(
      "Si confirmas la entrega se eliminara",
      "Una vez eliminados no se pueden recuperar",
      [
        {
          text: "Confirmar",
          onPress: async () => {
            try {
              const idsAEliminar = Object.keys(selectedPlatillos).filter(
                (id) => selectedPlatillos[id]
              );
              await Promise.all(idsAEliminar.map((id) => eliminarProducto(id)));
              setSelectedPlatillos({});
            } catch (error) {
              console.error("Error eliminando productos:", error);
            }
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  };

  const CustomCheckbox = ({ isChecked, onChange, ariaLabel }) => (
    <Checkbox
      boxSize={7}
      borderColor="black"
      shadow={9}
      marginLeft={6}
      isChecked={isChecked}
      onChange={onChange}
      accessibilityLabel={ariaLabel}
      _checked={{
        bg: "green.500", // Color de fondo cuando está checkeado
        borderColor: "blue.500", // Color del borde cuando está checkeado
        _icon: {
          color: "white", // Color del ícono cuando está checkeado
        },
      }}
      _unchecked={{
        bg: "transparent", // Color de fondo cuando no está checkeado
        borderColor: "black", // Color del borde cuando no está checkeado
      }}
    >
      <Text color="white">✓</Text> {/* Color del texto dentro del Checkbox */}
    </Checkbox>
  );

  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View>
          {Object.keys(categorias).map((categoria) => (
            <View key={categoria}>
              <View style={styles.separador}>
                <Text style={styles.separadorTexto}>{categoria}</Text>
              </View>
              {categorias[categoria].map((platillo) => (
                <Pressable
                  key={platillo.id}
                  onPress={() => {
                    const { existencia, ...platillo2 } = platillo;
                    seleccionarPlatillo(platillo2);
                    navigation.navigate("DetallePlatillo");
                  }}
                >
                  <List style={{ flexDirection: "row", alignItems: "center" }}>
                    <View mx={5}>
                      <Image
                        source={{ uri: platillo.imagen }}
                        alt="desde firebase"
                        size={100}
                        borderRadius={16}
                      />
                    </View>
                    <View>
                      <Text>{platillo.nombre} </Text>
                      <Text numberOfLines={3} style={styles.descripcion}>
                        {platillo.descripcion}
                      </Text>
                      <Text>Hora de salida {platillo.precio} </Text>
                    </View>

                    {/* Checkbox para eliminar */}
                    <View>
                      <CustomCheckbox
                        isChecked={!!selectedPlatillos[platillo.id]}
                        onChange={(isChecked) =>
                          handleCheckboxChange(platillo.id, isChecked)
                        }
                        ariaLabel={`Eliminar ${platillo.nombre}`}
                      />
                    </View>
                  </List>
                </Pressable>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <BlurView intensity={90}>
        <View
          paddingY={4}
          alignItems="center"
          safeAreaBottom
          shadow={9}
          marginBottom={5}
        >
          <Pressable onPress={eliminarSeleccionados}>
            <Text style={styles.eliminarTexto}>Eliminar seleccionados</Text>
          </Pressable>
        </View>
      </BlurView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: "#000",
  },
  descripcion: {
    maxWidth: 140,
    lineHeight: 15,
  },
  separadorTexto: {
    marginLeft: 10,
    color: "#FFDA00",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  eliminarTexto: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default Hoshino;
