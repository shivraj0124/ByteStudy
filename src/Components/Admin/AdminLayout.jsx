import AdminDashB from './AdminDashB'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <AdminDashB />
            <Outlet />
        </>
    )
}