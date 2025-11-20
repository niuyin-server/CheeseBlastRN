/**
 * Video Player Page
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../hooks/useTheme';

export const PlayerPage = ({ video, onClose }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const { theme } = useTheme();
  const styles = getStyles(theme, video?.color);

  if (!video) return null;

  return (
    <Modal
      visible={!!video}
      animationType="fade"
      transparent={false}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Top Navigation */}
        <View style={styles.topNav}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.topNavButton}
            activeOpacity={0.7}
          >
            <Icon name="chevron-left" size={32} color="rgba(255, 255, 255, 0.9)" />
          </TouchableOpacity>
          <View style={styles.topNavRight}>
            <TouchableOpacity style={[styles.topNavButton, styles.topNavRightButton]} activeOpacity={0.7}>
              <Icon name="search" size={24} color="rgba(255, 255, 255, 0.9)" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.topNavButton, styles.topNavRightButton]} activeOpacity={0.7}>
              <Icon name="ellipsis-h" size={24} color="rgba(255, 255, 255, 0.9)" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Video Area */}
        <View style={[styles.videoArea, { backgroundColor: video.color }]}>
          <Icon name="play" size={80} color="rgba(255, 255, 255, 0.3)" />

          {/* Right Actions Bar */}
          <View style={styles.rightActions}>
            {/* Avatar & Follow */}
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: video.author.avatar }}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.followButton} activeOpacity={0.7}>
                <Icon name="plus" size={12} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => setLiked(!liked)}
                style={styles.actionButton}
                activeOpacity={0.7}
              >
                <Icon
                  name="heart"
                  size={32}
                  color={liked ? theme.colors.error : '#FFFFFF'}
                  style={styles.actionIcon}
                />
                <Text style={styles.actionLabel}>
                  {liked ? '已赞' : video.likes}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                <Icon name="comment-o" size={30} color="#FFFFFF" style={styles.actionIcon} />
                <Text style={styles.actionLabel}>{video.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setBookmarked(!bookmarked)}
                style={styles.actionButton}
                activeOpacity={0.7}
              >
                <Icon
                  name="bookmark"
                  size={30}
                  color={bookmarked ? theme.colors.accentSecondary : '#FFFFFF'}
                  style={styles.actionIcon}
                />
                <Text style={styles.actionLabel}>
                  {bookmarked ? '已收藏' : '收藏'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionButton, { marginBottom: 0 }]} activeOpacity={0.7}>
                <Icon name="share" size={30} color="#FFFFFF" style={styles.actionIcon} />
                <Text style={styles.actionLabel}>分享</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Info Area */}
          <View style={styles.bottomInfo}>
            <View style={styles.authorRow}>
              <Text style={styles.authorName}>@{video.author.name}</Text>
              {video.author.verified && (
                <Icon name="check-circle" size={14} color={theme.colors.accentSecondary} style={styles.verifiedIconMargin} />
              )}
            </View>

            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.desc} numberOfLines={2}>
              {video.desc}
            </Text>

            {/* Tags */}
            <View style={styles.tags}>
              {video.tags.map((tag) => (
                <View key={tag} style={[styles.tag, styles.tagItem]}>
                  <Text style={styles.tagText}># {tag}</Text>
                </View>
              ))}
            </View>

            {/* Feature: Quick Note */}
            <View style={styles.quickNoteRow}>
              <TouchableOpacity
                onPress={() => setShowNotes(!showNotes)}
                style={styles.quickNoteButton}
                activeOpacity={0.7}
              >
                <Icon name="lightbulb-o" size={16} color={theme.colors.accentSecondary} style={styles.quickNoteIconMargin} />
                <Text style={styles.quickNoteText}>Get 知识点</Text>
              </TouchableOpacity>
              <View style={styles.trendingBadge}>
                <Icon name="fire" size={14} color={theme.colors.error} style={styles.trendingIconMargin} />
                <Text style={styles.trendingText}>热度飙升</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>

        {/* Notes Drawer */}
        {showNotes && (
          <View style={styles.notesDrawer}>
            <View style={styles.notesHeader}>
              <View style={styles.notesHeaderLeft}>
                <Icon name="star" size={20} color={theme.colors.accentSecondary} style={styles.notesHeaderIconMargin} />
                <Text style={styles.notesHeaderTitle}>知识闪念</Text>
              </View>
              <TouchableOpacity
                onPress={() => setShowNotes(false)}
                style={styles.notesCloseButton}
                activeOpacity={0.7}
              >
                <Text style={styles.notesCloseIcon}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.notesContent}>
              <View style={styles.notesBox}>
                <Text style={styles.notesLabel}>My Notes</Text>
                <Text style={styles.notesText}>
                  ✨ 角动量守恒：猫咪在空中通过旋转上半身和下半身来调整姿态，无需外力扭矩。
                </Text>
                <Text style={styles.notesTime}>记录于 00:42</Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.saveButton}
              activeOpacity={0.7}
            >
              <Icon name="check-circle" size={16} color="#FFFFFF" style={styles.saveButtonIcon} />
              <Text style={styles.saveButtonText}>保存到我的知识库</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

const getStyles = (theme, videoColor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    topNav: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      paddingTop: theme.spacing.xxxl,
      paddingHorizontal: theme.spacing.lg,
      paddingBottom: theme.spacing.lg,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    topNavButton: {
      padding: theme.spacing.xs,
    },
    topNavRight: {
      flexDirection: 'row',
    },
    topNavRightButton: {
      marginLeft: theme.spacing.lg,
    },
    videoArea: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    rightActions: {
      position: 'absolute',
      right: theme.spacing.sm,
      bottom: 100,
      alignItems: 'center',
      zIndex: 20,
    },
    avatarContainer: {
      marginBottom: theme.spacing.sm,
      position: 'relative',
    },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      borderWidth: 2,
      borderColor: '#FFFFFF',
    },
    followButton: {
      position: 'absolute',
      bottom: -8,
      left: '50%',
      marginLeft: -12,
      width: 24,
      height: 24,
      backgroundColor: theme.colors.error,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#FFFFFF',
    },
    actions: {
      // Actions spacing handled by marginBottom on actionButton
    },
    actionButton: {
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    actionIcon: {
      marginBottom: theme.spacing.xs,
    },
    actionLabel: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    bottomInfo: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: theme.spacing.lg,
      paddingBottom: theme.spacing.xl,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 10,
    },
    authorRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    authorName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    verifiedIconMargin: {
      marginLeft: theme.spacing.xs,
    },
    title: {
      fontSize: 15,
      color: '#FFFFFF',
      marginBottom: theme.spacing.sm,
      maxWidth: '85%',
    },
    desc: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: theme.spacing.md,
      maxWidth: '80%',
    },
    tags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: theme.spacing.lg,
    },
    tag: {
      marginRight: theme.spacing.sm,
      marginBottom: theme.spacing.xs,
    },
    tag: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.md,
    },
    tagItem: {
      marginRight: theme.spacing.sm,
      marginBottom: theme.spacing.xs,
    },
    tagText: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.9)',
      fontWeight: '500',
    },
    quickNoteRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quickNoteButton: {
      marginRight: theme.spacing.md,
    },
    quickNoteButton: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: theme.borderRadius.full,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacing.md,
    },
    quickNoteIconMargin: {
      marginRight: theme.spacing.sm,
    },
    quickNoteText: {
      fontSize: 12,
      fontWeight: '500',
      color: '#FFFFFF',
    },
    trendingBadge: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    trendingIconMargin: {
      marginRight: theme.spacing.xs,
    },
    trendingText: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.5)',
    },
    progressBar: {
      height: 2,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    progressFill: {
      height: '100%',
      width: '66%',
      backgroundColor: '#FFFFFF',
    },
    notesDrawer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '66%',
      backgroundColor: theme.colors.card,
      borderTopLeftRadius: theme.borderRadius.xxxl,
      borderTopRightRadius: theme.borderRadius.xxxl,
      padding: theme.spacing.xl,
      zIndex: 30,
    },
    notesHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
    },
    notesHeaderLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    notesHeaderIconMargin: {
      marginRight: theme.spacing.sm,
    },
    notesHeaderTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    notesCloseButton: {
      backgroundColor: theme.colors.backgroundTertiary,
      padding: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
    },
    notesCloseIcon: {
      fontSize: 18,
      color: theme.colors.text,
    },
    notesContent: {
      flex: 1,
      marginBottom: theme.spacing.lg,
    },
    notesBox: {
      backgroundColor: '#FFF7ED',
      borderRadius: theme.borderRadius.xl,
      padding: theme.spacing.lg,
      borderWidth: 1,
      borderColor: '#FED7AA',
    },
    notesLabel: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#9A3412',
      marginBottom: theme.spacing.sm,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    notesText: {
      fontSize: 14,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    notesTime: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      marginTop: theme.spacing.md,
      paddingTop: theme.spacing.sm,
      borderTopWidth: 1,
      borderTopColor: '#FED7AA',
    },
    saveButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    saveButtonIcon: {
      marginRight: theme.spacing.sm,
    },
    saveButtonText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });

