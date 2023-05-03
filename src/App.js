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
  <Route path="/" element={ <Root /> } errorElement={<ErrorPage />}>
    <Route 
      index 
      element={ <Home /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="/projects" 
      element={ <ProjectsPage /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="/project/:project" 
      element={ <ProjectDetailsPage /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="privacy-policy" 
      element={ <PrivacyPolicyPage /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="/contact" 
      element={ <ContactPage /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="/blog" 
      element={ <BlogPage /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="/blog/:id/:timestamp/:blogpost" 
      element={ <BlogPostPage /> } 
      errorElement={<ErrorPage />}
    />
    <Route 
      path="/about" 
      element={ <AboutPage /> } 
      errorElement={<ErrorPage />}
    />
  </Route>
));

function App() {

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;

function ErrorPage() {

  return (
    <div>
      <h3>🔗‍💥 Unfortunately, the link you were trying to access does not exist or it is bugged. If the problem persists, please contact the site administrator. I apologize for any inconvenience caused.</h3>
    </div>
  )
}