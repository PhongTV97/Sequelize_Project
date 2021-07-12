import React, { useState } from "react";
import "./styles.scss";
import { Table, Button, Space, Form, Input, Row, Col } from "antd";
import Dialog from "../../../components/modal";
import DialogConfirm from "../../../components/dialogConfirm";

const Products = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState(
    "Bạn có chắc chắn muốn xoá sản phẩm này không?"
  );

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      visible: false,
      align: "center",
      width: "15%",
      className: "display-none",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      align: "center",
      width: "20%",
    },
    {
      title: "nhà phân phối",
      dataIndex: "supplies_name",
      align: "center",
      width: "18%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      align: "center",
      width: "18%",
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "expire_date",
      align: "center",
      width: "15%",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      align: "center",
      width: "15%",
    },
    {
      width: "15%",
      align: "center",
      title: "",
      dataIndex: "action",
      render: (text, record) => (
        <Space size="middle">
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#34a8eb",
            }}
          >
            Chi tiết
          </button>
          <button
            onClick={() => showDialogConfirm(record)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#34a8eb",
              cursor: "pointer",
            }}
          >
            Xóa
          </button>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      id: i + 1,
      name: `Product ${i}`,
      supplies_name: `Product ${i}`,
      address: `London, Park Lane no. ${i}`,
      expire_date: "2021/07/20",
      status: "Còn hàng",
    });
  }

  const showDialogConfirm = (data) => {
    console.log("data", data);
    setVisible(true);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const onAddProduct = () => {
    setIsModalVisible(true);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOk = () => {
    console.log("aaaa");
  };

  const onDelete = () => {
    console.log("delete");
  };

  const handleRemoveMultipleProduct = () => {
    setMsg(
      `Bạn có chắc chắn muốn xóa ${selectedRowKeys.length} sản phẩm đã chọn không?`
    );
    setVisible(true);
  };

  return (
    <div className="home-container">
      <div className="add-product">
        <span style={{ marginLeft: 8, fontSize: 18 }}>
          Bạn đang lựa chọn{" "}
          <span style={{ fontWeight: "bold" }}>{selectedRowKeys.length}</span>{" "}
          sản phẩm.
        </span>
        <div>
          <Button
            onClick={handleRemoveMultipleProduct}
            disabled={!selectedRowKeys.length}
            className="btn"
            style={{ backgroundColor: "red", marginRight: 15, border: "none" }}
          >
            Xóa sản phẩm đã chọn
          </Button>
          <Button className="btn" onClick={onAddProduct}>
            Thêm sản phẩm
          </Button>
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Dialog
        title={"Thêm sản phẩm"}
        isModalVisible={isModalVisible}
        handleCancel={() => setIsModalVisible(false)}
        handleOk={handleOk}
      >
        {formAddProduct()}
      </Dialog>
      <DialogConfirm
        title={"Thông báo"}
        modalText={msg}
        visible={visible}
        handleOk={onDelete}
        handleCancel={() => setVisible(false)}
      />
    </div>
  );
};

const formAddProduct = () => {
  return (
    <div>
      <Form
        // name="basic"
        layout="vertical"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col span={11}>
            <Form.Item
              name="lastname"
              rules={[{ required: true, message: "Hãy nhập họ của bạn!" }]}
            >
              <span className="form-label">Tên sản phẩm</span>
              <Input className="form-input" />
            </Form.Item>
          </Col>
          <Col span={2} />
          <Col span={11}>
            <Form.Item
              name="firstname"
              rules={[{ required: true, message: "Hãy nhập tên của bạn!" }]}
            >
              <span className="form-label">Miêu tả</span>
              <Input className="form-input" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Hãy nhập địa chỉ email của bạn!" },
          ]}
        >
          <span className="form-label">Ngày hết hạn</span>
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Hãy nhập password của bạn!" }]}
        >
          <span className="form-label">Giá</span>
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Hãy nhập password của bạn!" }]}
        >
          <span className="form-label">Trạng thái</span>
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Hãy nhập password của bạn!" }]}
        >
          <span className="form-label">Nhà cung cấp</span>
          <Input className="form-input" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Hãy nhập password của bạn!" }]}
        >
          <span className="form-label">Hình ảnh </span>
          <Input className="form-input" />
        </Form.Item>

        <Button htmlType="submit" className="btn-submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Products;
