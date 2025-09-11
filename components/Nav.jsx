"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { name: "home", path: "/", id: 0 },
  { name: "services", path: "/pages/services", id: 1 },
  { name: "resume", path: "/pages/resume", id: 2 },
  { name: "work", path: "/pages/work", id: 3 },
  { name: "contact", path: "/pages/contact", id: 4 },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map(({ name, path, id }) => (
        <Link href={path} key={id} className={`${path === pathname && 'text-emerald-500 border-b-2 border-b-emerald-500'} capitalize font-medium hover:text-emerald-500 transition-all`}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
