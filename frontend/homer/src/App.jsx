import './App.css';

import { Layout, Divider } from 'antd';

import ComplaintsRoute from "./routes/ComplaintsRoute";
import AddComplaintButton from "./AddComplaintButton";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="app-layout">
        <Header className="app-header">
          <img className='homer-image' src="homer.png" alt=""></img>
        </Header>
        <Content>
          <ComplaintsRoute />
        </Content>
        <Footer className="app-footer">
          <Divider/>
          Intuit
        </Footer>
      </Layout>
      <AddComplaintButton />
    </div>
  );
}

export default App;
