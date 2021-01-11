import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ReactHintFactory from 'react-hint';
import 'react-hint/css/index.css';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaRegClone } from 'react-icons/fa';
import { HiTemplate } from 'react-icons/hi';
import { IoMdCloudUpload } from 'react-icons/io';
import { MdTexture } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentStamp, updateFrame, addElement } from '../../app/stampSlice';
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
    };

    const currentThis = this;
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
  handleHeightChange = (e) => {
    this.setState({ height: e.target.value });
  };
  handleWidthChange = (e) => {
    this.setState({ width: e.target.value });
  };

  handleLogin = () => {
    const copytemplateArray = Object.assign([], this.state.templateArray);
    setTimeout(() => {
      copytemplateArray.splice(this, 1);
    }, 1);

    copytemplateArray.push({
      h: this.state.height,
      w: this.state.width,
    });

    this.setState({
      templateArray: copytemplateArray,
    });
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
  handleFrameBGChange = (bg) => {
    this.props.updateFrame({ bg });
  };
  render() {
    const { profileImg } = this.state;
    let BG = this.state.color;
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
                    <span className="span_txt"> Dài</span>
                    <input
                      className="panel-size-input"
                      type="text"
                      value={this.state.height}
                      onChange={this.handleHeightChange}
                    ></input>
                  </div>
                  <div className="menu-content__size--width">
                    <span className="span_txt">Rộng</span>
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
                    onClick={this.handleLogin}
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
                        {this.state.height} x {this.state.width} px{' '}
                      </span>
                    </div>
                  );
                })}
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp1"
                    onClick={() => this.handleFrameChange('156', '156')}
                    data-id="1"
                  >
                    {' '}
                  </button>
                  <span> 56 x 56 px </span>
                </div>
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp2"
                    onClick={() => this.handleFrameChange('100', '100')}
                    data-id="1"
                  >
                    {' '}
                  </button>
                  <span> 100 x 100 px </span>
                </div>
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp3"
                    onClick={() => this.handleFrameChange('380', '250')}
                    data-id="1"
                  >
                    {' '}
                  </button>
                  <span> 800 x 500 px </span>
                </div>
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp4"
                    onClick={() => this.handleFrameChange('270', '480')}
                    data-id="1"
                  >
                    {' '}
                  </button>
                  <span> 700 x 800 px </span>
                </div>
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp5"
                    onClick={() => this.handleFrameChange('460', '380')}
                    data-id="1"
                  >
                    {' '}
                  </button>
                  <span> 600 x 800 px </span>
                </div>
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp6"
                    onClick={() => this.handleFrameChange('650', '750')}
                    data-id="1"
                  ></button>
                  <span> 650 x 750 px </span>
                </div>
                <div className="menu-content__template">
                  <button
                    className="btn__template stamp7"
                    onClick={() => this.handleFrameChange('500', '700')}
                    data-id="1"
                  >
                    {' '}
                  </button>
                  <span> 500 x 700 px </span>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
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

                {this.elementList.map((element) => (
                  <div key={element.id}>
                    <button className="btn__element" onClick={element.onClick} data-id={element.id}>
                      {element.name}
                    </button>
                  </div>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <div className="page">
                  <div className="container">
                    <h1 className="heading">Add your Image</h1>
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
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <div>
                  <div>
                    <BGComponent></BGComponent>
                  </div>
                  <div className="menu-content__template">
                    <button
                      className="btn__template stamp10"
                      onClick={() => this.handleFrameBGChange('')}
                      data-id="1"
                    >
                      <img className="navbar__left-logo" src="./images/01.jpg" />
                    </button>
                    <span> 500 x 700 px </span>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <div className="menu-content__request">
                  <input className="txt_decription" type="text" placeholder="Desciptions"></input>
                  <button type="button" className=" btn bnt__request">
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
    stamp: state.stamp.current,
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
