import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export function DetailSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <View style={styles.section}>
      <ThemedText accessibilityRole="header" style={styles.title}>{title}</ThemedText>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: Spacing.three },
  title: { fontSize: 21, lineHeight: 30, fontWeight: '600' },
});
