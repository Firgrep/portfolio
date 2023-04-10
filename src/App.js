import { 
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route 
} from 'react-router-dom';
import Root from './components/root';
import Home from './pages/home';
import ProjectsPage from './pages/projectsPage';
import ProjectDetailsPage from './pages/projectDetailsPage';

const appRouter = createHashRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> }></Route>
    <Route path="/projects" element={ <ProjectsPage />}></Route>
    <Route path="/project/:project" element={ <ProjectDetailsPage /> }></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;