import './App.css';
import ThemeProvider from './context/theme';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ThemeProvider>
      <div className='sb-nav-fixed'>
        <Navbar />
        <div id='layoutSidenav'>
            <Sidebar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
