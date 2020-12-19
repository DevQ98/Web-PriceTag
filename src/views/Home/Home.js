import React, {Component } from 'react';
import '../../App.css';
import Banner from '../../components/layout/Banner.js';
import '../../assets/css/Home.css';
import { connect } from 'react-redux';
import { addSize, ChangeStatusNav } from '../../actions/designAction.js'
import HomePage from './HomePage';

class HomeCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount(){
        this.props.addSize(12)
        this.props.ChangeStatusNav(false)
        console.log("aa",this.props)

    }

    render() {
        return (
            <>
                <Banner></Banner>
                <HomePage></HomePage>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        Info: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSize: changeSize => {
            dispatch(addSize(changeSize));
        },
        ChangeStatusNav: status => {
            dispatch(ChangeStatusNav(status));
        },
    };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeCom);
export default Home;

