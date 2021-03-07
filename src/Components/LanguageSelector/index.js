import React from "react";

class LanguageSelector extends React.Component {

    render() {
        console.log(this.props.lang)
        return (<select name="lang" id="lang" defaultValue={this.props.lang} onChange={({ target: { value } }) => { this.props.onLanguageChange(value) }}>
            <option value="de">German</option>
            <option value="en">English</option>
        </select>);
    }

}

export default LanguageSelector;