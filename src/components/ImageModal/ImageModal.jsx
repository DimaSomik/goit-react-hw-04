import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ data, onClose }) => (
  <Modal isOpen={!!data}
         onRequestClose={onClose}
         className={css.Modal}
         overlayClassName={css.ModalBox}
         ariaHideApp={false}
  >
    <div>
      <div className={css.ImageBox}><img src={data?.urls?.regular} alt={data?.alt_description} /></div>
      <div className={css.AdditionsBox}>
        <p>Author: {data?.user?.name}</p>
        <p>Likes: {data?.likes}</p>
        <p>Updated: {data?.updated_at.substring(0, 10)}</p>
      </div>
      <button onClick={onClose} className={css.CloseBtn}>X</button>
    </div>
  </Modal>
);

export default ImageModal;