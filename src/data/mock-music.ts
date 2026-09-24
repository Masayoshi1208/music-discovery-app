import type { Track } from '@/types/music';

// 曲・人物・クレジット・制作背景はすべて架空のデモデータ。
export const mockTracks: Track[] = [
  {
    id: 'afterglow', title: 'Afterglow', artist: 'Mio Lane', album: 'Soft Hours', year: 2024,
    artwork: require('@/assets/images/covers/afterglow.svg'), genre: 'Alternative R&B',
    credits: [{ role: '作詞', name: 'Mio Lane' }, { role: '作曲', name: 'Mio Lane / Ren Koda' }, { role: 'ミックス', name: 'Haru Wells' }],
    producers: ['Ren Koda'], featuredArtists: ['Sol Reed'], label: 'Quiet Arc Records',
    samples: [{ title: 'Window Light', artist: 'The Paper Trio', note: 'イントロのエレクトリックピアノを再構成した、という架空の設定。' }],
    background: '夜が明ける直前の静けさをテーマにした一曲。近い距離で録った声に、柔らかな鍵盤とゆっくり揺れるビートを重ねた。客演のSol Reedが後半の風景を変えていく。',
    relatedTrackIds: ['blue-hour', 'window-light'],
  },
  {
    id: 'blue-hour', title: 'Blue Hour', artist: 'Sol Reed', album: 'Between Cities', year: 2023,
    artwork: require('@/assets/images/covers/blue-hour.svg'), genre: 'Neo Soul',
    credits: [{ role: '作詞・作曲', name: 'Sol Reed' }, { role: 'ベース', name: 'Iori West' }],
    producers: ['Ren Koda', 'Sol Reed'], featuredArtists: [], label: 'Quiet Arc Records', samples: [],
    background: '街から街へ移動する時間を音にした架空の作品。ベースとドラムの会話を中心に、余白の多いアレンジで夕暮れの空気を描く。',
    relatedTrackIds: ['afterglow', 'slow-orbit'],
  },
  {
    id: 'window-light', title: 'Window Light', artist: 'The Paper Trio', album: 'Room Studies', year: 1982,
    artwork: require('@/assets/images/covers/window-light.svg'), genre: 'Jazz',
    credits: [{ role: '作曲・鍵盤', name: 'Nao Fields' }, { role: 'ドラム', name: 'Eli Moss' }],
    producers: ['Nao Fields'], featuredArtists: [], label: 'Paper Archive', samples: [],
    background: '小さな部屋でのセッションを収めたという設定のジャズ作品。窓から入る光のような鍵盤のフレーズは、架空の楽曲Afterglowへと受け継がれる。',
    relatedTrackIds: ['afterglow', 'still-water'],
  },
  {
    id: 'slow-orbit', title: 'Slow Orbit', artist: 'Aoi Assembly', album: 'Small Satellites', year: 2025,
    artwork: require('@/assets/images/covers/slow-orbit.svg'), genre: 'Electronic',
    credits: [{ role: '作曲', name: 'Aoi Assembly' }, { role: 'シンセサイザー', name: 'Ren Koda' }],
    producers: ['Aoi Assembly'], featuredArtists: ['Mio Lane'], label: 'Near Field', samples: [],
    background: '短いシンセの反復に、Mio Laneの声を楽器のように重ねた架空の作品。少しずつ変化する音色で、ゆっくりと軌道を描く感覚を表現している。',
    relatedTrackIds: ['blue-hour', 'afterglow'],
  },
  {
    id: 'still-water', title: 'Still Water', artist: 'Haru Wells', album: 'Open Rooms', year: 2022,
    artwork: require('@/assets/images/covers/still-water.svg'), genre: 'Ambient Jazz',
    credits: [{ role: '作曲・録音', name: 'Haru Wells' }, { role: 'ピアノ', name: 'Nao Fields' }],
    producers: ['Haru Wells'], featuredArtists: ['Nao Fields'], label: 'Paper Archive', samples: [],
    background: '鍵盤の響きが消えるまでの時間を大切にした、架空のアンビエント作品。日常の小さな環境音を背景に、静かな即興演奏が続く。',
    relatedTrackIds: ['window-light', 'first-train'],
  },
  {
    id: 'first-train', title: '始発 / First Train', artist: 'Iori West', album: 'Morning Notes', year: 2024,
    artwork: require('@/assets/images/covers/first-train.svg'), genre: 'Instrumental Hip-Hop',
    credits: [{ role: '作曲・ベース', name: 'Iori West' }, { role: 'ミックス', name: 'Haru Wells' }],
    producers: ['Iori West'], featuredArtists: [], label: 'Near Field',
    samples: [{ title: 'Window Light', artist: 'The Paper Trio', note: '短い鍵盤のフレーズを切り出して使用した、という架空の設定。' }],
    background: 'まだ人の少ない朝の街をイメージした架空のビート作品。温かなベースと細かく切った鍵盤のフレーズが、一定のリズムで進んでいく。',
    relatedTrackIds: ['window-light', 'still-water'],
  },
];

export const recentTracks = mockTracks.slice(0, 3);

export function getTrack(id: string | undefined): Track | undefined {
  return mockTracks.find((track) => track.id === id);
}

export function searchTracks(query: string): Track[] {
  const terms = query.normalize('NFKC').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return mockTracks.filter((track) => {
    const text = `${track.title} ${track.artist} ${track.album}`.normalize('NFKC').toLocaleLowerCase();
    return terms.every((term) => text.includes(term));
  });
}
