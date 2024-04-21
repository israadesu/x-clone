import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { GoHomeFill, GoBellFill } from "react-icons/go";
import { RiUserFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: GoHomeFill,
    },
    {
      label: "Notifications",
      href: "/",
      icon: GoBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: RiUserFill,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className=" space-y-2 lg:w-[230px] flex-row">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
