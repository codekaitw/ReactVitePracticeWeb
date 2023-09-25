import { NavLink, Outlet } from 'react-router-dom';
export default function NavbarComponent() {
  return (
    <>
        <nav>
        <NavLink to={import.meta.env.BASE_URL}>Home</NavLink>
        <NavLink to="/ReactVitePracticeWeb/CheckOut">CheckOut</NavLink>
        </nav>
        <Outlet />
    </>
  )
}
