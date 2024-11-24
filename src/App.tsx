import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { AppBar } from './components/AppBar.tsx';
import { AppSidebar } from './components/AppSidebar.tsx';
import { GearPage } from './pages/GearPage.tsx';
import { Home } from './pages/HomePage.tsx';
import { MateriaPage } from './pages/MateriaPage.tsx';
import { WeaponsPage } from './pages/WeaponsPage.tsx';
import './App.css';

function App() {
  const [isViewportNarrow, setIsViewportNarrow] = useState<boolean>(getIsViewportNarrow());
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);
  const routes = useRoutes([
    { path: '/', element: <Home collapseSidebar={collapseSidebar} /> },
    { path: '/weapons', element: <WeaponsPage isViewportNarrow={isViewportNarrow} /> },
    { path: '/gear', element: <GearPage /> },
    { path: '/materia', element: <MateriaPage /> }
  ]);

  useEffect(() => {
    function updateLayout() {
      setIsViewportNarrow(getIsViewportNarrow());
    }
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  function getIsViewportNarrow() {
    return window.innerWidth < 800;
  }

  function toggleSidebar() {
    setIsSidebarCollapsed((prevState) => !prevState);
  }

  function collapseSidebar() {
    setIsSidebarCollapsed(true);
  }

  return (
    <>
      <AppBar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <AppSidebar isCollapsed={isSidebarCollapsed} collapseSidebar={collapseSidebar} />
      <div className="background" />
      <main style={{ transition: 'padding 0.25s ease',
                     padding: `var(--app-bar-height) 0 0 ${isViewportNarrow || isSidebarCollapsed ? 'var(--app-sidebar-collapsed-width)' : 'var(--app-sidebar-width)'}` }}>
        {routes}
      </main>
    </>
  );
}

export default App;
