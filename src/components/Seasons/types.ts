export interface Protagonist {
  name: string;
  image: string;
}

export interface Season {
  number: number;
  title: string;
  tradition: string;
  value: string;
  description: string;
  protagonists: Protagonist[];
  color: string;
  status: 'In Production' | 'In Development' | 'Coming Soon';
  spiritualValueDescription: string;
  culturalLensDescription: string;
} 