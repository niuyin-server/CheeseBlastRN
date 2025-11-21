/**
 * Black Tech Tab Page
 * 黑科技页面
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { VideoCard } from '../../components/VideoCard';
import { VIDEOS } from '../../constants/data';
import { useTheme } from '../../hooks/useTheme';

export const BlackTechTab = ({ onVideoClick }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  // Filter videos related to technology/black tech
  const techVideos = VIDEOS.filter((v) =>
    v.tags.some((tag) => ['科技', '黑科技', '技术'].includes(tag))
  );

  const allVideos = techVideos.length > 0
    ? [...techVideos, ...techVideos.map((v) => ({ ...v, id: `tech-${v.id}` }))]
    : VIDEOS.map((v) => ({ ...v, id: `tech-${v.id}` }));

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

