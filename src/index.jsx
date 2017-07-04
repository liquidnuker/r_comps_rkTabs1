import "./styles/main.scss";

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
  if (props.pr_currentItem === "tab2") {
    return <TabItem2 />;
  }
  return <TabItem1 />;  
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
      ],
      currentItem: 'tab1'
    };

    // binders
    this.changeTabItem = this.changeTabItem.bind(this);
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
  }
  
  // methods  
  changeTabItem(item) {
    this.setState(prevState => ({
      currentItem: item
    }));
  }

  render() {
    return (
      <div>

      <nav className="tabs1-01">
      {this.state.items.map((i) =>
        <div className="tabs" key={i.tabName} 
        onClick={() => { this.changeTabItem(i.tabName) }}>
        {i.tabName}
        </div>
        )}
      </nav>
      <div className="tabs1-01_content">
        <TabContent pr_currentItem={this.state.currentItem} />
      </div>

      </div> 
      );
    }  
}

ReactDOM.render(
  <Tabs />,
  document.getElementById('root')
);