import React from 'react';
import HamburgerIcon from '../../assets/icons/hamburger-icon';
import headerLogo from '../../assets/imgs/header-logo.webp';
import UserIcon from '../../assets/icons/user-icon';
import CartIcon from '../../assets/icons/cart-icon';
import HeartIcon from '../../assets/icons/heart-icon';
import CustomeInput from '../../components/custome-input/custome-input';

const Header = () => {
  return (
    <section className="sm:py-[7px] md:px-[20px] md:py-[12px] lg:py-[17px]">
      <div className="container">
        <div className="flex items-center justify-between sm:gap-[5px]">
          <div className="flex items-center flex-1 md:mr-[30px] ">
            <button className="lg:hidden">
              <HamburgerIcon
                className={'sm:w-[24px] h-[24px] md:w-[30px] md:h-[30px]'}
              />
            </button>
            <div className="flex items-center ">
              <img
                className="sm:w-[90px] md:w-[100px] lg:w-[140px] lg:ml-[-20px]"
                src={headerLogo}
                alt="img"
              />
              <div className="sm:hidden lg:block">
                <button className="flex items-center gap-[10px] lg:mr-[30px] lg:ml-[10px] bg-catalog-bg py-[12px] px-[10px] font-[500] leading-[100%] rounded-[6px] text-primary">
                  <HamburgerIcon className={'lg:w-[24px] text-primary'} />
                  CATALOG
                </button>
              </div>
            </div>

            <div className="flex items-center flex-1 border-[2px] border-secondary rounded-[4px] sm:px-[5px] md:text-center lg:mx-auto md:mx-auto sm:py-[2px] md:py-[4px] lg:py-[6px] ">
              <CustomeInput
                type="text"
                placeholder="search"
                className="w-full min-w-[100px] outline-none sm:text-[13px] md:text-[15px] text-secondary"
              />
            </div>
          </div>
          <div className="flex justify-between sm:gap-[8px] md:gap-[20px] lg:gap-[32px]">
            <div className="flex items-center sm:gap-[4px] md:gap-[20px] lg:gap-[32px]">
              <button className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary">
                <UserIcon />
              </button>
            </div>
            <button className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary">
              <HeartIcon />
            </button>
            <button className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary">
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
