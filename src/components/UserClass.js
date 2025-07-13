import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      userInfo: {
        name: "........",
        location: "invalid",
      },
    };
    console.log(" Child Constructor");
  }

  async componentDidMount() {
    console.log(" Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/rajeshlru");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("Child Render");
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div id="UserCardClass">
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increment
        </button>
        <h2>count2:{this.state.count2}</h2> */}
        <div className="flex flex-col items-center w-auto h-[80%]  mt-10 ">
          <div className="border-[3px] border-red-500 flex flex-col  items-center w-[47%] rounded-2xl ">
            <img
              src={avatar_url}
              className="rounded-[40px] w-[38%]  h-70 mt-14"
            />
            <h2 className="font-bold text-2xl"> {name}</h2>
            <div className="">
              <a
                href="https://github.com/rajeshlru"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl  m-3 mb-0   bg-[#24292fd3] text-white rounded-md hover:bg-[#1b1f23]"
                />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-e-97ba6b356/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl text-blue-500 hover:text-blue-800 m-3 mb-0 "
                />
              </a>
            </div>
            <div className="w-[93%] border-0 h-[40%] my-10 bg-[#F1F1F1] p-5 rounded-2xl">
              <p className="font-sans text-[18px] ">
                Hello, I’m Rajesh. I developed this Food Delivery Application as
                part of my learning and practice. Unlike typical approaches that
                rely on Create React App, I built this project using the Parcel
                bundler, allowing for greater customization and performance
                optimization. What sets this project apart is that it does not
                use any static or hardcoded data. Instead, I integrated
                real-time APIs from Swiggy to fetch and display live data,
                ensuring a dynamic and realistic user experience. Additionally,
                I ensured code reliability and functionality by thoroughly
                testing the application using Jest and React Testing Library.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserClass;
