// import React from "react";
// import ReactDOM from "react-dom";
function TabItem1(props) {
  return (
    <div>TabItem1</div>
  );
}

function TabItem2(props) {
  return (
    <div>TabItem2</div>
  );
}

function TabContent(props) {
  return (
    <TabItem1 />
    <TabItem2 />
  );
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          tabName: 'tab1'
        },
        {
          tabName: 'tab2'
        },
      ]
    };

    // binders
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
  }
  
  componentWillUnmount() {
    // abort
  }

  // methods  
  render() {
    return (
      <div>

      <nav className="tabs1-01">
      {this.state.items.map((i) =>
        <div className="tabs" key={i.tabName}>
        {i.tabName}
        </div>
        )}
      </nav>
      <TabContent />

      </div> 
      );
    }  
}

ReactDOM.render(
  <Tabs />,
  document.getElementById('root')
);