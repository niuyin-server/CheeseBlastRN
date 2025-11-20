/**
 * Home Page Screen
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';
import { VideoCard } from '../components/VideoCard';
import { CategoryBar } from '../components/CategoryBar';
import { SearchBar } from '../components/SearchBar';
import { VIDEOS, CATEGORIES } from '../constants/data';

export const HomePage = ({ onVideoClick }) => {
  const [activeCategory, setActiveCategory] = useState('推荐');
  const { theme } = useTheme();
  const styles = getStyles(theme);

  // Duplicate videos for scrolling effect
  const allVideos = [...VIDEOS, ...VIDEOS.map((v) => ({ ...v, id: `dup-${v.id}` }))];

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

        {/* Categories */}
        <CategoryBar
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </View>

      {/* Content Waterfall */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.videoGrid}>
          {allVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPress={onVideoClick}
            />
          ))}
        </View>
      </ScrollView>
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
    scrollView: {
      flex: 1,
      marginTop: 100, // Space for top bar 
    },
    scrollContent: {
      paddingTop: theme.spacing.md,
      paddingHorizontal: theme.spacing.xs,
    },
    videoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between', 
    },
  });

