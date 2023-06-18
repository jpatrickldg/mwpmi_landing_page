import React, { useState } from "react";
import "./Inquire.scss";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  notification,
} from "antd";

import dayjs from "dayjs";

const { Option } = Select;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Inquire = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    const formattedValues = {
      ...values,
      birthdate: values.birthdate.format("YYYY-MM-DD"),
      move_in_date: values.move_in_date.format("YYYY-MM-DD"),
    };
    console.log(formattedValues);
    console.log(JSON.stringify(formattedValues));

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedValues),
      });

      if (response.ok) {
        notification.success({
          message: "Inquiry Sent",
          description:
            "Your inquiry has been sent and will be under review by our team. Kindly keep your lines open for us to contact you. Thank you.",
        });
        form.resetFields();
        scrollToTop();
      } else {
        notification.error({
          message: "Failed to Submit Inquiry",
          description:
            "There has been an error processing your inquiry. Kindly try again later.",
        });
      }
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Failed to Submit Inquiry",
        description:
          "There has been an error processing your inquiry. Kindly try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section class="inquire" id="inquire">
      <div class="inquire-content">
        <h3>Inquire Now</h3>
        <div className="form-map-container">
          <div className="map-container">
            <img
              src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.6435-9/116666476_3198372293565893_1471473275625836916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeF6xfg9QGCkI8ZtGD4F1Kc5OS6LJqR-rtc5LosmpH6u1zwrZsOJ5YY2_9a3ulHiG24&_nc_ohc=GG1CmXBrqv4AX92bTtn&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDcJeW0l0JtW2c6pwxWmO11nXZiy8uTzHvSgw7CZZbbZA&oe=64B4DC8F"
              alt=""
            />
          </div>
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
                {
                  pattern: /^09\d{9}$/,
                  message:
                    "Please enter a valid contact number starting with '09' and containing 11 digits",
                },
              ]}
            >
              <Input placeholder="(e.g. 09123456789)" />
            </Form.Item>
            <Form.Item
              name="birthdate"
              label="Date of Birth"
              rules={[
                {
                  type: "object",
                  required: true,
                  message: "Please select your date of birth",
                },
              ]}
            >
              <DatePicker />
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
              name="occupation"
              label="Occupation"
              rules={[
                {
                  required: true,
                  message: "Please select your occupation",
                  whitespace: true,
                },
              ]}
            >
              <Radio.Group>
                <Radio value="student">Student</Radio>
                <Radio value="reviewee">Reviewee</Radio>
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
              <DatePicker
                disabledDate={(current) =>
                  current && current.diff(dayjs(), "days") < 3
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </Form.Item>
          </Form>
        </div>
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
