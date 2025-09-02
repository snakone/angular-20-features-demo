import { Component, signal, ErrorHandler, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-handling-demo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './error-handling-demo.component.html',
  styleUrl: './error-handling-demo.component.scss'
})
export class ErrorHandlingDemoComponent {
  private errorHandler = inject(ErrorHandler);
  
  // Error simulation signals
  shouldThrowError = signal(false);
  errorCount = signal(0);
  lastError = signal<string>('');
  
  // Global error handling demo
  globalErrorCount = signal(0);
  globalErrors = signal<string[]>([]);
  
  // Component error boundary demo
  componentError = signal<string | null>(null);
  
  // Async error demo
  asyncError = signal<string>('');
  isAsyncLoading = signal(false);
  
  // Resource error demo
  resourceError = signal<string>('');
  resourceData = signal<any>(null);
  
  // Methods to trigger different types of errors
  triggerSyncError() {
    try {
      this.shouldThrowError.set(true);
      // This will cause an error in the template
      throw new Error('Synchronous error triggered!');
    } catch (error) {
      this.handleError(error);
    }
  }
  
  triggerAsyncError() {
    this.isAsyncLoading.set(true);
    setTimeout(() => {
      try {
        throw new Error('Asynchronous error occurred!');
      } catch (error) {
        this.handleError(error);
        this.asyncError.set('Async error handled successfully');
        this.isAsyncLoading.set(false);
      }
    }, 2000);
  }
  
  triggerResourceError() {
    this.resourceData.set(null);
    // Simulate resource loading error
    setTimeout(() => {
      try {
        throw new Error('Resource loading failed!');
      } catch (error) {
        this.handleError(error);
        this.resourceError.set('Resource error handled');
      }
    }, 1500);
  }
  
  triggerGlobalError() {
    // This will be caught by the global error handler
    const error = new Error('Global error handler test');
    this.errorHandler.handleError(error);
  }
  
  triggerComponentError() {
    this.componentError.set('Component error boundary triggered');
  }
  
  // Error handling method
  private handleError(error: any) {
    this.errorCount.update(count => count + 1);
    this.lastError.set(error.message || 'Unknown error');
    console.error('Error handled:', error);
  }
  
  // Reset methods
  resetErrors() {
    this.shouldThrowError.set(false);
    this.errorCount.set(0);
    this.lastError.set('');
    this.componentError.set(null);
    this.asyncError.set('');
    this.resourceError.set('');
    this.resourceData.set(null);
  }
  
  resetGlobalErrors() {
    this.globalErrorCount.set(0);
    this.globalErrors.set([]);
  }
  
  // Simulate successful resource loading
  loadResource() {
    this.resourceData.set({
      id: 1,
      name: 'Sample Resource',
      data: 'Resource loaded successfully!'
    });
  }
}
