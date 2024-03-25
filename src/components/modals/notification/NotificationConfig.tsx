import { Col, Flex, Modal, Row, Typography } from 'antd';
import styles from './style.module.scss';
import ButtonConfig from '../../button/ButtonConfig';
import { WarningOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface ModalProps{
    isOpen?: boolean;
    setIsOpen?: any;
    label_1?: string;
    label_2?: string;
    labelActionConfirm?: string;
    labelActionCancel?: string;
    handleActionConfirm?: () => void;
    handleActionCancel?: () => void;
}

export const NotificationConfig: React.FC<ModalProps> = ({
    isOpen,
    setIsOpen,
    label_1,
    label_2,
    labelActionCancel,
    labelActionConfirm,
    handleActionCancel,
    handleActionConfirm,
}) => {

    return (
        <>
            <Modal
                title={`${label_1}`}
                open={isOpen} 
                onCancel={() => setIsOpen(false)}
                width={700}
                className="ant_modal_warning"
                footer={null}
            >
                <div className={styles.container}>
                    <Flex 
                        className={styles.actions} 
                        style={{
                            margin: '20px'
                        }} 
                        justify={'center'} 
                        align={'center'}
                    >
                        <WarningOutlined className={styles.icon_warning} />
                        <Text 
                            type={'warning'}
                            style={{
                                fontSize: "20px"
                            }}
                        >{label_2}</Text>
                    </Flex>
                    <Row>
                        <Col span={12} offset={6}>
                            <Flex className={styles.actions} justify={'center'} align={'center'}>
                                <ButtonConfig 
                                    name={labelActionConfirm}
                                    onClick={handleActionConfirm}
                                    mr={5}
                                />
                                <ButtonConfig 
                                    name={`${labelActionCancel ?? 'Cancel'}`}
                                    background='red'
                                    onClick={handleActionCancel}
                                    ml={5}
                                />
                            </Flex>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    )
}