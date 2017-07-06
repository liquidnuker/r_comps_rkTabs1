import "./styles/main.scss";

import AsyncTabItem1 from './AsyncTabItem1.jsx';
import AsyncTabItem2 from './AsyncTabItem2.jsx';

function TabItem1(props) {
  return (
    <div>TabItem1</div>
  );
}

function TabContent(props) {
  if (props.pr_tabContent === "item1") {
    return <AsyncTabItem1 />;
  }

  if (props.pr_tabContent === "item2") {
    return <AsyncTabItem2 />;
  }  
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          tabName: 'item1',
          isActive: false
        },
        {
          tabName: 'item2',
          isActive: false
        },
      ],
      tabContent: 'item1',
      activeTab: 0
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
      tabContent: item
    }));
  }

  render() {
    return (
      <div>

      <nav className="tabs1-01">
      {this.state.items.map((i) =>
        <div key={i.tabName} 
        onClick={() => { this.changeTabItem(i.tabName) }}>
        {i.tabName}
        </div>
        )}
      </nav>
      <div className="tabs1-01_content">
        <TabContent pr_tabContent={this.state.tabContent} />
      </div>

      </div> 
      );
    }  
}

ReactDOM.render(
  <Tabs />,
  document.getElementById('root')
);