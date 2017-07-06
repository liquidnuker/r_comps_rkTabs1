import "./styles/main.scss";

// ok
// import {TabItem2} from "./TabItem2.jsx";
import AsyncTabItem2 from './AsyncTabItem2.jsx';

function TabItem1(props) {
  return (
    <div>TabItem1</div>
  );
}

// ok
// function TabItem2(props) {
//   return (
//     <div>TabItem2</div>
//   );
// }

// ok
// class TabItem2 extends React.Component {
//   render() {
//     return (
//       <div>TabItem2</div>
//     );
//   }
// }

function TabContent(props) {
  if (props.pr_currentItem === "tab1") {
    return <TabItem1 />;
  }

  if (props.pr_currentItem === "tab2") {
    return <AsyncTabItem2 />;
  }  
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