import { Component, signal, computed, effect, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-demo.component.html',
  styleUrl: './performance-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceDemoComponent {
  // Performance metrics
  renderCount = signal(0);
  lastRenderTime = signal<number>(0);
  averageRenderTime = signal<number>(0);
  
  // Zoneless performance demo
  zonelessEnabled = signal(true);
  changeDetectionCycles = signal(0);
  
  // Signal performance demo
  signalCount = signal(0);
  computedValue = computed(() => this.signalCount() * 2);
  
  // Memory usage simulation
  memoryUsage = signal<number>(0);
  memoryLeaks = signal<number>(0);
  
  // Bundle size metrics
  bundleSize = signal<number>(214.38); // KB
  treeShakingEnabled = signal(true);
  
  // SSR performance
  ssrEnabled = signal(true);
  hydrationTime = signal<number>(0);
  
  // Performance monitoring
  performanceMetrics = signal<{
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  }>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });
  
  constructor() {
    // Monitor render performance
    effect(() => {
      const startTime = performance.now();
      this.renderCount.update(count => count + 1);
      const endTime = performance.now();
      this.lastRenderTime.set(endTime - startTime);
      
      // Calculate average render time
      const currentAvg = this.averageRenderTime();
      const newAvg = (currentAvg + (endTime - startTime)) / 2;
      this.averageRenderTime.set(newAvg);
    });
    
    // Simulate memory usage
    this.simulateMemoryUsage();
    
    // Simulate performance metrics
    this.simulatePerformanceMetrics();
  }
  
  // Performance test methods
  triggerSignalUpdate() {
    this.signalCount.update(count => count + 1);
    this.changeDetectionCycles.update(cycles => cycles + 1);
  }
  
  triggerMultipleUpdates() {
    for (let i = 0; i < 100; i++) {
      this.signalCount.update(count => count + 1);
    }
    this.changeDetectionCycles.update(cycles => cycles + 1);
  }
  
  simulateMemoryUsage() {
    setInterval(() => {
      // Simulate memory usage (in MB)
      const usage = Math.random() * 100 + 50;
      this.memoryUsage.set(usage);
      
      // Simulate memory leaks
      if (Math.random() > 0.8) {
        this.memoryLeaks.update(leaks => leaks + 1);
      }
    }, 2000);
  }
  
  simulatePerformanceMetrics() {
    setInterval(() => {
      this.performanceMetrics.set({
        fcp: Math.random() * 1000 + 500, // First Contentful Paint
        lcp: Math.random() * 2000 + 1000, // Largest Contentful Paint
        fid: Math.random() * 100 + 10, // First Input Delay
        cls: Math.random() * 0.1 // Cumulative Layout Shift
      });
    }, 3000);
  }
  
  simulateHydration() {
    this.hydrationTime.set(0);
    const startTime = performance.now();
    
    setTimeout(() => {
      const endTime = performance.now();
      this.hydrationTime.set(endTime - startTime);
    }, Math.random() * 1000 + 500);
  }
  
  // Performance optimization methods
  enableTreeShaking() {
    this.treeShakingEnabled.set(true);
    this.bundleSize.set(214.38); // Reduced bundle size
  }
  
  disableTreeShaking() {
    this.treeShakingEnabled.set(false);
    this.bundleSize.set(350.25); // Larger bundle size
  }
  
  toggleZoneless() {
    this.zonelessEnabled.update(enabled => !enabled);
  }
  
  toggleSSR() {
    this.ssrEnabled.update(enabled => !enabled);
  }
  
  // Reset methods
  resetMetrics() {
    this.renderCount.set(0);
    this.lastRenderTime.set(0);
    this.averageRenderTime.set(0);
    this.changeDetectionCycles.set(0);
    this.signalCount.set(0);
    this.memoryLeaks.set(0);
  }
  
  // Performance comparison
  getPerformanceGrade(): string {
    const avgTime = this.averageRenderTime();
    if (avgTime < 1) return 'A+';
    if (avgTime < 2) return 'A';
    if (avgTime < 5) return 'B';
    if (avgTime < 10) return 'C';
    return 'D';
  }
  
  getMemoryGrade(): string {
    const usage = this.memoryUsage();
    if (usage < 50) return 'A+';
    if (usage < 100) return 'A';
    if (usage < 200) return 'B';
    if (usage < 300) return 'C';
    return 'D';
  }
}
