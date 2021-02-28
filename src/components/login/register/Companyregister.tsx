import React from "react";
import { createUseStyles } from "react-jss";
import { Button, Form, Input, Select } from 'antd';


const useStyles = createUseStyles({
  mainWrapper: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#6665ff",
    
  },
  formWraper: {
    background:"#666fff",
    border: "2px solid blue",
    padding: "20px",
  
  },
  name:{
      display:"flex",
  },
  firstname: {

  },
  LastName: {

  },
  useremail: {

  },
  Password: {

  },
  Confirmpassword: {

  },
  phonenumber:{
    
  },
  button: {
    color: "red",
    backgroundColor: "#5e85ff",
    
  }
})

const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="977">+977</Option>
    </Select>
  </Form.Item>
);


const Companyregister = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainWrapper}>
        <h1 style={{color: "red"}}> Sign Up  </h1>
        <h3 style={{color: " #fca500"}}> It's Easy and Quick </h3>
        <Form className={classes.formWraper} 
        initialValues={{
          prefix: '977'
        }}>
          <div className={classes.name}>
          <div className={classes.firstname}>
            <Form.Item
              name="firstname"
              label="Firstname"
              rules={[
                {
                  message: 'The input is not valid FirstName!',
                },
                {
                  required: true,
                  message: 'Please input your Firstname',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div className={classes.LastName}>
            <Form.Item
              name="LastName"
              label="Lastname"
              rules={[
                {
                  message: 'The input is not valid LastName!',
                },
                {
                  required: true,
                  message: 'Please input your LastName',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          </div>

          <div className={classes.useremail}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <div className={classes.Password}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <div className={classes.Confirmpassword}>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <div className={classes.phonenumber}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
          </div>

          <Button className={classes.button} type="dashed"> Register!!! </Button>
        </Form>
      </div>
    </>
  )
}
export default Companyregister;


