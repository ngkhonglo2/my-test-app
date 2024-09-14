import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import DashBoardPage from "./feature/DashBoard";
import SettingPage from "./feature/Setting";
import PostManagePage from "./feature/List";
import { useEffect } from "react";
import SideBar from "./components/SideBar";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import SubcriptionPage from "./feature/DashBoard/subcription";
import RevenuePage from "./feature/DashBoard/revenue";

function App() {
  const NavigateToDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
      navigate("/dashboard/subcription");
    }, [navigate]);

    return null;
  };
  return (
    <div className="App">
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider style={{backgroundColor: '#fff'}} width="20%">
            <SideBar />
          </Sider>
          <Layout style={{overflow: 'auto'}}>
            <Content>
              <Routes>
                <Route path="/" element={<NavigateToDashboard />} />
                <Route path="/dashboard" element={<DashBoardPage />}>
                  <Route path="subcription" element={<SubcriptionPage />} />
                  <Route path="revenue" element={<RevenuePage />} />
                </Route>
                <Route path="/post-manage" element={<PostManagePage />} />
                <Route path="/setting" element={<SettingPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
