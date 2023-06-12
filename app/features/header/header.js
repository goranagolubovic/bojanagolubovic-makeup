import { React } from "react";
import Logo from "../../../components/logo";
import Menu from "../menu/menu";
import { menuOptions } from "@/constants";

const Header = () => {
  return (
    <div
      className={`w-screen bg-purple px-8 flex sm:justify-evenly lg:gap-80 sm:gap-20`}
    >
      <Logo className={"py-4 lg:py-4 sm:py-1 w-12 sm:w-12 lg:w-48"} />
      <Menu menuOptions={menuOptions} />
    </div>
  );
};

export default Header;
