import { useState } from 'react';
import HamburgerIcon from '../../assets/icons/hamburger-icon';

import UserIcon from '../../assets/icons/user-icon';
import CartIcon from '../../assets/icons/cart-icon';
import CustomeInput from '../../components/custome-input/custome-input';
import { Link } from 'react-router-dom';
import CatalogModal from '../../components/catalog-modal/catalog-modal';
import UserDrawer from '../../components/user-drawer/user-drawer';
import LikeModal from '../../components/like-modal/like-modal';
import LikeIcon from '../../assets/icons/like-icon';
import Hamburger from '../../components/hamburger/hamburger';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../config/ui/mui-theme';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openUserDrawer, setOpenUserDawer] = useState(false);
  const [openLikeModal, setOpenLikeModal] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  const [mode, setMode] = useState('light');

  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //     ...(mode === 'light'
  //       ? {
  //           background: {
  //             default: '#fff',
  //             paper: '#f5f5f5',
  //           },
  //           text: {
  //             primary: '#000',
  //             secondary: '#444',
  //             productDetailColor: '#364153',
  //           },
  //         }
  //       : {
  //           background: {
  //             default: '#13263d',
  //             paper: '#1e293b',
  //           },
  //           text: {
  //             primary: '#f8fafc',
  //             secondary: '#cbd5e1',
  //             productDetailColor: '#cbd5e1',
  //           },
  //         }),
  //   },
  // });

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <section className="sm:py-[7px] md:px-[20px] md:py-[12px] lg:py-[17px] fixed top-0 left-0 w-full shadow-md z-50 bg-white">
        <div className="container">
          <div className="flex items-center justify-between sm:gap-[5px]">
            <div className="flex items-center flex-1 md:mr-[30px] ">
              <button
                onClick={() => setOpenHamburger(true)}
                className="lg:hidden"
              >
                <HamburgerIcon className="sm:w-[24px] h-[24px] md:w-[30px] md:h-[30px]" />
              </button>
              <div className="flex items-center">
                <Link to={'/'}>
                  <span
                    className="
        font-bold text-primary 
        sm:text-[22px] md:text-[25px] lg:text-[28px] sm:ml-[10px] sm:mr-[10px] md:mr-[15px] md:ml-[15px] lg:ml-[-20px]
      "
                  >
                    LOGO
                  </span>
                </Link>
                <div className="sm:hidden lg:block">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="flex items-center gap-[10px] lg:mr-[30px] lg:ml-[10px] bg-catalog-bg py-[12px] px-[10px] font-[500] leading-[100%] rounded-[6px] text-primary active:transform active:scale-95"
                  >
                    <HamburgerIcon className="lg:w-[24px] text-primary" />
                    КАТАЛОГ
                  </button>
                </div>
              </div>

              <div className="flex items-center flex-1 border-[2px] border-secondary rounded-[4px] sm:px-[5px] md:text-center lg:mx-auto sm:py-[2px] md:py-[4px] lg:py-[6px]">
                <CustomeInput
                  type="text"
                  placeholder="search"
                  className="w-full min-w-[100px] outline-none sm:text-[13px] md:text-[15px] text-secondary lg:pl-[5px]"
                />
              </div>
            </div>

            <div className="flex items-center sm:gap-[8px] md:gap-[20px] lg:gap-[32px]">
              <button
                onClick={() => setOpenUserDawer(true)}
                className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary sm:hidden md:block"
              >
                <UserIcon />
              </button>

              <button
                onClick={() => setOpenLikeModal(true)}
                className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary sm:hidden md:block"
              >
                <LikeIcon />
              </button>

              <button className="transform scale-100 active:scale-95 transition-transform duration-150 hover:text-primary">
                <CartIcon />
              </button>

              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="relative w-15 h-8 flex items-center bg-white border border-gray-400 rounded-full p-1"
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-white text-sm transform transition-transform duration-300 ${
                    mode === 'dark' ? 'translate-x-7' : 'translate-x-0'
                  }`}
                >
                  {mode === 'dark' ? '🌙' : '☀️'}
                </span>
              </button>
            </div>
          </div>
        </div>
        <CatalogModal open={openModal} onClose={() => setOpenModal(false)} />
        <UserDrawer
          open={openUserDrawer}
          onClose={() => setOpenUserDawer(false)}
        />
        <LikeModal
          open={openLikeModal}
          onClose={() => setOpenLikeModal(false)}
        />
        <Hamburger
          open={openHamburger}
          onClose={() => setOpenHamburger(false)}
        />
      </section>
    </ThemeProvider>
  );
};

export default Header;
