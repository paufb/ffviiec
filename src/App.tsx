import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { AppBar } from './components/AppBar.tsx';
import { Home } from './pages/HomePage.tsx';
import { WeaponsPage } from './pages/WeaponsPage.tsx';
import './App.css';

function App() {
  const [isViewportNarrow, setIsViewportNarrow] = useState(getIsViewportNarrow());

  useEffect(() => {
    function updateLayout() {
      setIsViewportNarrow(getIsViewportNarrow());
    }
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  function getIsViewportNarrow() {
    return window.innerWidth < 800;
  }

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'weapons', element: <WeaponsPage isViewportNarrow={isViewportNarrow} /> }
  ]);

  return (
    <>
      <AppBar isViewportNarrow={isViewportNarrow} />
      {routes}
    </>
  );
}

export default App;
