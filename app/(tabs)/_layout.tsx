import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) => <Ionicons name='home' size={size} color={color} focused={focused} />
        }} 
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color, focused }) => <Ionicons name='settings' size={size} color={color} focused={focused} />
        }} 
      />
    </Tabs>
  );
}
