import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const appear = trigger('appear', [
  state('', style({ height: '', opacity: 0, transform: 'translateX(0%)' })),
  transition(':enter', [
    style({ height: 0, opacity: 0, transform: 'translateX(50%)' }),
    animate('.2s .2s ease-in'),
  ]),
]);
