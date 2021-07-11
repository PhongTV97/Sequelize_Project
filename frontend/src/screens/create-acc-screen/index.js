import React from "react";
import "./styles.scss";
import { IMAGE_PATH } from "../../common/constant";
import { Form, Input, Row, Col, Button } from "antd";

const CreateAccountScreen = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="create-acc-container">
      <div
        className="image-bg"
        style={{
          backgroundImage: `url(${IMAGE_PATH.BG_IMAGE})`,
        }}
      />
      <div className="form-login">
        <div className="title">
          <span>Đăng ký thành viên</span>
        </div>
        <div className="content">
          <Form
            // name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
          >
            <Row>
              <Col span={11}>
                <Form.Item
                  name="lastname"
                  rules={[{ required: true, message: "Hãy nhập họ của bạn!" }]}
                >
                  <span className="form-label">Họ</span>
                  <Input placeholder="Nhập họ" className="form-input" />
                </Form.Item>
              </Col>
              <Col span={2} />
              <Col span={11}>
                <Form.Item
                  name="firstname"
                  rules={[{ required: true, message: "Hãy nhập tên của bạn!" }]}
                >
                  <span className="form-label">Tên</span>
                  <Input placeholder="Nhập tên" className="form-input" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Hãy nhập địa chỉ email của bạn!" },
              ]}
            >
              <span className="form-label">Địa chỉ Email:</span>
              <Input
                placeholder="Nhập địa chỉ email của bạn"
                className="form-input"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Hãy nhập password của bạn!" },
              ]}
            >
              <span className="form-label">Mật khẩu :</span>
              <Input.Password
                placeholder="Nhập mật khẩu"
                className="form-input"
              />
            </Form.Item>
            <Button htmlType="submit" className="btn-submit">
              Đăng ký thành viên
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
