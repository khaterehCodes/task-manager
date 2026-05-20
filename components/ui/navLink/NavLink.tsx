import { NavLinkType } from "@/core/types/global";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, className, children }: NavLinkType) {
  const pathName = usePathname();
  const isNav = pathName === href;
  return (
    <Link
      href={href}
      className={`${className} cursor-pointer ${isNav ? "bg-[#C2F7FA] font-extrabold " : "bg-white"}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
