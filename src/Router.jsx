import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Register from "./pages/Register";

const { Navigate, Routes, Route } = require("react-router-dom");

function Router(props) {
  const { data } = props;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Content/>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default Router;