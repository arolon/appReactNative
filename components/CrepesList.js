import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IngredientTable from "./IngredientTable";
import { speak, stop } from 'expo-speech';

import crepesData from "./CrepesData";

const readIngredients = (crepe) => {
  console.log("Reading");
  // Tts.speak(`${crepe.crepeName}. Ingredients: ${Object.keys(crepe.crepeIngredients).join(', ')}`);
  
  // const ingredients = Object.keys(crepe.crepeIngredients).join(', ');
  // const textToSpeak = ${crepe.crepeName}. Ingredients: ${ingredients};
  stop();
  speak(`${crepe.crepeName}. Ingredients: ${Object.keys(crepe.crepeIngredients).join(', ')}`);
}

const CrepesList = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.9)"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          {crepesData.map((crepe, index) => (
            <View style={styles.menuItem} key={index} onPress={() => readIngredients(crepe)}>
              <Text style={styles.title} onPress={() => readIngredients(crepe)}>{crepe.crepeName}</Text>
              <View style={styles.ingredientsContainer}>
                {Object.entries(crepe.crepeIngredients).map(
                  ([name, description]) => (
                    <View style={styles.ingredientRow} key={name}>
                      <Text style={styles.ingredientName}>{name}</Text>
                      <Text style={styles.ingredientDescription}>
                        {description}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          ))}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  ingredientsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  ingredientRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    flexFlow: 'row-reverse'
  },
  ingredientName: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  ingredientDescription: {
    flex: 1,
    marginLeft: 10,
  },
});

export default CrepesList;
