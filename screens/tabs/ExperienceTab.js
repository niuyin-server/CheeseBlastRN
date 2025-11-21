/**
 * Experience Tab Page
 * 经验页面
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { VideoCard } from '../../components/VideoCard';
import { VIDEOS } from '../../constants/data';
import { useTheme } from '../../hooks/useTheme';

export const ExperienceTab = ({ onVideoClick }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  // Filter videos related to experience/life tips
  const experienceVideos = VIDEOS.filter((v) =>
    v.tags.some((tag) => ['生活技巧', '职场', '避坑', '经验'].includes(tag))
  );

  const allVideos = experienceVideos.length > 0
    ? [...experienceVideos, ...experienceVideos.map((v) => ({ ...v, id: `exp-${v.id}` }))]
    : VIDEOS.map((v) => ({ ...v, id: `exp-${v.id}` }));

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

