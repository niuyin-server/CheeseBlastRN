/**
 * Hot List Tab Page
 * 热榜页面
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { VideoCard } from '../../components/VideoCard';
import { VIDEOS } from '../../constants/data';
import { useTheme } from '../../hooks/useTheme';

export const HotListTab = ({ onVideoClick }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  // Sort by likes for hot list
  const hotVideos = [...VIDEOS]
    .sort((a, b) => {
      const aLikes = parseFloat(a.likes.replace('w', '0000').replace('k', '000'));
      const bLikes = parseFloat(b.likes.replace('w', '0000').replace('k', '000'));
      return bLikes - aLikes;
    })
    .map((v, i) => ({ ...v, id: `hot-${v.id}`, rank: i + 1 }));

  const allVideos = [...hotVideos, ...hotVideos.map((v) => ({ ...v, id: `hot-dup-${v.id}` }))];

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

