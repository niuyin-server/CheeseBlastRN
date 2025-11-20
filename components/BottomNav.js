/**
 * Bottom Navigation Component
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { id: 'home', icon: 'home', label: '首页' },
  { id: 'search', icon: 'search', label: '发现' },
  { id: 'add', icon: 'plus', label: '发布', isSpecial: true },
  { id: 'msg', icon: 'comment-o', label: '消息' },
  { id: 'profile', icon: 'user-o', label: '我的' },
];

export const BottomNav = ({ activeTab, setActiveTab }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => item.id !== 'add' && setActiveTab(item.id)}
          style={[
            styles.navItem,
            activeTab === item.id && styles.navItemActive,
          ]}
          activeOpacity={0.7}
        >
          {item.isSpecial ? (
            <View style={styles.specialButton}>
              <Icon name={item.icon} size={20} color="#FFFFFF" />
            </View>
          ) : (
            <>
              <Icon
                name={item.icon}
                size={24}
                color={activeTab === item.id ? theme.colors.text : theme.colors.textTertiary}
              />
              <Text
                style={[
                  styles.label,
                  activeTab === item.id && styles.labelActive,
                ]}
              >
                {item.label}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 64,
      backgroundColor: theme.colors.card,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: theme.spacing.xs,
      paddingBottom: theme.spacing.sm,
      zIndex: 40,
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    navItemActive: {
      transform: [{ scale: 1.05 }],
    },
    label: {
      fontSize: 10,
      fontWeight: '500',
      color: theme.colors.textTertiary,
    },
    labelActive: {
      color: theme.colors.text,
      fontWeight: '600',
    },
    specialButton: {
      width: 48,
      height: 36,
      backgroundColor: theme.colors.accent,
      borderRadius: theme.borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: theme.colors.accent,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
  });

