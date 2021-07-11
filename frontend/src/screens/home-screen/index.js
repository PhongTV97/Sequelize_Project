import React, { useState } from "react";
import "./styles.scss";
import { Table, Button, Space } from "antd";
import Dialog from "../../components/modal";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "Age",
    dataIndex: "age",
    align: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    align: "center",
  },
  {
    align: "center",
    title: "Action",
    dataIndex: "action",
    render: () => (
      <Space size="middle">
        <a href="/">Xem chi tiết</a>
        <a href="/">Xóa sản phẩm</a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const HomeScreen = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
            disabled={!selectedRowKeys.length}
            className="btn"
            style={{ backgroundColor: "red", marginRight: 15 }}
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
      />
    </div>
  );
};

export default HomeScreen;
