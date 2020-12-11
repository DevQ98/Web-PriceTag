import React, { Component } from "react";
import FontPicker from "font-picker-react";
 
export default class Font extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFontFamily: "Font ",
        };
    }
 
    render() {
        return (
            <div>
                <FontPicker
                    apiKey="AIzaSyD0vBECasMAi8S_6pd_GCpoNx2Bxp5LG1c"
                    activeFontFamily={this.state.activeFontFamily}
                    onChange={(nextFont) =>
                        this.setState({
                            activeFontFamily: nextFont.family,
                        })
                    }
                />
            </div>
        );
    }
}