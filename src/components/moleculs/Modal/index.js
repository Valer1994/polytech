import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import {
  Icon,
  Paper,
} from '../../';

import './style.scss';

const Modal = ({
  onClose,
  maxWidth,
  forLogin,
  children,
  className,
  modalHeight,
}) => {

  const wrapperRef = useRef(null);

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      !forLogin && onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
     createPortal(
       <Paper
          className={classnames('Modal', {
            [className]: className,
            'forLogin': forLogin
          })}
          flexName='flexible jCenter aCenter'
        >
          <Paper
            className={classnames('modalContent',{'modalHeight': modalHeight})}
            flexName='flexible jCenter aStart'
            style={{ maxWidth: maxWidth || 600, width: '100%' }}
            ref={wrapperRef}
          >
              {onClose && <Paper onClick={onClose} className='closeModal'>
                  <Icon className="icon-feather-x"/>
              </Paper>}
              {children}
          </Paper>
      </Paper>,
      document.querySelector('#root-modal')
      )
  );
};

export default Modal;
