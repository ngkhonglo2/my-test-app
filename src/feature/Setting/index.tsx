import { Button, Col, ColorPicker, DatePicker, Form, Input, Row } from "antd";
import LayoutPage from "../../components/Layout";
import { useState } from "react";

const SettingPage = () => {
  const { RangePicker } = DatePicker;
  const [isOpenButton, setIsOpentButton] = useState(false);

  const onValuesChange = (changedValues: any, allValues: any) => {
    if (!isOpenButton) {
      setIsOpentButton(true);
    }
  };

  const onFinish = (values: any) => {
    if (values.background_color === "#ffffff") {
      console.log("values submit: ", values);
    } else {
      const newValues = { ...values };
      console.log("values submit: ", newValues);
    }
    setIsOpentButton(false);
  };

  return (
    <LayoutPage>
      <div className="category">Settings</div>
      <div>
        <Form
          name="wrap"
          labelAlign="left"
          labelWrap
          colon={false}
          layout="vertical"
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Row>
            <Col className="gutter-row" span={12}>
              <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                  <Form.Item label="Title:" name="title">
                    <Input />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item
                    label="Email:"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Invalid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item name="background_color" label="Background color:">
                    <ColorPicker style={{ width: "100%" }} showText />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={12}>
                  <Form.Item label="Active date:" name="active_date">
                    <RangePicker />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          {isOpenButton && (
            <Form.Item label="">
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          )}
        </Form>
      </div>
    </LayoutPage>
  );
};

export default SettingPage;
