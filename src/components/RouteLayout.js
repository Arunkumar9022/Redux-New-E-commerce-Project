import React from 'react'
import NavbarPanel from './NavbarPanel'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../store/store'

const RouteLayout = () => {
    return (
        <>
            <Provider store={store}>
                <NavbarPanel />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    )
}

export default RouteLayout