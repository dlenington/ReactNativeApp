import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Components
import NavBar from "./components/NavBar";
import EventCard from "./components/EventCard";

//Paper Stuff
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#81d4fa",
    accent: "yellow"
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavBar />
      <EventCard />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
