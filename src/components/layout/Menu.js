import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ReactHintFactory from 'react-hint';
import 'react-hint/css/index.css';
import { Button } from 'reactstrap';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaRegClone } from 'react-icons/fa';
import { HiTemplate } from 'react-icons/hi';
import { IoMdCloudUpload } from 'react-icons/io';
import { MdTexture } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentStamp, updateFrame, addElement } from '../../app/stampSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Design.css';
import '../../assets/css/Menu.css';
import BGComponent from '../../components/common/Picker/Color-PickerBG';
const ReactHint = ReactHintFactory(React);
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftOpen: true,
      nono: true,
      templateArray: [],
      color: '',
      files: [],
      name: '',
      value: '',
    };
    this.handleChangeValue = this.handleChangeValue.bind(this);

    const currentThis = this;
    this.templateList = [
      {
        id: 1,
        height: 141,
        width: 99,
        onClick: function () {
          currentThis.props.updateFrame({ height: 141, width: 99 });
        },
      },
      {
        id: 2,
        height: 77,
        width: 195,
        onClick: function () {
          currentThis.props.updateFrame({ height: 77, width: 195 });
        },
      },
      {
        id: 3,
        height: 100,
        width: 156,
        onClick: function () {
          currentThis.props.updateFrame({ height: 100, width: 156 });
        },
      },
      {
        id: 4,
        height: 100,
        width: 200,
        onClick: function () {
          currentThis.props.updateFrame({ height: 100, width: 200 });
        },
      },
    ];
    this.elementList = [
      {
        id: 1,
        name: 'Tên Sản Phẩm ',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Tên Sản Phẩm' });
        },
      },
      {
        id: 2,
        name: 'Giá Sản Phẩm',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Giá Sản Phẩm' });
        },
      },
      {
        id: 3,
        name: 'Hãng sản xuất',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Hãng sản xuất' });
        },
      },
      {
        id: 4,
        name: 'Chi tiết sản phẩm',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Chi tiết sẩn phẩm' });
        },
      },
      {
        id: 5,
        name: 'Thông tin trả góp',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Thông tin trả góp' });
        },
      },
      {
        id: 6,
        name: 'Mã sản phẩm',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Mã sản phẩm' });
        },
      },
      {
        id: 7,
        name: 'QR',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'QR' });
        },
      },
      {
        id: 8,
        name: 'Tình trạng',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Tình trạng' });
        },
      },
      {
        id: 9,
        name: 'Ngày áp dụng',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Ngày áp dụng' });
        },
      },
      {
        id: 10,
        name: 'Khuyến mãi',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Khuyến mãi' });
        },
      },
      {
        id: 11,
        name: 'Trả góp 1',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Trả góp 1' });
        },
      },
      {
        id: 12,
        name: 'Trả góp 2',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Trả góp 2' });
        },
      },
      {
        id: 13,
        name: 'Trả góp 3',
        onClick: function () {
          currentThis.props.addElement({ id: new Date().getTime(), name: 'Trả góp 3' });
        },
      },
    ];
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({
      [key]: !this.state[key],
      leftOpen: !this.state.leftOpen,
    });
    this.props.setSides(key);
  };
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  handleChangeValue(event) {
    this.setState({ value: event.target.value });
  }
  handleHeightChange = (e) => {
    this.setState({ height: e.target.value });
  };
  handleWidthChange = (e) => {
    this.setState({ width: e.target.value });
  };
  handleLabelChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleAddLabelChange = () => {
    this.props.addElement({ id: new Date().getTime(), name: this.state.name });
  };
  handleChangeSizeTemplate = () => {
    this.props.updateFrame({ height: this.state.height, width: this.state.width });
  };
  state = {
    profileImg:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  handleFrameChange = (w, h) => {
    this.props.updateFrame({ w, h });
  };
  handleFrameBGChange = (bgImage) => {
    let bgSize = 'cover';
    this.props.updateFrame({ bgImage, bgSize });
  };
  handleSubmitRequest = () => {
    this.setState({ value: '' });
    toast('Gửi request thành công !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };
  render() {
    const { profileImg } = this.state;
    let heights = this.state.height;
    let widths = this.state.width;

    console.log(' State and Props of Menu ', this.props);

    return (
      <>
        <ReactHint autoPosition events delay />
        <Tab.Container defaultActiveKey="1">
          <div className="menu">
            <Nav className="menu__col">
              <Nav.Item className="menu__col-items " onClick={this.toggleSidebar}>
                <Nav.Link
                  eventKey="1"
                  className="menu__col-item "
                  data-rh="Templates"
                  data-rh-at="right"
                >
                  <HiTemplate />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="menu__col-items " onClick={this.toggleSidebar}>
                <Nav.Link
                  eventKey="2"
                  className="menu__col-item"
                  data-rh="Elements"
                  data-rh-at="right"
                >
                  <FaRegClone />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="menu__col-items" onClick={this.toggleSidebar}>
                <Nav.Link
                  eventKey="3"
                  className="menu__col-item"
                  data-rh="Unload"
                  data-rh-at="right"
                >
                  <AiOutlineCloudUpload />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="menu__col-items" onClick={this.toggleSidebar}>
                <Nav.Link
                  eventKey="4"
                  className="menu__col-item"
                  data-rh="Background"
                  data-rh-at="right"
                >
                  <MdTexture />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="menu__col-request" onClick={this.toggleSidebar}>
                <Nav.Link eventKey="5">
                  <span className="menu__item" data-rh="Request" data-rh-at="right">
                    <i className="fas fa-user-edit"></i>
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className={` menu__content--${this.props.visible}`}>
            <Tab.Content className="layout--none">
              <Tab.Pane eventKey="1" className="menu__template">
                <div className="menu-content__search">
                  <span className="icon__search">
                    {' '}
                    <i class="fa fa-search "></i>{' '}
                  </span>
                  <input
                    type="text"
                    className="panel-search-input"
                    autocomplete="off"
                    data-toggle="db-search-input"
                    placeholder="Search "
                  ></input>
                </div>
                <div className="menu-content__size">
                  <div className="menu-content__size--height">
                    <span className="span_txt"> Dài (mm)</span>
                    <input
                      className="panel-size-input"
                      type="text"
                      value={this.state.height}
                      onChange={this.handleHeightChange}
                    ></input>
                  </div>
                  <div className="menu-content__size--width">
                    <span className="span_txt">Rộng (mm)</span>
                    <input
                      className="panel-size-input"
                      type="text"
                      value={this.state.width}
                      onChange={this.handleWidthChange}
                    ></input>
                  </div>
                  <button
                    type="button"
                    className=" btn btn__create--template"
                    onClick={this.handleChangeSizeTemplate}
                  >
                    Create
                  </button>
                </div>
                {this.state.templateArray.map((tag, index) => {
                  return (
                    <div className="menu-content__template">
                      <button
                        className="btn__template stamp1"
                        onClick={() => this.handleFrameChange(heights, widths)}
                        data-id="1"
                      >
                        {' '}
                      </button>
                      <span>
                        {' '}
                        {this.state.height} x {this.state.width} mm{' '}
                      </span>
                    </div>
                  );
                })}
                {this.templateList.map((template) => (
                  <div className="menu-content__template">
                    <button
                      className={`btn__template stamp${template.id}`}
                      onClick={template.onClick}
                    />
                    <span>
                      {template.height} x {template.width} mm{' '}
                    </span>
                  </div>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="2" className="menu__template">
                <div className="menu-content__search">
                  <span className="icon__search">
                    {' '}
                    <i class="fa fa-search "></i>{' '}
                  </span>
                  <input
                    type="text"
                    className="panel-search-input"
                    autocomplete="off"
                    data-toggle="db-search-input"
                    placeholder="Search"
                  ></input>
                </div>
                <div className="menu-content__size--label">
                  <input
                    className="panel-size-input__left"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleLabelChange}
                  ></input>
                  <button
                    type="button"
                    className="  btn--addLabel"
                    onClick={this.handleAddLabelChange}
                  >
                    Add label
                  </button>
                </div>

                {this.elementList.map((element) => (
                  <div key={element.id}>
                    <button
                      className="btn__element stamp5"
                      onClick={element.onClick}
                      data-id={element.id}
                    >
                      {element.name}
                    </button>
                  </div>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="3" className="menu__template">
                <div className="page">
                  <h1 className="heading">Add Image</h1>
                  <div className="img-holder">
                    <img src={profileImg} alt="" id="img" className="img" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="image-upload"
                    id="input"
                    onChange={this.imageHandler}
                  />
                  <div className="label">
                    <label className="image-upload" htmlFor="input">
                      <IoMdCloudUpload className="upload__content-icon"></IoMdCloudUpload>
                    </label>
                  </div>

                  <Button
                    outline
                    color="primary"
                    className="btn__changleBG"
                    onClick={() => this.handleFrameBGChange(profileImg)}
                  >
                    {' '}
                    ChangeBG
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="4" className="menu__template">
                <div>
                  <div className="compact-picker">
                    <BGComponent></BGComponent>
                  </div>
                  <div className="menu-content__template">
                    <button
                      className="btn__template "
                      onClick={() => this.handleFrameBGChange('./images/01.jpg')}
                    >
                      <img className="navbar__left-logo" alt="" src="./images/01.jpg" />
                    </button>
                  </div>
                  <div className="menu-content__template">
                    <button
                      className="btn__template "
                      onClick={() => this.handleFrameBGChange('./images/02.jpg')}
                    >
                      <img className="navbar__left-logo" alt="" src="./images/02.jpg" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <div className="menu-content__request">
                  <input
                    className="txt_decription"
                    type="text "
                    value={this.state.value}
                    onChange={this.handleChangeValue}
                    placeholder="Desciptions"
                  ></input>
                  <button
                    type="button"
                    className=" btn bnt__request"
                    onClick={() => this.handleSubmitRequest()}
                  >
                    {' '}
                    Send Request
                  </button>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stamp: state.stamp.present.current,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCurrentStamp,
      updateFrame,
      addElement,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
