/**
 * Search Page Screen (Placeholder)
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const SearchPage = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔥</Text>
      <Text style={styles.title}>热门话题榜</Text>
      <Text style={styles.subtitle}>功能开发中...</Text>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundSecondary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 80,
    },
    icon: {
      fontSize: 48,
      marginBottom: theme.spacing.lg,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.colors.textTertiary,
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      opacity: 0.5,
    },
  });

