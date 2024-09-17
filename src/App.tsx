import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { AppBar } from './components/AppBar.tsx';
import { AppSidebar } from './components/AppSidebar.tsx';
import { Home } from './pages/HomePage.tsx';
import { WeaponsPage } from './pages/WeaponsPage.tsx';
import './App.css';

function App() {
  const [isViewportNarrow, setIsViewportNarrow] = useState(getIsViewportNarrow());
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(getIsViewportNarrow());
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'weapons', element: <WeaponsPage isViewportNarrow={isViewportNarrow} /> }
  ]);

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

  function toggleSidebar() {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  }

  return (
    <>
      <AppBar isSidebarCollapsed={isSidebarCollapsed} isViewportNarrow={isViewportNarrow} toggleSidebar={toggleSidebar} />
      <AppSidebar isCollapsed={isSidebarCollapsed} isViewportNarrow={isViewportNarrow} />
      <div className="background" />
      <main style={{ padding: `var(--app-bar-height) 0 0 ${isViewportNarrow || isSidebarCollapsed ? 'var(--app-sidebar-collapsed-width)' : 'var(--app-sidebar-width)'}` }}>
        {routes}
      </main>
    </>
  );
}

export default App;
