import { Feedback } from './Feedback/Feedback';
import './Main.scss';
import { Menu } from './Menu/Menu';
import { Templates } from './Templates/Templates';

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
