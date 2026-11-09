import { useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();

  const authPages = [
    "/login",
    "/register",
    "/forgot-password"
    ,
  ];

  const isAuthPage = authPages.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}

      <main>
        <AppRoutes />
      </main>

      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;