import React, { Component } from 'react';
import Select from 'react-select';
import { changeSize } from  '../../../actions/designAction'
import {Price} from '../../../reducers/Price'
import { connect } from 'react-redux';

const options = [
    { value: '2', label: '2' },
    { value: '4', label: '4' },
    { value: '6', label: '6' },
    { value: '8', label: '8' },
    { value: '10', label: '10' },
    { value: '12', label: '12' },
    { value: '14', label: '14' },
    { value: '16', label: '16' },
    { value: '18', label: '18' },
    { value: '20', label: '20' },
    { value: '24', label: '24' },
    { value: '28', label: '28' },
    { value: '32', label: '32' },
    { value: '36', label: '36' },
    { value: '40', label: '40' }
]
class FontSize extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontSize: 24
        }

    }   

    addSize =  ( event) => {
         this.props.changeSize( this.props.isActive , event.value )
        console.log( event.value , this.props.isActive ,"props font size ")
        // // this.setState({
        // //     fontSize: event.value

        // // });
        // // this.props.setSizes(event.value)
        // // this.props.onChange(event.value)
        // this.props.changeSize(this.props.Price.isActive , event.value )

    }

    render() {
        return (

            <section >
                <Select classNamePrefix="Font" style=" minWidth  :120px " onChange={this.addSize} options={options} placeholder="16" />
            </section>
        );

    }
}

const mapStateToProps = state => {
    return {
        Price : state.Price,
    }
}

const mapDispatchToProps = dispatch => {
    return {

        changeSize : (id , transform) =>{
            dispatch(changeSize(id , transform))
        },
    };
};

export default FontSize = connect(mapStateToProps, mapDispatchToProps)(FontSize);


