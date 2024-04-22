import { useRouter } from "next/router";
import { BsTwitterX } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="duration-300 rounded-full h-14 w-14 p-4 flexitems-center justify-center 
      hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition
  "
    >
      <BsTwitterX size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
