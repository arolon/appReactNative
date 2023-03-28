import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import * as Speech from "expo-speech";

const SpeechSettings = () => {
  const [pitchValue, setPitchValue] = useState(2);
  const [rateValue, setRateValue] = useState(2);
  const [voiceValue, setVoiceValue] = useState("");

  const handlePitchValueChange = (value) => {
    setPitchValue(value);
  };

  const handleRateValueChange = (value) => {
    setRateValue(value);
  };

  const handleVoiceValueChange = (value) => {
    setVoiceValue(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pitch value: {pitchValue.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={2}
        step={0.2}
        value={pitchValue}
        onValueChange={handlePitchValueChange}
      />
      <Text style={styles.label}>Rate value: {rateValue.toFixed(1)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5}
        step={0.3}
        value={rateValue}
        onValueChange={handleRateValueChange}
      />
      <Text style={styles.label}>Voice:</Text>
      {/* <Picker
        style={styles.picker}
        selectedValue={voiceValue}
        onValueChange={handleVoiceValueChange}
      >
        {Speech.getAvailableVoicesAsync().then((voices) => {
            console.log(voices);
          return (
            <>
              {voices.map((voice, index) => (
                <Picker.Item
                  key={index}
                  label={voice.name}
                  value={voice.identifier}
                />
              ))}
            </>
          );
        })}
      </Picker> */}
      <Text style={styles.label}>
        Current settings: pitch={pitchValue.toFixed(2)}, rate=
        {rateValue.toFixed(1)}, voice={voiceValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  slider: {
    width: "100%",
    marginBottom: 16,
  },
  picker: {
    width: "100%",
    height: 50,
  },
});

export default SpeechSettings;
