import { LucideIcon } from 'lucide-react';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  ctaText: string;
  bonuses?: {
    title: string;
    description: string;
  }[];
  ribbon?: string;
  savings?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string; // URL
  savings: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  icon: LucideIcon;
}