/**
 * Main App Component
 * Educational Short Video App with Entertainment
 * 
 * @format
 */

import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, useColorScheme, SafeAreaView } from 'react-native';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './screens/HomePage';
import { SearchPage } from './screens/SearchPage';
import { MessagePage } from './screens/MessagePage';
import { ProfilePage } from './screens/ProfilePage';
import { PlayerPage } from './screens/PlayerPage';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentVideo, setCurrentVideo] = useState(null);
  const colorScheme = useColorScheme();
  const { theme } = useTheme();

  const styles = getStyles(theme);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onVideoClick={setCurrentVideo} />;
      case 'search':
        return <SearchPage />;
      case 'msg':
        return <MessagePage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onVideoClick={setCurrentVideo} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.card}
      />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {currentVideo && (
        <PlayerPage
          video={currentVideo}
          onClose={() => setCurrentVideo(null)}
        />
      )}
    </SafeAreaView>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      maxWidth: 480, // Limit width for tablet/desktop
      alignSelf: 'center',
      width: '100%',
    },
    content: {
      flex: 1,
    },
  });

export default App;
