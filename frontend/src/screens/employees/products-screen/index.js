import React, { useState } from "react";
import "./styles.scss";
import { Table, Button, Space } from "antd";
import Dialog from "../../../components/modal";
import DialogConfirm from "../../../components/dialogConfirm";

const Products = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

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
      title: "Nhà cung cấp",
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
            onClick={() => setVisible(true)}
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
        isModalVisible={isModalVisible}
        handleCancel={() => setIsModalVisible(false)}
        handleOk={handleOk}
      ></Dialog>
      <DialogConfirm
        title={"Thông báo"}
        modalText={"Bạn có chắc chắn muốn xoá sản phẩm này không?"}
        visible={visible}
        handleOk={onDelete}
        handleCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default Products;
