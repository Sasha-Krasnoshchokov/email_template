import './Main.scss';

import { Menu } from './Menu/Menu';
import { Templates } from './Templates/Templates';
import { Feedback } from './Feedback/Feedback';

export function Main() {
  return (
    <>
      <main className="main">

        <Menu />
        <Templates />
        <Feedback />

      </main>
    </>
  );
}
