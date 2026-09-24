export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  artwork: number;
  genre: string;
  credits: { role: string; name: string }[];
  producers: string[];
  featuredArtists: string[];
  label: string;
  samples: { title: string; artist: string; note: string }[];
  background: string;
  relatedTrackIds: string[];
};
