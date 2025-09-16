import Drawer from '@mui/material/Drawer';
import React from 'react';

const Hamburger = ({ open, onClose }) => {
  return (
    <div>
      <Drawer
        open={open}
        onClose={onClose}
        PaperProps={{
          className:
            '!max-w-none sm:w-[250px] md:w-[300px] sm:pt-[35px] sm:px-[10px] sm:pb-[20]',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in
        consequatur quos voluptatum omnis corporis, dolor voluptatem blanditiis
        eveniet, excepturi unde quas necessitatibus optio rem similique error
        odit, sunt ratione.
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-white bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md transition-colors duration-200"
        >
          X
        </button>
      </Drawer>
    </div>
  );
};

export default Hamburger;
