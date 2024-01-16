import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Project',
        element: <Project />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      // {
      //   path: '/Resume',
      //   element: <Resume />,
      // },
      {
        path: '/Footer',
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
