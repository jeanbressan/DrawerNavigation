import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ferrari from './src/Telas/Ferrari';
import Mclaren from './src/Telas/Mclaren';
import Mercedes from './src/Telas/Mercedes';

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Ferrari"
        component={Ferrari}
        options={{ title: 'Ferrari' }}
      />
      <Tab.Screen
        name="Mercedes"
        component={Mercedes}
        options={{ title: 'Mercedes' }}
      />
      <Tab.Screen
        name="Mclaren"
        component={Mclaren}
        options={{ title: 'Mclaren' }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="EquipesTabs"
        screenOptions={{ headerShown: true }}
      >
        <Drawer.Screen
          name="EquipesTabs"
          component={TabsNavigator}
          options={{ title: 'Equipes' }}
        />
        <Drawer.Screen
          name="FerrariDrawer"
          component={Ferrari}
          options={{ title: 'Ferrari' }}
        />
        <Drawer.Screen
          name="MercedesDrawer"
          component={Mercedes}
          options={{ title: 'Mercedes' }}
        />
        <Drawer.Screen
          name="MclarenDrawer"
          component={Mclaren}
          options={{ title: 'McLaren' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}