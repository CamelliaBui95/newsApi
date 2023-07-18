import React, { Component } from 'react';

class Toggle extends Component {
    state = {
        label: "",
        toggle: false,
    }

    componentDidMount() {
        this.setState({ label: this.props.defaultLabel })
    }

    handleToggle = () => {
        const { defaultLabel, switchLabel } = this.props;
        let { toggle, label } = this.state;

        if (toggle)
            label = defaultLabel;
        else
            label = switchLabel;
        
        this.setState({
            label: label,
            toggle: !this.state.toggle
        })     
    }
    
    render() { 
        const styleButton = this.state.toggle ? { width: "105.56px", height: "37.6px" } : {};
        return (
          <button
            className="btn btn-primary"
            style={styleButton}
            type="button"
            data-toggle={this.props.dataType}
            data-target={"#" + this.props.dataTarget}
            aria-expanded="false"
            onClick={this.handleToggle}
          >
            {this.state.label}
          </button>
        );
    }
}
 
export default Toggle;
