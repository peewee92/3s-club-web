import { Outlet, redirect, useLocation } from "react-router-dom";
import Header from './header'
import styles from './styles.module.less'
import Nav from "./header/nav";
import Footer from "./footer";
import { useEffect } from "react";
function Layouts() {

  useEffect(() => {
    redirect('/home')
  }, [])


  return (
    <div className="h-screen overflow-x-hidden relative">
      <Nav />
      <div className="page-container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layouts