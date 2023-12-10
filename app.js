// how we create any tag by using javascript

const heading = document.createElement("h1");

heading.innerHTML = "Namaste Amit aapka swagat hai";

const root = document.getElementById("root");

root.appendChild(heading);

// how the same thing is done using react and reactDOM

const reactHeading = React.createElement(
  "h1",
  {
    id: "reactHeading",
    key: "3",
    className: "reactElements",
  },
  "React kaa content Namaste kar raha hai"
);

const subHeading = React.createElement(
  "div",
  {
    id: "subHead",
    key: "554",
    style: { color: "red" },
  },
  "Mai react ki Sub heading hu"
);

const container = React.createElement("div", {

},[reactHeading,subHeading]);

//react root is being created
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// the tag is rendered with the help of render api or method
reactRoot.render(container);
