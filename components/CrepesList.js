import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import crepesData from './CrepesData';

const CrepesMenu = () => {
  return (
    <View style={styles.container}>
      {crepesData.map((crepe, index) => (
        <View style={styles.menuItem} key={index}>
          <Text style={styles.crepeName}>{crepe.crepeName}</Text>
          {Object.keys(crepe.crepeIngredients).map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              - {ingredient}: {crepe.crepeIngredients[ingredient]}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuItem: {
    marginBottom: 20,
  },
  crepeName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default CrepesMenu;