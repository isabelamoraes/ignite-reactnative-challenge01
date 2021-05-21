import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface HeaderProps {
  theme: {
    header:{},
    headerText:{}
  }
}

export function Header({ theme }: HeaderProps){
  return (
    <View style={theme.header}>
      <Text style={theme.headerText}>to.</Text>
      <Text style={[theme.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}
