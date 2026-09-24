import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export function MusicScreen({ children, home = false }: PropsWithChildren<{ home?: boolean }>) {
  return (
    <ThemedView style={styles.root}>
      <SafeAreaView style={styles.safeArea} edges={home ? ['top', 'bottom', 'left', 'right'] : ['bottom', 'left', 'right']}>
        <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safeArea: { flex: 1 },
  content: { width: '100%', maxWidth: MaxContentWidth, alignSelf: 'center', padding: Spacing.four, paddingBottom: Spacing.six, gap: Spacing.five },
});
