import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pack from "./components/Pack/Pack";
import Page0 from "./components/Footer/cgu";
import Page1 from "./components/Footer/cgv";
import Page2 from "./components/Footer/mentions";
import Login from "./pages/Login/Login";
import Form from "./components/Form/Form";
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormBooking from './pages/Form/FormBooking';



const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Outlet />
      <FormBooking/>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {        
    path: "/pages/Login/Login",
    element: <Login />,
      },
  {
    path: "/components/Footer/cgu",
    element: <Page0 />,
  },

  {
    path: "/components/Footer/cgv",
    element: <Page1 />,
  },

  {
    path: "/components/Footer/mentions",
    element: <Page2 />,
  },

  {
    path: "/components/Form/Form",
    element: <Form />,
  },

  {
    path: "/components/Pack/Pack",
    element: <Pack />,
  },
] 
 },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
