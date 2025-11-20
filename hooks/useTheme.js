/**
 * Theme hook for accessing theme based on color scheme
 */

import { useColorScheme } from 'react-native';
import { getTheme } from '../theme/theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = getTheme(isDark);

  return {
    theme,
    isDark,
    colors: theme.colors,
  };
};

