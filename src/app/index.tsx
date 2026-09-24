import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { DetailSection } from '@/components/music/detail-section';
import { MusicScreen } from '@/components/music/music-screen';
import { SearchField } from '@/components/music/search-field';
import { TrackRow } from '@/components/music/track-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { recentTracks } from '@/data/mock-music';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  return (
    <MusicScreen home>
      <View style={styles.intro}>
        <ThemedText type="small" themeColor="textSecondary" style={styles.eyebrow}>LISTEN CLOSER</ThemedText>
        <ThemedText accessibilityRole="header" style={styles.brand}>Music Discovery</ThemedText>
        <ThemedText themeColor="textSecondary">一曲の、その先へ。</ThemedText>
      </View>
      <SearchField value={query} onChangeText={setQuery} onSubmit={() => router.push({ pathname: '/search', params: { q: query.trim() } })} />
      <ThemedView type="backgroundElement" style={styles.note}>
        <ThemedText style={styles.noteTitle}>誰が、この音をつくった？</ThemedText>
        <ThemedText themeColor="textSecondary">クレジットやサンプルから、まだ知らない音楽のつながりを見つけよう。</ThemedText>
      </ThemedView>
      <DetailSection title="最近見た曲">
        <ThemedText type="small" themeColor="textSecondary">サンプルの履歴</ThemedText>
        <View>{recentTracks.map((track) => <TrackRow key={track.id} track={track} />)}</View>
      </DetailSection>
      <ThemedText type="small" themeColor="textSecondary">DEMO · 曲・人物・制作情報はすべて架空です。</ThemedText>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  intro: { gap: Spacing.two, paddingTop: Spacing.four },
  eyebrow: { letterSpacing: 2, fontSize: 11 },
  brand: { fontSize: 32, lineHeight: 40, fontWeight: '600', letterSpacing: -1 },
  note: { padding: Spacing.four, borderRadius: 18, gap: Spacing.two },
  noteTitle: { fontSize: 20, lineHeight: 30, fontWeight: '600' },
});
