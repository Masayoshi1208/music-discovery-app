import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type SearchFieldProps = {
  value: string;
  onChangeText: (value: string) => void;
  onSubmit: () => void;
};

export function SearchField({ value, onChangeText, onSubmit }: SearchFieldProps) {
  const colors = useTheme();
  return (
    <View style={styles.form}>
      <View style={[styles.field, { backgroundColor: colors.backgroundElement }]}>
        <TextInput
          accessibilityLabel="曲名・アーティスト名で検索"
          placeholder="曲名・アーティスト名"
          placeholderTextColor={colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, { color: colors.text }]}
        />
        {value.length > 0 && (
          <Pressable accessibilityRole="button" accessibilityLabel="検索欄をクリア" onPress={() => onChangeText('')} style={styles.clear}>
            <ThemedText themeColor="textSecondary">×</ThemedText>
          </Pressable>
        )}
      </View>
      <Pressable accessibilityRole="button" accessibilityLabel="検索する" onPress={onSubmit} style={({ pressed }) => [styles.submit, { backgroundColor: colors.text, opacity: pressed ? 0.65 : 1 }]}>
        <ThemedText style={{ color: colors.background }} type="smallBold">検索</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { flexDirection: 'row', gap: Spacing.two, alignItems: 'stretch' },
  field: { flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 14 },
  input: { flex: 1, minWidth: 0, paddingHorizontal: Spacing.three, paddingVertical: Spacing.three, fontSize: 16, minHeight: 52 },
  clear: { minHeight: 44, minWidth: 44, alignItems: 'center', justifyContent: 'center' },
  submit: { minWidth: 56, borderRadius: 14, justifyContent: 'center', alignItems: 'center', paddingHorizontal: Spacing.three },
});
