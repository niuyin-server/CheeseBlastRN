/**
 * Profile Page Screen
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';
import { USERS, VIDEOS } from '../constants/data';

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('works');
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerGradient} />
        <View style={styles.headerActions}>
          <TouchableOpacity style={[styles.headerButton, styles.headerButtonFirst]} activeOpacity={0.7}>
            <Icon name="share" size={18} color={theme.colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
            <Icon name="ellipsis-h" size={18} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileContent}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image source={{ uri: USERS.me.avatar }} style={styles.avatar} />
          <TouchableOpacity style={styles.avatarBadge} activeOpacity={0.7}>
            <Icon name="plus" size={12} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{USERS.me.name}</Text>
          <View style={styles.userMeta}>
            <Text style={[styles.userMetaText, styles.userMetaTextMargin]}>ID: {USERS.me.id}8293</Text>
            <Text style={styles.userMetaSeparator}>|</Text>
            <View style={[styles.userMetaBadge, styles.userMetaBadgeMargin]}>
              <Text style={styles.userMetaBadgeText}>IP: 上海</Text>
            </View>
          </View>
          <Text style={styles.userBio}>{USERS.me.bio}</Text>
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USERS.me.likes}</Text>
            <Text style={styles.statLabel}>获赞与收藏</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USERS.me.following}</Text>
            <Text style={styles.statLabel}>关注</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{USERS.me.followers}</Text>
            <Text style={styles.statLabel}>粉丝</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.editButton, styles.editButtonMargin]} activeOpacity={0.7}>
            <Text style={styles.editButtonText}>编辑资料</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton} activeOpacity={0.7}>
            <Icon name="video-camera" size={16} color={theme.colors.text} style={styles.createButtonIcon} />
            <Text style={styles.createButtonText}>创作中心</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setActiveTab('works')}
          style={styles.tab}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'works' && styles.tabTextActive,
            ]}
          >
            作品 0
          </Text>
          {activeTab === 'works' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('likes')}
          style={styles.tab}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'likes' && styles.tabTextActive,
            ]}
          >
            收藏 128
          </Text>
          {activeTab === 'likes' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('private')}
          style={styles.tab}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'private' && styles.tabTextActive,
            ]}
          >
            私密 2
          </Text>
          {activeTab === 'private' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      </View>

      {/* Content Grid */}
      <View style={styles.grid}>
        {activeTab === 'works' ? (
          <View style={styles.emptyState}>
            <View style={[styles.emptyIconContainer, styles.emptyIconContainerMargin]}>
              <Icon name="video-camera" size={40} color={theme.colors.textTertiary} />
            </View>
            <Text style={[styles.emptyTitle, styles.emptyTitleMargin]}>开启你的创作之旅</Text>
            <Text style={[styles.emptySubtitle, styles.emptySubtitleMargin]}>分享知识，连接世界</Text>
            <TouchableOpacity style={styles.emptyButton} activeOpacity={0.7}>
              <Text style={styles.emptyButtonText}>发布第一条视频</Text>
            </TouchableOpacity>
          </View>
        ) : (
          VIDEOS.map((video, i) => (
            <View
              key={i}
              style={[styles.gridItem, { backgroundColor: video.color }]}
            >
              <View style={styles.gridItemOverlay}>
                <Icon name="play" size={10} color="#FFFFFF" style={styles.gridItemPlayIcon} />
                <Text style={styles.gridItemLikes}>{video.likes}</Text>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.card,
      paddingBottom: 80, // Space for bottom nav
    },
    content: {
      paddingBottom: theme.spacing.xl,
    },
    header: {
      height: 160,
      backgroundColor: theme.colors.backgroundTertiary,
      position: 'relative',
    },
    headerGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.accent,
      opacity: 0.1,
    },
    headerActions: {
      position: 'absolute',
      top: theme.spacing.lg,
      right: theme.spacing.lg,
      flexDirection: 'row',
    },
    headerButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      padding: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      marginLeft: theme.spacing.md,
    },
    headerButtonFirst: {
      marginLeft: 0,
    },
    profileContent: {
      paddingHorizontal: theme.spacing.xl,
      position: 'relative',
    },
    avatarContainer: {
      marginTop: -48,
      marginBottom: theme.spacing.md,
      position: 'relative',
      alignSelf: 'flex-start',
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: 48,
      borderWidth: 4,
      borderColor: theme.colors.card,
      backgroundColor: theme.colors.backgroundTertiary,
    },
    avatarBadge: {
      position: 'absolute',
      bottom: 4,
      right: 4,
      backgroundColor: theme.colors.info,
      padding: theme.spacing.xs,
      borderRadius: theme.borderRadius.full,
      borderWidth: 2,
      borderColor: theme.colors.card,
    },
    userInfo: {
      marginBottom: theme.spacing.xl,
    },
    userName: {
      fontSize: 24,
      fontWeight: '900',
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    userMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    userMetaText: {
      fontSize: 12,
      color: theme.colors.textSecondary,
    },
    userMetaTextMargin: {
      marginRight: theme.spacing.sm,
    },
    userMetaSeparator: {
      fontSize: 12,
      color: theme.colors.border,
      marginHorizontal: theme.spacing.sm,
    },
    userMetaBadgeMargin: {
      marginLeft: theme.spacing.sm,
    },
    userMetaBadge: {
      backgroundColor: theme.colors.backgroundTertiary,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: 2,
      borderRadius: theme.borderRadius.sm,
    },
    userMetaBadgeText: {
      fontSize: 10,
      color: theme.colors.textSecondary,
    },
    userBio: {
      fontSize: 14,
      color: theme.colors.text,
      lineHeight: 20,
      maxWidth: 280,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.backgroundSecondary,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.xl,
      marginBottom: theme.spacing.xl,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
    },
    statValue: {
      fontSize: 18,
      fontWeight: '900',
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    statLabel: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      fontWeight: '500',
    },
    statDivider: {
      width: 1,
      height: 32,
      backgroundColor: theme.colors.border,
    },
    actions: {
      flexDirection: 'row',
      marginBottom: theme.spacing.xl,
    },
    editButton: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    editButtonMargin: {
      marginRight: theme.spacing.md,
    },
    editButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.card,
    },
    createButton: {
      flex: 1,
      backgroundColor: theme.colors.backgroundTertiary,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    createButtonIcon: {
      marginRight: theme.spacing.xs,
    },
    createButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    tabs: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      backgroundColor: theme.colors.card,
      paddingHorizontal: theme.spacing.sm,
    },
    tab: {
      flex: 1,
      paddingVertical: theme.spacing.md,
      alignItems: 'center',
      position: 'relative',
    },
    tabText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.textTertiary,
    },
    tabTextActive: {
      color: theme.colors.text,
    },
    tabIndicator: {
      position: 'absolute',
      bottom: 0,
      width: 16,
      height: 4,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.full,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      minHeight: 200,
    },
    gridItem: {
      width: '33.33%',
      aspectRatio: 3 / 4,
      position: 'relative',
    },
    gridItemOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: theme.spacing.sm,
      paddingTop: theme.spacing.lg,
    },
    gridItemPlayIcon: {
      marginBottom: theme.spacing.xs,
    },
    gridItemLikes: {
      fontSize: 10,
      color: '#FFFFFF',
      fontWeight: '500',
    },
    emptyState: {
      width: '100%',
      paddingVertical: theme.spacing.xxxl * 2,
      alignItems: 'center',
    },
    emptyIconContainer: {
      backgroundColor: theme.colors.backgroundSecondary,
      padding: theme.spacing.xl,
      borderRadius: theme.borderRadius.full,
      marginBottom: theme.spacing.lg,
    },
    emptyTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    emptyTitleMargin: {
      marginBottom: theme.spacing.xs,
    },
    emptySubtitle: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      marginTop: theme.spacing.xs,
    },
    emptySubtitleMargin: {
      marginBottom: theme.spacing.lg,
    },
    emptyButton: {
      backgroundColor: theme.colors.accent,
      paddingHorizontal: theme.spacing.xxl,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      marginTop: theme.spacing.md,
    },
    emptyButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });

