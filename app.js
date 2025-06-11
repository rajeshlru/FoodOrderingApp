const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            { id: "one" },
            "I'm an h1 tag"
        ), React.createElement(
            "h2",
            { id: "one" },
            "Im an h2 tag!"
        ), React.createElement(
            "h3",
            { id: "one" },
            "I'm h3 tag!"
        )]
    ), React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            { id: "one" },
            "I'm h1 tag"
        ), React.createElement(
            "h2",
            { id: "one" },
            "Im an h2 tag!"
        ), React.createElement(
            "h3",
            { id: "one" },
            "Im an h3 tag!"
        )]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from appending";
const root2 = document.getElementById("root2");
root2.appendChild(heading);
// Episode 1 is Completed!!



