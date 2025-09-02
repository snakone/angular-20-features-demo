import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss'
})
export class SignalsDemoComponent {

  // Writable Signals
  count = signal(0);
  name = signal('Angular');
  items = signal<string[]>([]);
  user = signal({ id: 1, name: 'John Doe', email: 'john@example.com' });

  // Computed Signals
  doubleCount = computed(() => this.count() * 2);
  isEven = computed(() => this.count() % 2 === 0);
  itemCount = computed(() => this.items().length);
  userDisplayName = computed(() => `${this.user().name} (${this.user().email})`);

  // Effect for side effects
  constructor() {
    effect(() => {
      console.log(`Count changed to: ${this.count()}`);
      console.log(`Is even: ${this.isEven()}`);
    });

    effect(() => {
      console.log(`Items changed: ${this.items().join(', ')}`);
    });
  }

  // Signal mutation methods
  increment() {
    this.count.update(count => count + 1);
  }

  decrement() {
    this.count.update(count => count - 1);
  }

  reset() {
    this.count.set(0);
  }

  updateName(newName: string) {
    this.name.set(newName);
  }

  addItem(item: string) {
    if (item.trim()) {
      this.items.update(items => [...items, item.trim()]);
    }
  }

  removeItem(index: number) {
    this.items.update(items => items.filter((_, i) => i !== index));
  }

  updateUser(field: 'name' | 'email', value: string) {
    this.user.update(user => ({ ...user, [field]: value }));
  }

  // Signal-based computed with complex logic
  statistics = computed(() => {
    const count = this.count();
    const items = this.items();
    return {
      count,
      doubleCount: count * 2,
      isEven: count % 2 === 0,
      itemCount: items.length,
      hasItems: items.length > 0,
      firstItem: items[0] || 'No items',
      lastItem: items[items.length - 1] || 'No items'
    };
  });

  // Signal with async-like behavior
  asyncData = signal<string>('Loading...');

  simulateAsync() {
    this.asyncData.set('Loading...');
    setTimeout(() => {
      this.asyncData.set(`Data loaded at ${new Date().toLocaleTimeString()}`);
    }, 2000);
  }
}
