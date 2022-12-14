import { useRouter } from "next/router";
import Link from "next/link";
import style from "../styles/Navbar.module.scss";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Image src="/logo.png" width={60} height={60} alt="webDev" />
      </div>
      <div className={style.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? style.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
