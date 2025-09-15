import Drawer from '@mui/material/Drawer';
import React from 'react';

const UserDrawer = ({ open, onClose }) => {
  return (
    <div>
      <Drawer
        open={open}
        onClose={onClose}
        anchor="right"
        PaperProps={{
          sx: { maxWidth: '400px', px: '20px', pb: '20px', pt: '50px' },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet
        consequatur. Ut beatae maiores delectus saepe quis harum sapiente quia
        magni dolore dicta qui perspiciatis rerum neque, praesentium voluptatem
        in.
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-white bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md transition-colors duration-200"
        >
          X
        </button>
      </Drawer>
    </div>
  );
};

export default UserDrawer;
