import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <UserClass />
        {/* <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer> */}
        {/* <UserClass
          name={"First"}
          locality={"Nandyal(From Class)"}
          contact={"@rajeshdec(From Class)"}
        />
        <UserClass
          name={"second"}
          locality={"Nandyal(From Class)"}
          contact={"@rajeshdec(From Class)"}
        />
        <UserClass
          name={"3"}
          locality={"Nandyal(From Class)"}
          contact={"@rajeshdec(From Class)"}
        />
        <UserClass
          name={"4"}
          locality={"Nandyal(From Class)"}
          contact={"@rajeshdec(From Class)"}
        />
        <UserClass
          name={"5"}
          locality={"Nandyal(From Class)"}
          contact={"@rajeshdec(From Class)"}
        />  */}
      </div>
    );
  }
}

export default About;
