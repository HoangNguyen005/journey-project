import { BrowserRouter, Routes, Route } from "react-router";
import { publicRoutes } from "./routes";
import GlobalProvider from "./context/storeContext";
import MainLayout from "./layouts/main";
import Contact from './components/contact'
import "./App.css"


function App() {


  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="app px-1">
          <Contact />
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout || MainLayout;
              const Page = route.page
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />)
            })}
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
