
import { Button, Form, Input, Typography, notification } from 'antd';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/actions/authAction';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';


const { Title, Text } = Typography;

type FieldType = {
    name?: string
    email?: string;
    password?: string;
    confirmPassword?: string;
    image?: string;
};

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
};


export function Signup() {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);


    const onFinish = (values: any) => {
        const data = {
            name: values.name,
            email: values.email,
            password: values.password,
            image: values.image ?? "",
        }
        signUp(dispatch, data).then(() => {
            notification.success({
              message: "You have been sign up successfully!",
              icon: (
                <CheckCircleOutlined className="done" />
              )
            })
            navigate('/')
        }).catch((error) => {
            notification.error({
              message: `Could not sign up. Please try again!`,
              description: ` ${error?.response?.data?.detail}`,
              icon: (
                <WarningOutlined className='warning' />
              )
            })
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not sign up. Please try again!`,
            description: ` ${errorInfo}`,
            icon: (
                <WarningOutlined className='warning'/>
            )
        })
    };

    useEffect(() => {
        if(isAuthenticated === true){
            navigate('/')
        }
    },[isAuthenticated])

    return (
        <div className={styles.container}>
            <div className={styles.center}>

                <Title level={3} className={styles.title}>SIGN UP</Title>

                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder='Type your name'/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Type your email'/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Type your password'/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="confirmPassword"
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
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder='Confirm your password'/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Image"
                        name="image"
                        rules={[{ required: false, message: 'URL Image' }]}
                    >
                        <Input placeholder='Type image url'/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={styles.button} htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>

                <div className={styles.have_account}>
                    <Text>Have a account!</Text>
                    <Text onClick={() => navigate('/sign_in')} className={styles.fix_text}>Sign Up</Text>
                </div>
            </div>
        </div>
    )
}
