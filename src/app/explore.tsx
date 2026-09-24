import { Redirect } from 'expo-router';

// 以前のサンプル画面へのリンクは検索へ引き継ぐ。
export default function ExploreScreen() {
  return <Redirect href="/search" />;
}
