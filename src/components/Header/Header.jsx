import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
      <nav className="flex items-center justify-between flex-wrap p-4 sm: flex-col">
  <div className="mr-4">
    <Link to="/">
      <Logo width="100px" />
    </Link>
  </div>
  <ul className="flex flex-col sm:flex-row sm:ml-auto">
    {navItems.map((item) =>
      item.active ? (
        <li key={item.name} className="mb-2 sm:mb-0 sm:ml-4">
          <button
            onClick={() => navigate(item.slug)}
            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:underline"
          >
            {item.name}
          </button>
        </li>
      ) : null
    )}
    {authStatus && (
      <li className="mt-2 sm:mt-0 sm:ml-4">
        <LogoutBtn />
      </li>
    )}
  </ul>
</nav>

      </Container>
    </header>
  );
}

export default Header;
