import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/layout/navbar';
import LoginForm from '../components/member/LoginForm';
// import MainMenu from './components/MainMenu';
// import Preloader from './components/Preloader';
// import './App.css'; // 自定义样式
import '../styles/login.module.css'; // 登录页面样式

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Preloader /> */}
        {/* <MainMenu /> */}
        <Header />
        <main className="h-100">
          <Switch>
            <Route path="/login" component={LoginForm} />
            {/* 其他路由 */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
