import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      <ContentAPI />
      {/* <ContentHooks /> */}
    </div>
  );
}

export default App;