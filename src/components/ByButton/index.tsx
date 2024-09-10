import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';

export function ByButton() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Feather name='shopping-cart' size={20} color='white' style={styles.btnIcon} />
            <Text style={styles.btnText}> By This </Text>
        </TouchableOpacity>
    </View>
  );
}