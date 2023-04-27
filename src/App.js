import React, { lazy } from 'react';
import { 
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Root from './components/root';


const Home = lazy(() => import('./pages/home'));
const ProjectsPage = lazy(() => import('./pages/projectsPage'));
const ProjectDetailsPage = lazy(() => import ('./pages/projectDetailsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacyPolicyPage'));
const ContactPage = lazy(() => import('./pages/contactPage'));
const BlogPage = lazy(() => import('./pages/blogPage'));
const BlogPostPage = lazy(() => import('./pages/blogPostPage'));
const AboutPage = lazy(() => import('./pages/aboutPage'));

const appRouter = createHashRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> }></Route>
    <Route path="/projects" element={ <ProjectsPage /> }></Route>
    <Route path="/project/:project" element={ <ProjectDetailsPage /> }></Route>
    <Route path="privacy-policy" element={ <PrivacyPolicyPage /> }> </Route>
    <Route path="/contact" element={ <ContactPage /> }></Route>
    <Route path="/blog" element={ <BlogPage /> }></Route>
    <Route path="/blog/:id/:timestamp/:blogpost" element={ <BlogPostPage /> }></Route>
    <Route path="/about" element={ <AboutPage /> }></Route>  
  </Route>
));

function App() {

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
