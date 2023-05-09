import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const { Header, Content } = Layout;

const AppMenu = () => {
  const history = useHistory();

  const handleMenuClick = (key) => {
    history.push(key);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      onClick={({ key }) => handleMenuClick(key)}
    >
      <Menu.Item key="/page1">Page 1</Menu.Item>
      <Menu.Item key="/page2">Page 2</Menu.Item>
      <Menu.Item key="/page3">Page 3</Menu.Item>
    </Menu>
  );
};

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <AppMenu />
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            <Switch>
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page3" component={Page3} />
            </Switch>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
