import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftColumn: {
    flex: 2,
    paddingRight: 10,
  },
  rightColumn: {
    flex: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    color: '#777',
  },
});

const IngredientTable = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Ingredients</Text>
      </View>
      {ingredients.map((ingredient) => (
        <View key={ingredient.label} style={styles.table}>
          <View style={styles.leftColumn}>
            <Text style={styles.label}>{ingredient.label}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.value}>{ingredient.value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default IngredientTable;
