import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route 
} from 'react-router-dom';
import Root from './components/root';
import Home from './pages/home';
import Projects from './pages/projects';

import './App.css';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> }></Route>
    <Route path="/projects" element={ <Projects />}></Route>

  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;