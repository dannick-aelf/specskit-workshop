// Slide-based presentation types

export interface Slide {
  id: string;
  title: string;
  content: React.ReactNode;
  notes?: string;
}

export interface PresentationState {
  currentSlide: number;
  totalSlides: number;
  slides: Slide[];
}






