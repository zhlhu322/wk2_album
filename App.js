import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from "./src/components/Header.js";
import AlbumList from "./src/components/AlbumList.js";
import albumData from "./src/json/albums.json";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header title={albumData.albumTitle}/>
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
