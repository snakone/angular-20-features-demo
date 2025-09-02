import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignalsDemoComponent } from './components/signals-demo/signals-demo.component';
import { ControlFlowDemoComponent } from './components/control-flow-demo/control-flow-demo.component';
import { DeferDemoComponent } from './components/defer-demo/defer-demo.component';
import { AnimationsDemoComponent } from './components/animations-demo/animations-demo.component';
import { ErrorHandlingDemoComponent } from './components/error-handling-demo/error-handling-demo.component';
import { PerformanceDemoComponent } from './components/performance-demo/performance-demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signals', component: SignalsDemoComponent },
  { path: 'control-flow', component: ControlFlowDemoComponent },
  { path: 'defer', component: DeferDemoComponent },
  { path: 'animations', component: AnimationsDemoComponent },
  { path: 'error-handling', component: ErrorHandlingDemoComponent },
  { path: 'performance', component: PerformanceDemoComponent },
  { path: '**', redirectTo: '' }
];
