/**
 * Theme colors for light and dark mode
 */

export const lightColors = {
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  backgroundTertiary: '#F3F4F6',
  
  // Text colors
  text: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  
  // Border colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
  
  // Primary colors
  primary: '#000000',
  primaryLight: '#1F2937',
  
  // Accent colors
  accent: '#EC4899', // Pink
  accentSecondary: '#F97316', // Orange
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Card colors
  card: '#FFFFFF',
  cardShadow: 'rgba(0, 0, 0, 0.1)',
  
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.1)',
};

export const darkColors = {
  // Background colors
  background: '#000000',
  backgroundSecondary: '#111827',
  backgroundTertiary: '#1F2937',
  
  // Text colors
  text: '#F9FAFB',
  textSecondary: '#D1D5DB',
  textTertiary: '#9CA3AF',
  
  // Border colors
  border: '#374151',
  borderLight: '#1F2937',
  
  // Primary colors
  primary: '#FFFFFF',
  primaryLight: '#F3F4F6',
  
  // Accent colors
  accent: '#EC4899', // Pink
  accentSecondary: '#F97316', // Orange
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Card colors
  card: '#111827',
  cardShadow: 'rgba(0, 0, 0, 0.3)',
  
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.7)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
};

export const getColors = (isDark) => (isDark ? darkColors : lightColors);

