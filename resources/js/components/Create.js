import React from 'react'
import ReactDom from 'react-dom'

export default class Create extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        axios.post('/api/users', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="col-md-8 offset-md-2">
                <h2 className="mt-3">Add New User</h2>
                <form action="" className="" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" className="form-control" value={this.state.name}
                               onChange={this.handleNameChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" className="form-control" value={this.state.email}
                               onChange={this.handleEmailChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" className="form-control"
                               value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>

                </form>
            </div>
        )
    }
}


if (document.getElementById('create')) {
    ReactDom.render(<Create/>, document.getElementById('create'))
}
