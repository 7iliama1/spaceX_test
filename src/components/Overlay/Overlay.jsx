import { useEffect } from 'react';
import './Overlay.scss';

function Overlay({ isActive, onClose, ...props }) {
  useEffect(() => {
    function handleEscClose(evt) { //! Handler ESC close btn
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    if (isActive) {
      document.addEventListener('keydown', handleEscClose);
      return () => document.removeEventListener('keydown', handleEscClose);
    }
  }, [isActive, onClose]);

  
  const closeByClickOnOverlay = (evt) => {  //! Handler close by click on overlay
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`overlay ${isActive ? 'overlay_active' : ''}`}
      onMouseDown={closeByClickOnOverlay}
    >
      {props.children}
    </div>
  );
}

export default Overlay;
