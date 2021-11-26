import { useState } from 'react';

import './Main.scss';

import { Menu } from './Menu/Menu';
import { Templates } from './Templates/Templates';
import { Feedback } from './Feedback/Feedback';

export function Main() {
  const isSentSuccess = false;
  const [isFeedback, setIsFeedback] = useState(true);

  return (
    <>
      <main className="main">

        <Menu />

        <Templates />

        <Feedback
          isFeedback={isFeedback}
          isSentSuccess={isSentSuccess}
        />

      </main>
    </>
  );
}
