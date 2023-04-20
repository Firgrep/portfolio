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
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import ContactPage from './pages/contactPage';
import BlogPage from './pages/blogPage';
import BlogPostPage from './pages/blogPostPage';

const appRouter = createHashRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> }></Route>
    <Route path="/projects" element={ <ProjectsPage /> }></Route>
    <Route path="/project/:project" element={ <ProjectDetailsPage /> }></Route>
    <Route path="privacy-policy" element={ <PrivacyPolicyPage /> }> </Route>
    <Route path="/contact" element={ <ContactPage /> }></Route>
    <Route path="/blog" element={ <BlogPage /> }></Route>
    <Route path="/blog/:timestamp/:blogpost" element={ <BlogPostPage /> }></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
