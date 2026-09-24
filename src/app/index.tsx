import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedView style={styles.header}>
            <ThemedText type="small" themeColor="textSecondary">
              Music Discovery
            </ThemedText>
            <ThemedText type="title" accessibilityRole="header" style={styles.title}>
              ホーム
            </ThemedText>
            <ThemedText themeColor="textSecondary">
              新しい音楽と出会う、あなただけの場所。
            </ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.welcomeCard}>
            <ThemedText style={styles.musicNote} accessible={false}>♪</ThemedText>
            <ThemedText accessibilityRole="header" style={styles.sectionTitle}>
              今日も、音楽と一緒に。
            </ThemedText>
            <ThemedText themeColor="textSecondary">
              心に響く一曲を見つけて、お気に入りを少しずつ集めよう。
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.favorites}>
            <ThemedText accessibilityRole="header" style={styles.sectionTitle}>
              お気に入り
            </ThemedText>
            <ThemedView type="backgroundElement" style={styles.emptyState}>
              <ThemedText>まだお気に入りの曲はありません</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                ここに、あなたの好きな音楽が並びます。
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  content: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.five,
  },
  header: {
    gap: Spacing.two,
  },
  title: {
    fontSize: 34,
    lineHeight: 44,
  },
  welcomeCard: {
    padding: Spacing.four,
    borderRadius: Spacing.four,
    gap: Spacing.three,
  },
  musicNote: {
    fontSize: 48,
    lineHeight: 56,
    color: '#C04B69',
  },
  sectionTitle: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '600',
  },
  favorites: {
    gap: Spacing.three,
  },
  emptyState: {
    padding: Spacing.four,
    borderRadius: Spacing.three,
    gap: Spacing.two,
  },
});
