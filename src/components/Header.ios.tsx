import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import colors from '../styles/colors';

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme1.header,
  },
  header: {
    paddingBottom: 44,
    backgroundColor: colors.theme1.header,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: colors.theme1.headerText,
    fontFamily: 'Poppins-Regular',
  }
});
