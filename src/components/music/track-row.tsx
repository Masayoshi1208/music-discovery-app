import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Track } from '@/types/music';

export function TrackRow({ track }: { track: Track }) {
  const colors = useTheme();
  return (
    <Link href={{ pathname: '/tracks/[id]', params: { id: track.id } }} asChild>
      <Pressable accessibilityLabel={`${track.title}、${track.artist}の詳細`} style={({ pressed }) => [styles.row, { borderBottomColor: colors.backgroundSelected, opacity: pressed ? 0.55 : 1 }]}>
        <Image source={track.artwork} style={styles.artwork} contentFit="cover" accessibilityLabel={`${track.album}のジャケット`} />
        <View style={styles.text}>
          <ThemedText style={styles.title}>{track.title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">{track.artist}</ThemedText>
        </View>
        <ThemedText themeColor="textSecondary" accessible={false}>›</ThemedText>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three, paddingVertical: Spacing.three, borderBottomWidth: StyleSheet.hairlineWidth },
  artwork: { width: 64, height: 64, borderRadius: 8 },
  text: { flex: 1, gap: Spacing.one },
  title: { fontWeight: '600' },
});
