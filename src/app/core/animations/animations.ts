import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export function expandSidebar():AnimationTriggerMetadata {
  return trigger('expandSidebar', [
    state('opened', style({width: '16rem'})),
    state('closed', style({width: '4rem' ,opacity: 0.8})),
    transition('opened <=> closed', [animate('800ms ease-in-out')])
  ])
}
