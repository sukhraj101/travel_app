import React from 'react'
import "./index.css"

interface PopupProps {
  title: string;
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onSave: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, show, children, onClose, onSave }) => {
  if (!show) return null
  console.log(onSave)
  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Popup;
