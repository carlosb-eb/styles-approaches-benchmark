import React from 'react';
import { EventCard as CSSModuleEventCard } from './css-modules/EventCard';
import { EventCard as PostCSSEventCard } from './post-css/EventCard';
import { EventCard as SASSEventCard } from './sass/EventCard';

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
      </ul>
    </div>
  );
};
