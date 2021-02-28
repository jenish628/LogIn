import React from 'react';
import { Tabs } from 'antd';
import { createUseStyles } from "react-jss";
import { Form, Input, Button, Checkbox } from 'antd';

const { TabPane } = Tabs;

const useStyles = createUseStyles({
    mainWrapper: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#6656CC"
    },
    formWrapper: {
        minWidth: 400,
        margin: "0 auto"
    },
    formEmailWrapper: {
        margin: "10px 0"
    },
    formPasswordWrapper: {
        margin: "10px 0"
    },
    buttonWrapper: {
        margin: "10px 0",
        display: "flex",
        justifyContent: "center",
        "& button": {
            width: "90%",
            borderRadius: "10px"
        },
    },
    mainTab: {
        border: "2px solid #6656DD",
        boxShadow: "-6px -6px 10px 2px #4040dfe3",

        "& .ant-tabs-tab": {
            minWidth: "50% !important",
            display: "flex",
            justifyContent: "center",
        },

        "& .ant-tabs-nav-operations": {
            display: "none !important"
        },

        "& .ant-tabs-nav-list": {
            width: "100%"
        },


    },
    tabs: {

        boxShadow: "-6px -6px 10px 2px #4040dfe3"

    },
    password: {
        "& .ant-form-item-control-input-content": {
            display: "flex",
            justifyContent: "space-around",
        }
    },
    rememberme: {

    },
    forget: {

    },
    register: {
        display: "flex",
        justifyContent: "space-around",
    }
})
const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };


const Main = () => {
    const classes = useStyles();
    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
            <div className={classes.mainWrapper}>
                <Tabs className={classes.mainTab} type="card">
                    <TabPane className={classes.tabs} tab="USER LOGIN" key="1">
                        <div className={classes.formWrapper}>
                            <div className={classes.formEmailWrapper}>
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input
                                        placeholder="Please input your Username!"

                                    />
                                </Form.Item>
                            </div>
                            <div className={classes.formPasswordWrapper}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input.Password
                                        placeholder="Please input your Password!"
                                        type="password"
                                    />
                                </Form.Item>
                            </div>
                            <div className={classes.buttonWrapper}>
                                <Button type="primary">SIGN IN</Button>
                            </div>
                        </div>

                        <div className={classes.password}>
                            <Form.Item className={classes.rememberme}>
                                <Form.Item name="remember" valuePropName="checked" noStyle >
                                    <h3> <Checkbox> Remember Me </Checkbox>  </h3>
                                </Form.Item>
                                <h2> <a className={classes.forget} href="">
                                    Forgot Password!
                                </a>  </h2>
                            </Form.Item>
                        </div>
                        <div className={classes.register}>
                            <h4>Don't Have An Account ?? </h4>
                            <h2> <a href="/Userregister">  Register Now! </a> </h2>
                        </div>
                    </TabPane>


                    <TabPane className={classes.tabs} tab="COMPANY LOGIN" key="2">
                        <div className={classes.formWrapper}>
                            <div className={classes.formEmailWrapper}>
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input
                                        placeholder="Please input your Username!"

                                    />
                                </Form.Item>
                            </div>
                            <div className={classes.formPasswordWrapper}>
                                <Form.Item
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input.Password
                                        placeholder="Please input your Password!"
                                        type="password"
                                    />
                                </Form.Item>
                            </div>
                            <div className={classes.buttonWrapper}>
                                <Button type="primary">SIGN IN</Button>
                            </div>
                        </div>

                        <div className={classes.password}>
                            <Form.Item className={classes.rememberme}>
                                <Form.Item name="remember" valuePropName="checked" noStyle >
                                    <h3> <Checkbox> Remember Me </Checkbox>  </h3>
                                </Form.Item>
                                <h2> <a className={classes.forget} href="">
                                    Forgot Password!
                                </a>  </h2>
                            </Form.Item>
                        </div>
                        <div className={classes.register}>
                            <h4> Don't Have An Account ?? </h4>
                            <h2> <a href="/Companyregister">  Register Now! </a> </h2>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            </Form>        </>
    )
}
export default Main;