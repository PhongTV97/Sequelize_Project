import React from "react";
import { Modal } from "antd";

const Dialog = ({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
  title,
}) => {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
      // maskClosable={false}
      forceRender={false}
      closable={false}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default Dialog;
