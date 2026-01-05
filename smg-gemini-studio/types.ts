import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  keywords: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}