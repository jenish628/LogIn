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
    background: "#BFBB0A",
    
  },
  formWraper: {
    background:"#EEF0F2 ",
    border: "2px solid #9e9b09 ",
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
  h1:{
    color:"red",
  },
  button: {
    color: "red",
    backgroundColor: "#1b9aaa",

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


const Userregister = () => {
  const classes = useStyles();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values); 
  };
  return (
    <>
  
      <div className={classes.mainWrapper}>
        <h1 style={{ color:"red"}}> Sign Up  </h1>
        <h3 style={{ color:"5fa778"}}> It's Easy and Quick </h3>
        <Form 
        className={classes.formWraper} 
        initialValues={{ prefix: '977'}}
        onFinish={onFinish}
        >
         
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

          
            <Form.Item
             className={classes.useremail}
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
          

            <Form.Item
              name="password"
              className={classes.Password}
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
          
            <Form.Item
              name="confirm"
              className={classes.Confirmpassword}
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
      

          <div>
            <Form.Item
              name="phone"
              className={classes.phonenumber}
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
          </div>

          <Button 
          className={classes.button} 
          type="dashed"
          htmlType="submit">
            Register!!! 
            </Button>
        </Form>
      </div>
    </>
  )
}
export default Userregister;