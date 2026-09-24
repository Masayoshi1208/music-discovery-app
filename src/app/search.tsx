import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';

import { MusicScreen } from '@/components/music/music-screen';
import { SearchField } from '@/components/music/search-field';
import { TrackRow } from '@/components/music/track-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { searchTracks } from '@/data/mock-music';

export default function SearchScreen() {
  const { q } = useLocalSearchParams<{ q?: string | string[] }>();
  const initialQuery = typeof q === 'string' ? q : '';
  return <SearchContent key={initialQuery} initialQuery={initialQuery} />;
}

function SearchContent({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = searchTracks(query);
  return (
    <MusicScreen>
      <View style={styles.heading}>
        <ThemedText accessibilityRole="header" type="subtitle">曲を探す</ThemedText>
        <ThemedText themeColor="textSecondary">気になる一曲から、つながりをたどる。</ThemedText>
      </View>
      <SearchField value={query} onChangeText={setQuery} onSubmit={() => Keyboard.dismiss()} />
      <View>
        <ThemedText type="small" themeColor="textSecondary" accessibilityLiveRegion="polite">
          {query.trim() ? `検索結果 · ${results.length}曲` : `すべての曲 · ${results.length}曲`} / モックデータ
        </ThemedText>
        {results.map((track) => <TrackRow key={track.id} track={track} />)}
        {results.length === 0 && (
          <ThemedView type="backgroundElement" style={styles.empty}>
            <ThemedText>曲が見つかりませんでした</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">別の曲名・アーティスト名を試してください。検索欄を空にすると全曲を表示します。</ThemedText>
          </ThemedView>
        )}
      </View>
    </MusicScreen>
  );
}

const styles = StyleSheet.create({
  heading: { gap: Spacing.two },
  empty: { marginTop: Spacing.four, padding: Spacing.four, borderRadius: 16, gap: Spacing.two },
});
