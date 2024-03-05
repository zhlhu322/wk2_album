import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#252423"
  },
});

export default App;
