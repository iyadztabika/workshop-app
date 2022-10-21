import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='sb-nav-fixed'>
      <Navbar />
      <div id='layoutSidenav'>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
