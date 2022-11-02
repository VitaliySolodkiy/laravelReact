import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import AuthUserContext from '../../contexts/AuthUserContext';

const Registration = () => {

    const [authUser, setAuthUser] = useContext(AuthUserContext);

    return (

        <div className="container ">
            <h2 className="my-3">Registration</h2>
            {authUser
                ? <h3>You are already logged in!</h3>
                : <Form name="login" className="w-50">
                    <Form.Item label="Name" name="name" rules={[{ required: true }, { len: 3 }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true }, { type: 'email' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                        <Input.Password />
                    </Form.Item>

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
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType="submit" type="primary">Log in</Button>
                    </Form.Item>
                </Form>
            }
        </div>
    );
}

export default Registration;
