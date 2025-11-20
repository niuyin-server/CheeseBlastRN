/**
 * Video Card Component
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';

export const VideoCard = ({ video, onPress }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme, video.color);

  return (
    <TouchableOpacity
      onPress={() => onPress(video)}
      style={styles.container}
      activeOpacity={0.9}
    >
      {/* Thumbnail Area */}
      <View style={styles.thumbnail}>
        <View style={styles.thumbnailContent}>
          <Icon name="play" size={48} color="rgba(255, 255, 255, 0.3)" />
        </View>

        {/* Duration Badge */}
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{video.duration}</Text>
        </View>

        {/* Top Left Tag */}
        <View style={styles.tag}>
          <Text style={styles.tagText}>{video.tags[0]}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {video.title}
        </Text>
        <View style={styles.footer}>
          <View style={styles.authorInfo}>
            <Image
              source={{ uri: video.author.avatar }}
              style={styles.avatar}
            />
            <Text style={styles.authorName} numberOfLines={1}>
              {video.author.name}
            </Text>
          </View>
          <View style={styles.likesInfo}>
            <Icon name="heart" size={12} color={theme.colors.textTertiary} style={styles.likesIcon} />
            <Text style={styles.likesText}>{video.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (theme, videoColor) =>
  StyleSheet.create({
    container: {
      width: '48%',
      flexGrow: 1,
      marginHorizontal: theme.spacing.xs,
      backgroundColor: theme.colors.card,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.sm,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...theme.shadows.sm,
    },
    thumbnail: {
      width: '100%',
      aspectRatio: 3 / 4,
      backgroundColor: videoColor || theme.colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    thumbnailContent: {
      opacity: 1,
    },
    durationBadge: {
      position: 'absolute',
      bottom: theme.spacing.xs,
      right: theme.spacing.xs,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: theme.spacing.xs,
      paddingVertical: 2,
      borderRadius: theme.borderRadius.sm,
    },
    durationText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: 'bold',
    },
    tag: {
      position: 'absolute',
      top: theme.spacing.xs,
      left: theme.spacing.xs,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: 2,
      borderRadius: theme.borderRadius.full,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    tagText: {
      color: '#FFFFFF',
      fontSize: 10,
    },
    content: {
      padding: theme.spacing.md,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
      minHeight: 40,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    authorInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginRight: theme.spacing.sm,
    },
    avatar: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: theme.colors.backgroundTertiary,
      marginRight: theme.spacing.xs,
    },
    authorName: {
      fontSize: 12,
      color: theme.colors.textSecondary,
      maxWidth: 60,
    },
    likesInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    likesIcon: {
      marginRight: 4,
    },
    likesText: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      fontWeight: '500',
    },
  });

