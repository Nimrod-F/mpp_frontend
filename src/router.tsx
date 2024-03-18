import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
const AppRouter = () => {
  const Overview = lazy(() => import("./components/Overview"));
  const Detail = lazy(() => import("./components/Detail"));
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dogs" />} />
          <Route
            element={
              <Layout>
                <Overview />
              </Layout>
            }
            path={"/dogs"}
          />
          <Route element={<Detail />} path={"/dogs/:id"} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
