import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animations-demo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animations-demo.component.html',
  styleUrl: './animations-demo.component.scss'
})
export class AnimationsDemoComponent {
  showAnimatedContent = signal(false);
  currentAnimation = signal('fade');
  showViewTransition = signal(false);
  
  toggleAnimatedContent() {
    this.showAnimatedContent.update(show => !show);
  }
  
  changeAnimation(animation: string) {
    this.currentAnimation.set(animation);
  }
  
  triggerViewTransition() {
    this.showViewTransition.update(show => !show);
  }
}
