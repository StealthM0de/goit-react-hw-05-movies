import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={CSS.header}>
      <nav className={CSS.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? CSS.linkActive : CSS.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? CSS.linkActive : CSS.link)}
        >
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
