import React from 'react';

class BasicInfo extends React.Component {
    render() {
        return (
            <div>name:{this.props.person.name} dob:{this.props.person.dob} number:{this.props.person.number}</div>
        )
    }
}

export default BasicInfo