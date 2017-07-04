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

// function TabContent(props) {
//   return (
//     <div>
//       <TabItem1 />
//       <TabItem2 />
//     </div>
//   );
// }

function TabContent(props) {
  // const currentItem = props.pr_currentItem;
  return (
    <div>{props.pr_currentItem}</div>
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
      ],
      currentItem: 'tab7'
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
    // const stateCurrentItem = this.state.currentItem;
    return (
      <div>

      <nav className="tabs1-01">
      {this.state.items.map((i) =>
        <div className="tabs" key={i.tabName}>
        {i.tabName}
        </div>
        )}
      </nav>
      <TabContent pr_currentItem={this.state.currentItem} />

      </div> 
      );
    }  
}

ReactDOM.render(
  <Tabs />,
  document.getElementById('root')
);