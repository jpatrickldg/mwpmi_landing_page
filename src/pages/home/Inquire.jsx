import React from "react";
import "./Inquire.scss";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";

const { Option } = Select;

const Inquire = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const formattedValues = {
      ...values,
      move_in_date: values.move_in_date.format("YYYY-MM-DD"),
    };
    console.log(formattedValues);
  };
  return (
    <section class="inquire" id="inquire">
      <div class="inquire-content">
        <h3>Inquire Now</h3>
        <Form
          className="inquiry-form"
          form={form}
          layout="vertical"
          requiredMark={false}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The email you enter is not valid",
              },
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contact_no"
            label="Contact No."
            rules={[
              {
                required: true,
                message: "Please enter your contact number",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select your gender",
                whitespace: true,
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="location_preference"
            label="Preferred Location"
            rules={[
              {
                required: true,
                message: "Please select your preferred location",
              },
            ]}
          >
            <Select placeholder="Please select your preferred location">
              <Option value="Recto">Recto</Option>
              <Option value="Espana">Espana</Option>
              <Option value="Tacio">Tacio</Option>
              <Option value="Vicente Cruz">Vicente Cruz</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="room_type"
            label="Accomodation"
            rules={[
              {
                required: true,
                message: "Please select your preferred type of accomodation",
              },
            ]}
          >
            <Select placeholder="Please select your preferred type of accomodation">
              <Option value="bedspace">Bedspace</Option>
              <Option value="studio">Studio Apartment</Option>
              <Option value="boarding house">Boarding House</Option>
              <Option value="condo empty">Condo - Empty</Option>
              <Option value="condo fully-furnished">
                Condo - Fully Furnished
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="move_in_date"
            label="Move-in Date"
            rules={[
              {
                type: "object",
                required: true,
                message: "Please select your target move-in date",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Inquire;

// create_table "inquiries", force: :cascade do |t|
// t.string "email", null: false
// t.string "first_name", null: false
// t.string "last_name", null: false
// t.string "gender", null: false
// t.string "contact_no", null: false
// t.string "occupation", null: false
// t.string "location_preference"
// t.string "room_type"
// t.date "move_in_date"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.boolean "contract_signed", default: false
// t.string "processed_by"
// t.integer "status", default: 0
// end
