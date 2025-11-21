/**
 * Tab Navigation Component
 * 首页Tab分类栏组件，支持切换不同页面
 */

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { RecommendedTab } from '../screens/tabs/RecommendedTab';
import { HotListTab } from '../screens/tabs/HotListTab';
import { ExperienceTab } from '../screens/tabs/ExperienceTab';
import { KnowledgeBaseTab } from '../screens/tabs/KnowledgeBaseTab';
import { BlackTechTab } from '../screens/tabs/BlackTechTab';

const TABS = [
  { key: 'recommended', label: '推荐' },
  { key: 'hotlist', label: '热榜' },
  { key: 'experience', label: '经验' },
  { key: 'knowledge', label: '知识库' },
  { key: 'blacktech', label: '黑科技' },
];

export const TabNavigation = ({ onVideoClick }) => {
  const [activeTab, setActiveTab] = useState('recommended');
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'recommended':
        return <RecommendedTab onVideoClick={onVideoClick} />;
      case 'hotlist':
        return <HotListTab onVideoClick={onVideoClick} />;
      case 'experience':
        return <ExperienceTab onVideoClick={onVideoClick} />;
      case 'knowledge':
        return <KnowledgeBaseTab onVideoClick={onVideoClick} />;
      case 'blacktech':
        return <BlackTechTab onVideoClick={onVideoClick} />;
      default:
        return <RecommendedTab onVideoClick={onVideoClick} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabBarContent}
        >
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              style={styles.tabItem}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.key && styles.tabTextActive,
                ]}
              >
                {tab.label}
              </Text>
              {activeTab === tab.key && (
                <View style={styles.indicator} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Tab Content */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      backgroundColor: theme.colors.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    tabBarContent: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
    },
    tabItem: {
      marginRight: theme.spacing.xl,
      alignItems: 'center',
    },
    tabText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.textTertiary,
    },
    tabTextActive: {
      color: theme.colors.text,
      transform: [{ scale: 1.05 }],
    },
    indicator: {
      marginTop: theme.spacing.xs,
      width: 16,
      height: 4,
      backgroundColor: theme.colors.accent,
      borderRadius: theme.borderRadius.full,
    },
    content: {
      flex: 1,
    },
  });

