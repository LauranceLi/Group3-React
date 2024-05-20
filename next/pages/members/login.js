import React from 'react'
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import styles from '@/styles/members/login.module.css'
import LoginForm from '@/components/members/login-form'
import Navbar from '@/components/layout/navbar'


const Login = () => {
  return (
    <>
      <Navbar
        navItemName={styles.navItemControl}
        navbarControl={styles.navbarControl}
      />
      <LoginForm />
    </>
  );
};

export default Login;
