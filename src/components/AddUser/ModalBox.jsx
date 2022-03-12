import { Modal } from 'antd';

export const ModalBox = () => {
  Modal.error({
    title: "You're trying to add another user with existing ID",
    content: 'Please try a different ID',
  });
}
