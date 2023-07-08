import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/todo/TodoList';
import { useSelector } from 'react-redux'
import './App.css';

function App() {

  const title = useSelector((store) => store.tasks.title);
  console.log(title)
  return (
    <div className="App">
      <div className="container">
        <div className='box'>
          <nav>
            <section>
              <h2>React-Redux TODO App</h2>
            </section>
          </nav>
          <main>
            <section className="medium-container">
              <h2>Todos</h2>
              <div className="todoapp">
                <Header />
                <TodoList />
                <Footer />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
