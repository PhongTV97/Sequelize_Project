import { Modal } from "antd";

const DialogConfirm = ({
  modalText,
  visible,
  handleOk,
  handleCancel,
  title,
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  );
};

export default DialogConfirm;
