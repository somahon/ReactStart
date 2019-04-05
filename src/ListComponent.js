import React from "react";

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data.map((val, index) => {
                    return <ListItemComponent key={index} txt={val}/>
                })
                }
            </div>
        )
    }
}


class ListItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.txt}</div>
        );
    }
}


export default ListComponent;