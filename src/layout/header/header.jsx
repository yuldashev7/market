import React, { useState } from 'react';
import HamburgerIcon from '../../assets/icons/hamburger-icon';
import headerLogo from '../../assets/imgs/header-logo.webp';
import UserIcon from '../../assets/icons/user-icon';
import CartIcon from '../../assets/icons/cart-icon';
import CustomeInput from '../../components/custome-input/custome-input';
import { Link } from 'react-router-dom';
import CatalogModal from '../../components/catalog-modal/catalog-modal';
import UserDrawer from '../../components/user-drawer/user-drawer';
import LikeModal from '../../components/like-modal/like-modal';
import LikeIcon from '../../assets/icons/like-icon';
import Hamburger from '../../components/hamburger/hamburger';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openUserDrawer, setOpenUserDawer] = useState(false);
  const [openLikeModal, setOpenLikeModal] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <>
      <section className="sm:py-[7px] md:px-[20px] md:py-[12px] lg:py-[17px]">
        <div className="container">
          <div className="flex items-center justify-between sm:gap-[5px]">
            <div className="flex items-center flex-1 md:mr-[30px] ">
              <button
                onClick={() => setOpenHamburger(true)}
                className="lg:hidden"
              >
                <HamburgerIcon
                  className={'sm:w-[24px] h-[24px] md:w-[30px] md:h-[30px]'}
                />
              </button>
              <div className="flex items-center ">
                <Link to={'/'}>
                  <img
                    className="sm:w-[90px] md:w-[100px] lg:w-[150px] lg:ml-[-20px]"
                    src={headerLogo}
                    alt="img"
                  />
                </Link>
                <div className="sm:hidden lg:block">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="flex items-center gap-[10px] lg:mr-[30px] lg:ml-[10px] bg-catalog-bg py-[12px] px-[10px] font-[500] leading-[100%] rounded-[6px] text-primary active: transform scale-100 active:scale-95"
                  >
                    <HamburgerIcon className={'lg:w-[24px] text-primary'} />
                    CATALOG
                  </button>
                </div>
              </div>

              <div className="flex items-center flex-1 border-[2px] border-secondary rounded-[4px] sm:px-[5px] md:text-center lg:mx-auto md:mx-auto sm:py-[2px] md:py-[4px] lg:py-[6px]">
                <CustomeInput
                  type="text"
                  placeholder="search"
                  className="w-full min-w-[100px] outline-none sm:text-[13px] md:text-[15px] text-secondary lg:pl-[5px]"
                />
              </div>
            </div>
            <div className="flex justify-between sm:gap-[8px] md:gap-[20px] lg:gap-[32px]">
              <div className="flex items-center sm:gap-[4px] md:gap-[20px] lg:gap-[32px]">
                <button
                  onClick={() => setOpenUserDawer(true)}
                  className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary"
                >
                  <UserIcon />
                </button>
              </div>
              <button
                onClick={() => setOpenLikeModal(true)}
                className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary"
              >
                <LikeIcon />
              </button>
              <button className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary">
                <CartIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
      <CatalogModal open={openModal} onClose={() => setOpenModal(false)} />
      <UserDrawer
        open={openUserDrawer}
        onClose={() => setOpenUserDawer(false)}
      />
      <LikeModal open={openLikeModal} onClose={() => setOpenLikeModal(false)} />
      <Hamburger open={openHamburger} onClose={() => setOpenHamburger(false)} />
    </>
  );
};

export default Header;
