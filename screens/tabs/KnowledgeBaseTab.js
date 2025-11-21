/**
 * Knowledge Base Tab Page
 * 知识库页面
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { VideoCard } from '../../components/VideoCard';
import { VIDEOS } from '../../constants/data';
import { useTheme } from '../../hooks/useTheme';

export const KnowledgeBaseTab = ({ onVideoClick }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  // Filter videos related to knowledge/education
  const knowledgeVideos = VIDEOS.filter((v) =>
    v.tags.some((tag) => ['科普', '历史', '冷知识', '知识'].includes(tag))
  );

  const allVideos = knowledgeVideos.length > 0
    ? [...knowledgeVideos, ...knowledgeVideos.map((v) => ({ ...v, id: `kb-${v.id}` }))]
    : VIDEOS.map((v) => ({ ...v, id: `kb-${v.id}` }));

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

