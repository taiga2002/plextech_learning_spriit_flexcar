import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MovieLoader = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    let response = await fetch("https://reactnative.dev/movies.json");
    let json = await response.json();
    setLoading(false);
    console.log(json.movies);
    setData(json.movies);
    return json.movies;
  };
  useEffect(() => {
    getMovies();
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>
          {item.title}, {item.releaseYear}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ marginTop: "50%" }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* {data.map((item) => {
        return (
          <View>
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          </View>
        );
      })} */}
    </SafeAreaView>
  );
};

export default MovieLoader;
