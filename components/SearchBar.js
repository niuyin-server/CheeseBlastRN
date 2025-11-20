/**
 * Search Bar Component
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';

export const SearchBar = ({ onPress }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Icon name="search" size={16} color={theme.colors.textTertiary} style={styles.searchIcon} />
      <Text style={styles.placeholder}>搜点有趣的...</Text>
    </TouchableOpacity>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: 36,
      backgroundColor: theme.colors.backgroundTertiary,
      borderRadius: theme.borderRadius.full,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
    },
    searchIcon: {
      marginRight: theme.spacing.sm,
    },
    placeholder: {
      fontSize: 14,
      color: theme.colors.textTertiary,
    },
  });

