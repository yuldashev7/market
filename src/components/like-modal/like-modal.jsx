import Dialog from '@mui/material/Dialog';
import React from 'react';

const LikeModal = ({ open, onClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            maxWidth: '1000px',
            pt: '45px',
            pb: '20px',
            px: '20px',
            overflowY: 'scroll',
          },
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        amet, molestiae alias doloremque nostrum autem eius cumque facere harum
        voluptatum mollitia, exercitationem unde consequuntur voluptas repellat!
        Id sint culpa qui!
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-white bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md transition-colors duration-200"
        >
          X
        </button>
      </Dialog>
    </div>
  );
};

export default LikeModal;
