import { BsTwitterX } from "react-icons/bs";
import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled }) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed 
              inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">

        <div className=" relative w-full lg:w-3/6 my-6 mx-auto sm:max-w-lg h-full sm:h-auto">

          {/* test */}

          <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative 
                flex flex-col w-full bg-black outline-none focus:outline-none">



            {/* header */}
            <div className="flex items-center justify-between p-4">
              <button onClick={handleClose} className="text-white hover:opacity-70 transition rounded-full duration-300 p-2 hover:bg-blue-100 hover:bg-opacity-20">
                <AiOutlineClose size={22} />
              </button>
              <div className="flex-grow flex justify-center">
                <BsTwitterX size={28} color="white" />
              </div>
              <div className="w-8"> {/* Placeholder to balance the header layout */}</div>
            </div>


            <div className="flex items-center justify-between p-2 pl-10 rounded-t">
              <h3 className="text-3xl font-semibold text-white ">
                {title}
              </h3>
            </div>


            {/* body */}

            <div className="relative p-10 flex-auto">
              {body}
            </div>

            {/* footer */}

            <div className=" flex flex-col gap-2 p-10">
              <Button disabled={disabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit} /> {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;