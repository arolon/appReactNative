import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Speech from 'expo-speech';

import SpeechSettings from './SpeechSettings';

import crepesData from "./CrepesData";

const CrepesList = () => {
  const readIngredients = (crepe) => {
    Speech.stop();
    let options = {
      'pitch': 2,
      'rate' : 2,
      'voice': 'Microsoft Zira - English (United States)'
    }
    Speech.speak(
      `${crepe.crepeName}. ${Object.keys(
        crepe.crepeIngredients
      ).join(", ")}`, options
    );
  };

  const [showIngredients, setShowIngredients] = useState({});

  const toggleIngredients = (index) => {
    setShowIngredients({
      [index]: !showIngredients[index],
    });
  };

  let _loadAllVoices = async () => {
    const availableVoices = await Speech.getAvailableVoicesAsync();
    console.log({
      voiceList: availableVoices,
      voice: availableVoices[0].identifier,
    });
  }

  _loadAllVoices();


  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <SpeechSettings/>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.9)"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          {crepesData.map((crepe, index) => (
            <View style={styles.menuItem} key={index}>
              <Text
                style={styles.title}
                onPress={() => {toggleIngredients(index); readIngredients(crepe);}}
              >
                {crepe.crepeName}
              </Text>
              {showIngredients[index] && (
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
              )}
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
    display: "contents"
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
    flexDirection: "column",
  },
  ingredientRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    alignItems: "stretch",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    minHeight: 'unset',
    textAlign: 'right'
  },
  ingredientName: {
    fontWeight: "bold",
    marginRight: 10,
  },
  ingredientDescription: {
    flex: 1,
    marginLeft: 10,
  },
});

export default CrepesList;
