/**
 * Category Bar Component
 */

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const CategoryBar = ({ categories, activeCategory, onCategoryChange }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => onCategoryChange(category)}
          style={styles.categoryItem}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.categoryText,
              activeCategory === category && styles.categoryTextActive,
            ]}
          >
            {category}
          </Text>
          {activeCategory === category && (
            <View style={styles.indicator} />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
    },
    categoryItem: {
      marginRight: theme.spacing.xl,
      alignItems: 'center',
    },
    categoryText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.textTertiary,
    },
    categoryTextActive: {
      color: theme.colors.text,
      transform: [{ scale: 1.05 }],
    },
    indicator: {
      marginTop: theme.spacing.xs,
      width: 16,
      height: 4,
      backgroundColor: theme.colors.accent,
      borderRadius: theme.borderRadius.full,
    },
  });

