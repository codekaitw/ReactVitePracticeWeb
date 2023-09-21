import { NavLink, Outlet } from 'react-router-dom';
export default function NavbarComponent() {
  return (
    <div>
        <nav>
        <NavLink to={import.meta.env.BASE_URL}>Home</NavLink>
        <NavLink to="/ReactVitePracticeWeb/CheckOut">CheckOut</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
