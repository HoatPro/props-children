import React from 'react';

import './App.css';
import { Button } from 'antd';
import ModalAdd from './ModalAdd';
class App extends React.Component {
  state = {
    visibleApp: false,
  };
  showModal = () => {
    this.setState({ visibleApp: true });
  }
  closeModal=visible=>{
    console.log(visible);
    this.setState({
     visibleApp:visible
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Thêm</Button>
        <ModalAdd
          visible={this.state.visibleApp}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
