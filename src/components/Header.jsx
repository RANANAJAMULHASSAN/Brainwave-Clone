import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./designs/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
function Header() {
  const pathName = useLocation();
  const [openNavigatiobBar, setOpenNavigationBar] = useState(false);
  let positionClick=()=>{
    window.scrollTo(0, 0);
  }

  function handleClick() {
    if (openNavigatiobBar) {
      setOpenNavigationBar(false);
      enablePageScroll()
    } else {
      setOpenNavigationBar(true);
      disablePageScroll()
    }
  }

  function handleClick2() {
    if(!openNavigatiobBar) return;
    enablePageScroll()
    setOpenNavigationBar(false);
  }
  return (
    <>
      <div
        className={`${
          openNavigatiobBar ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        } fixed z-50 top-0 left-0 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}
      >
        <div className="flex py-3 lg:py-0 items-center px-4 lg:px-10">
          <Link className="block w-48 xl:ml-8" to="/" onClick={positionClick}>
            <img src={brainwave} alt="logoPNG" width={190} height={40} />
          </Link>
          <nav
            className={` ${
              openNavigatiobBar ? "flex" : "hidden"
            }  top-20 left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent fixed`}
          >
            <div className="relative z-2 flex flex-col lg:flex-row  justify-center m-auto">
              {navigation.map((items) => (
                <Link
                  className={`block relative font-code uppercase text-2xl text-white transition-colors hover:text-color-1 ${
                    items.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 lg:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                    items.url === pathName.hash
                      ? "lg:text-white z-2"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-white xl:px-12`}
                  key={items.id}
                  onClick={handleClick2}
                  to={items.url}
                >
                  {items.title}
                </Link>
              ))}
            </div>
            <HamburgerMenu />
          </nav>
          <Link
            to="#signup"
            className="hidden h-11 text-center justify-center items-center border lg:flex px-3 rounded-md button text-n-1/50 hover:text-purple-600 mr-8 transition-colors"
          >
            New account
          </Link>
          <Button
            className="button hidden lg:flex border rounded-md"
            to="#login"
          >
            Sign in
          </Button>
          <Button
            className={`border rounded-tr-2xl ml-auto lg:hidden rounded-md`}
            onClick={handleClick}
          >
            <MenuSvg openNavigation={openNavigatiobBar} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
