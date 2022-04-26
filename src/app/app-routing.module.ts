import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: InfoSectionComponent, pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent, pathMatch: 'full' },
  { path: 'quiz/results', component: QuizResultsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
