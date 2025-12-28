
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
  onClick?: () => void;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewSnippet {
  text: string;
  author: string;
  rating: number;
}
