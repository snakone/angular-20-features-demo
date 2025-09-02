import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      title: 'Signals',
      description: 'Reactive primitives for state management with async resources and automatic change detection',
      route: '/signals',
      icon: '⚡',
      features: ['Writable Signals', 'Computed Signals', 'Effect', 'Resource', 'RxJS Resource', 'Error Handling']
    },
    {
      title: 'Control Flow',
      description: 'New built-in control flow syntax replacing *ngIf and *ngFor',
      route: '/control-flow',
      icon: '🔄',
      features: ['@if', '@for', '@switch', 'Performance improvements']
    },
    {
      title: 'Defer',
      description: 'Lazy loading blocks for better performance and user experience',
      route: '/defer',
      icon: '⏳',
      features: ['@defer', 'Loading states', 'Error boundaries', 'Prefetching']
    },
    {
      title: 'Animations',
      description: 'Enhanced animation system with new APIs and performance improvements',
      route: '/animations',
      icon: '🎭',
      features: ['View Transitions', 'CSS Animations', 'Performance optimizations']
    },
    {
      title: 'Error Handling',
      description: 'Comprehensive error handling with global handlers, boundaries, and graceful recovery',
      route: '/error-handling',
      icon: '🚨',
      features: ['Global error handler', 'Error boundaries', 'Async error handling', 'Resource error states']
    },
    {
      title: 'Performance',
      description: 'Zoneless performance, bundle optimization, and real-time monitoring',
      route: '/performance',
      icon: '🚀',
      features: ['Zoneless mode', 'Bundle optimization', 'SSR performance', 'Web Vitals monitoring']
    }
  ];
}
