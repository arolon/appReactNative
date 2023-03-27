import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import crepesData from './CrepesData';

const CrepesList = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.9)']}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          {crepesData.map((crepe, index) => (
            <View style={styles.menuItem} key={index}>
              <Text style={styles.title}>{crepe.crepeName}</Text>
              <View style={styles.ingredientsContainer}>
                {Object.entries(crepe.crepeIngredients).map(([ingredient, description], index) => (
                  <View style={styles.ingredientItem} key={index}>
                    <Text style={styles.ingredientName}>{ingredient}</Text>
                    <Text style={styles.ingredientDescription}>{description}</Text>
                  </View>
                ))}
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
    resizeMode: 'cover',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  ingredientsContainer: {
    flexDirection: 'column',
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  ingredientName: {
    fontWeight: 'bold',
    flex: 1,
  },
  ingredientDescription: {
    flex: 2,
  },
});

export default CrepesList;
