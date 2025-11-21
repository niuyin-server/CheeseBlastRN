/**
 * Recommended Tab Page
 * 推荐页面
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { VideoCard } from '../../components/VideoCard';
import { VIDEOS } from '../../constants/data';
import { useTheme } from '../../hooks/useTheme';

export const RecommendedTab = ({ onVideoClick }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  // Duplicate videos for scrolling effect
  const allVideos = [...VIDEOS, ...VIDEOS.map((v) => ({ ...v, id: `rec-${v.id}` }))];

  return (
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
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingTop: theme.spacing.sm,
      paddingHorizontal: theme.spacing.xs,
    },
    videoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

