import React from "react";

export default class Error extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { error, isError = false} = this.props;
        return (<>
            {isError && <p>{error}</p>}
        </>
        );
    }
}