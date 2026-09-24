import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { DetailSection } from '@/components/music/detail-section';
import { MusicScreen } from '@/components/music/music-screen';
import { TrackRow } from '@/components/music/track-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { getTrack } from '@/data/mock-music';

export default function TrackDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const track = getTrack(typeof id === 'string' ? id : undefined);

  if (!track) {
    return (
      <MusicScreen>
        <ThemedText accessibilityRole="header" type="subtitle">曲が見つかりません</ThemedText>
        <ThemedText themeColor="textSecondary">この曲はサンプルに含まれていません。検索から選び直してください。</ThemedText>
        <Link href="/search" style={styles.recovery}>曲を検索する →</Link>
      </MusicScreen>
    );
  }

  return (
    <MusicScreen>
      <View style={styles.hero}>
        <Image source={track.artwork} style={styles.artwork} contentFit="cover" accessibilityLabel={`${track.album}のジャケット`} />
        <ThemedText type="small" themeColor="textSecondary">{track.genre}</ThemedText>
        <ThemedText accessibilityRole="header" style={styles.title}>{track.title}</ThemedText>
        <ThemedText style={styles.artist}>{track.artist}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">{track.album} · {track.year}</ThemedText>
      </View>
      <ThemedView type="backgroundElement" style={styles.notice}>
        <ThemedText type="small" themeColor="textSecondary">DEMO · 以下はすべて架空の制作情報です。</ThemedText>
      </ThemedView>
      <DetailSection title="Credits">
        {track.credits.map((credit) => (
          <View key={`${credit.role}-${credit.name}`} style={styles.credit}>
            <ThemedText type="small" themeColor="textSecondary">{credit.role}</ThemedText>
            <ThemedText>{credit.name}</ThemedText>
          </View>
        ))}
      </DetailSection>
      <DetailSection title="Producers">
        <ThemedText>{track.producers.join(' / ') || 'このデモには情報がありません'}</ThemedText>
      </DetailSection>
      <DetailSection title="Featured Artists">
        <ThemedText>{track.featuredArtists.join(' / ') || 'このデモには客演情報がありません'}</ThemedText>
      </DetailSection>
      <DetailSection title="Label"><ThemedText>{track.label}</ThemedText></DetailSection>
      <DetailSection title="Samples">
        {track.samples.length === 0 && <ThemedText themeColor="textSecondary">このデモにはサンプル情報がありません。</ThemedText>}
        {track.samples.map((sample) => (
          <ThemedView key={`${sample.title}-${sample.artist}`} type="backgroundElement" style={styles.sample}>
            <ThemedText>{sample.title}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">{sample.artist}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">{sample.note}</ThemedText>
          </ThemedView>
        ))}
      </DetailSection>
      <DetailSection title="Background"><ThemedText style={styles.background}>{track.background}</ThemedText></DetailSection>
      <DetailSection title="Related Tracks">
        <View>{track.relatedTrackIds.map((relatedId) => {
          const related = getTrack(relatedId);
          return related ? <TrackRow key={related.id} track={related} /> : null;
        })}</View>
      </DetailSection>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', gap: Spacing.two },
  artwork: { width: '100%', maxWidth: 300, aspectRatio: 1, borderRadius: 16, marginBottom: Spacing.three },
  title: { fontSize: 32, lineHeight: 42, fontWeight: '600', textAlign: 'center' },
  artist: { fontSize: 19, lineHeight: 28, textAlign: 'center' },
  notice: { padding: Spacing.three, borderRadius: 12 },
  credit: { gap: Spacing.one },
  sample: { padding: Spacing.three, borderRadius: 12, gap: Spacing.two },
  background: { lineHeight: 28 },
  recovery: { fontSize: 17, color: '#386B70', paddingVertical: Spacing.three },
});
