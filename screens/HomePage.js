/**
 * Home Page Screen
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';
import { TabNavigation } from '../components/TabNavigation';
import { SearchBar } from '../components/SearchBar';

export const HomePage = ({ onVideoClick }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarContent}>
          <View style={styles.searchBar}>
            <SearchBar />
          </View>
          <TouchableOpacity style={styles.notificationButton} activeOpacity={0.7}>
            <Icon name="bolt" size={24} color={theme.colors.accentSecondary} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation with Content */}
      <View style={styles.tabContainer}>
        <TabNavigation onVideoClick={onVideoClick} />
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundSecondary,
      paddingBottom: 60, // Space for bottom nav
    },
    topBar: {
      backgroundColor: theme.colors.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingTop: theme.spacing.xl,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    topBarContent: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
      paddingBottom: theme.spacing.sm,
    },
    searchBar: {
      flex: 1,
      marginRight: theme.spacing.lg,
    },
    notificationButton: {
      position: 'relative',
      padding: theme.spacing.xs,
    },
    notificationBadge: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 8,
      height: 8,
      backgroundColor: theme.colors.error,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: theme.colors.card,
    },
    tabContainer: {
      flex: 1,
      marginTop: 60, // Space for top bar
    },
  });

