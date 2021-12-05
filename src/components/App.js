import { useState } from 'react';
import data from '../date';
import List from './List';
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="card">
        <h1>{people.length} birthdays today</h1>
        <article>
          <List people={people} onSetPeople={setPeople} />
        </article>

        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </>
  );
};
export default App;
