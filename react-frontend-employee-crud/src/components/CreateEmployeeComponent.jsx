import React, { Component } from "react";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
    };
    this.firstName = this.changeFirstNameHandler.bind(this);
    this.lastName = this.changeLastNameHandler.bind(this);
    this.emailAddress = this.changeEmailAddressHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  cancel(e) {
    this.props.history.push("/employees");
  }

  saveEmployee(e) {
    e.preventDefault();
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailAddressHandler(event) {
    this.setState({ emailAddress: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address: </label>
                    <input
                      placeholder="Email Address"
                      name="emailAdress"
                      className="form-control"
                      value={this.state.emailAddress}
                      onChange={this.changeEmailAddressHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveEmployee}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
