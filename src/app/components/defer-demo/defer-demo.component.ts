import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-defer-demo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './defer-demo.component.html',
  styleUrl: './defer-demo.component.scss'
})
export class DeferDemoComponent {
  showHeavyComponent = signal(false);
  showExpensiveChart = signal(false);
  showUserProfile = signal(false);
  showDataTable = signal(false);
  
  // Simulate different loading scenarios
  triggerHeavyComponent() {
    this.showHeavyComponent.set(true);
  }
  
  triggerExpensiveChart() {
    this.showExpensiveChart.set(true);
  }
  
  triggerUserProfile() {
    this.showUserProfile.set(true);
  }
  
  triggerDataTable() {
    this.showDataTable.set(true);
  }
  
  resetAll() {
    this.showHeavyComponent.set(false);
    this.showExpensiveChart.set(false);
    this.showUserProfile.set(false);
    this.showDataTable.set(false);
  }
}
