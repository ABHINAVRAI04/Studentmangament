import React from 'react'
import Footer from './components/Footer/Footer'
import {  Outlet } from 'react-router-dom'
import Header2 from './components/Header/Header2'

function Layout() {
        return (
            <>
            <Header2/>
            <Outlet />
            <Footer/>
            </>
        )
    }
   
export default Layout