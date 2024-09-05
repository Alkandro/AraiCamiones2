import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, View, Image, Text, List, ScrollView, Pressable } from "native-base";
import globalStyles from "../../styles/global";
import { BlurView } from "expo-blur";
import { Button, Center } from "native-base";
import firebaseContextHoshino from "../../context/firebase/FirebaseStateHoshino/firebaseContextHoshino";
import PedidoContext from "../../context/firebase/pedidos/pedidosContext";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

const Hoshino = () => {
  // Context de Firebase
  const { menu, obtenerProductos } = useContext(firebaseContextHoshino);

  // Context del Pedido
  const { seleccionarPlatillo } = useContext(PedidoContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  // Categoría que deseas filtrar
  const categoriaDeseada = 'jueves'; // Cambia esto por la categoría que necesites

  // Filtrar platillos por categoría específica
  const platillosFiltrados = menu.filter(platillo => platillo.categoria === categoriaDeseada);

  // Agrupar platillos por categoría (para esta categoría específica)
  const categorias = {
    [categoriaDeseada]: platillosFiltrados
  };

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
                      <Text numberOfLines={2}>{platillo.descripcion}</Text>
                      <Text>Precio: $ {platillo.precio} </Text>
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
          <Button
            height={16}
            width="full"
            style={globalStyles.boton}
            onPress={() => navigation.navigate("ResumenPedido")}
          >
            <Center>
              <Text style={globalStyles.botonTexto}>Ir al Pedido</Text>
            </Center>
          </Button>
        </View>
      </BlurView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: "#000",
  },
  separadorTexto: {
    marginLeft: 10,
    color: "#FFDA00",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Hoshino;
