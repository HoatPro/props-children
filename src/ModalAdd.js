import React from 'react';
import { Form,Modal,Input,Button} from 'antd';
const FormItem=Form.Item;
const ModalAdd = Form.create()(
    class extends React.Component {
        
  handleCancel = () => {
    const {visible}=this.props;
    this.props.closeModal(!visible)
  }

  handleCreate = () => {
    const {visible}=this.props;
    console.log(visible)
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
    });
    this.props.closeModal(!visible);
  }
      render() {
        const { visible} = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
          <Modal
            visible={visible}
            title="Tạo Modal"
            okText="Thêm"
            footer={false}
          >
            <Form layout="vertical">
              <FormItem label="Title">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem label="Description">
                {getFieldDecorator('description')(<Input type="textarea" />)}
              </FormItem>
              <Button onClick={this.handleCreate} type="primary" >Lưu</Button>&nbsp;    
              <Button onClick={this.handleCancel} type="danger" >Hủy</Button>      
            </Form>
          </Modal>
        );
      }
    }
  );
export default ModalAdd;