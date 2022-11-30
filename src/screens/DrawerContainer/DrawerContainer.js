import React from "react";
import { View, Text, Image, Linking  } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    
    <View style={styles.content}>
     <Image 
        source={require("../../../assets/icons/splash.png")}
        style={{ width: 250, height: 295, alignItems: 'flex-start',marginBottom: '50%', marginVertical:'20%'}}/>
      <View style={styles.container}>
      

        <MenuButton
          title="INICIO"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Inicio");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIAS"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categorias");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="PESQUISAR"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Pesquisar");
            navigation.closeDrawer();
          }}
        />
        
      </View>
      <Text 
        style={{fontSize: 20,color:'#C5904C',marginVertical:'20%', alignItems: 'baseline'}}
          onPress={() => Linking.openURL('https://linktr.ee/AryPassos')}>
          Feito por Ary Passos
        </Text>
    </View>
);
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
