import React from 'react';
import styles from '../Modal/Modal.module.css'; 

const Modal = ({ handleClose, show, msg }) => {  
    const showHideClassName =  show ? [styles.displayblock] : [styles.displaynone];
    let classNames = [styles.modal];
    classNames +=  ' ' + showHideClassName;
    return (
      <div className={classNames}>
        <section className={styles.modalmain}>
        <div className={styles.modalcontent}>
          {msg} 
         </div>
         <div className="col-md-offset-2 col-md-2 ">
          <button className="btn btn-primary center-block" type="button" onClick={handleClose}>
            Close
          </button>
          </div>
        </section>
      </div>
    );
  };


  export default Modal;