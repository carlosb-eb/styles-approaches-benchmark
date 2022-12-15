import React from 'react';
import { EventCard as CSSModuleEventCard } from './css-modules/EventCard';
import { EventCard as PostCSSEventCard } from './post-css/EventCard';
import { EventCard as SASSEventCard } from './sass/EventCard';
import { EventCard as StyledComponentsEventCard } from './styled-components/EventCard';

export const App = () => {
  return (
    <div className="p-2">
      <h1>React TSX Starter</h1>
      <div>containing:</div>
      <ul>
        <li>
          <CSSModuleEventCard />
        </li>
        <li>
          <PostCSSEventCard />
        </li>
        <li>
          <SASSEventCard />
        </li>
        <li>
          <StyledComponentsEventCard />
        </li>

        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
