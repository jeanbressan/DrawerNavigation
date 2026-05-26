import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/Telas/Home";
import Ferrari from "./src/Telas/Ferrari";
import Mercedes from "./src/Telas/Mercedes";
import McLaren from "./src/Telas/McLaren";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Ferrari" component={Ferrari} />
        <Drawer.Screen name="Mercedes" component={Mercedes} />
        <Drawer.Screen name="McLaren" component={McLaren} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;