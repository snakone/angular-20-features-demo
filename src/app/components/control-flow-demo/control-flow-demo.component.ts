import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './control-flow-demo.component.html',
  styleUrl: './control-flow-demo.component.scss'
})
export class ControlFlowDemoComponent {
  // Data for control flow examples
  showContent = signal(true);
  selectedTheme = signal('light');
  items = signal(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);
  userRole = signal('admin');
  isLoading = signal(false);
  hasError = signal(false);
  errorMessage = signal('Something went wrong!');
  
  // Complex data for advanced examples
  users = signal([
    { id: 1, name: 'Alice', role: 'admin', active: true },
    { id: 2, name: 'Bob', role: 'user', active: false },
    { id: 3, name: 'Charlie', role: 'moderator', active: true },
    { id: 4, name: 'Diana', role: 'user', active: true }
  ]);

  // Methods to demonstrate control flow
  toggleContent() {
    this.showContent.update(show => !show);
  }

  changeTheme(theme: string) {
    this.selectedTheme.set(theme);
  }

  addItem(item: string) {
    if (item.trim()) {
      this.items.update(items => [...items, item.trim()]);
    }
  }

  removeItem(index: number) {
    this.items.update(items => items.filter((_, i) => i !== index));
  }

  changeUserRole(role: string) {
    this.userRole.set(role);
  }

  simulateLoading() {
    this.isLoading.set(true);
    this.hasError.set(false);
    
    setTimeout(() => {
      this.isLoading.set(false);
      // Randomly show error for demo purposes
      if (Math.random() > 0.5) {
        this.hasError.set(true);
      }
    }, 2000);
  }

  clearError() {
    this.hasError.set(false);
  }

  // Computed values for control flow
  activeUsers = signal(this.users().filter(user => user.active));
  adminUsers = signal(this.users().filter(user => user.role === 'admin'));
  userCount = signal(this.users().length);
}
