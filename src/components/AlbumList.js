import React from "react";
import { ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <AlbumDetail album = {albumData.albumList[0]} />
      <AlbumDetail album = {albumData.albumList[1]} />
      <AlbumDetail album = {albumData.albumList[2]} />
      <AlbumDetail album = {albumData.albumList[3]} />
      <AlbumDetail album = {albumData.albumList[4]} />
    </ScrollView>
  );
};

export default Albumlist;