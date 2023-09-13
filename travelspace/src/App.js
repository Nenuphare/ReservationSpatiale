import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pack from "./components/Pack/Pack";
import Page0 from "./components/Footer/cgu";
import Page1 from "./components/Footer/cgv";
import Page2 from "./components/Footer/mentions";
import Page3 from "./components/Footer/contact";
import Login from "./pages/Login/login"
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header/>
      <Pack />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    path: "/components/Footer/contact",
    element: <Page3 />,
  },

  {
    path: "/pages/Login/login",
    element: <Login />,
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
