import { React } from "react";
import Logo from "../../components/logo";
import Menu from "../menu/menu";
import { menuOptions } from "../../constants/constants";

const Header = () => {
  return (
    <div className="w-screen bg-purple px-8 flex sm:justify-evenly lg:gap-80 sm:gap-20">
      <Logo />
      <Menu menuOptions={menuOptions} />
    </div>
  );
};

export default Header;
