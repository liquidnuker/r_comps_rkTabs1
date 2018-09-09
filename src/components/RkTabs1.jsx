// optional dynamic import wrapper
// import AsyncTabItem1 from './TabItem1_wrap.jsx';
// import AsyncTabItem2 from './TabItem2_wrap.jsx';

import TabItem1 from './TabItem1.jsx';
import TabItem2 from './TabItem2.jsx';

function TabContent(props) {
  if (props.pr_tabContent === "item1") {
    return <TabItem1 />;
  }

  if (props.pr_tabContent === "item2") {
    return <TabItem2 />;
  }  
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          tabName: 'item1',
          isActive: true
        },
        {
          tabName: 'item2',
          isActive: false
        },
      ],
      tabContent: 'item1',
      activeTab: 0,
    };

    // binders
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
  }
  
  // methods  
  setActiveTab(index) {
    this.state.items[index].isActive = true;      

    // remove activeTab
    if (this.state.activeTab !== index) {
      this.state.items[this.state.activeTab].isActive = false;

      // set current activeTab
      this.state.activeTab = index;
    }
  }

  changeTabItem(item, index) {
    this.setActiveTab(index);
    
    this.setState(prevState => ({
      tabContent: item
    }));
  }

  render() {
    const items = this.state.items;
    return (
      <div>

      <nav className="rkTabs101" role="tablist">
      {items.map((i, index) =>
        <div 
        className={ items[index].isActive ? 'tabs active': 'tabs' } 
        key={i.tabName} 
        onClick={() => { this.changeTabItem(i.tabName, index) }}
        tabindex="0" 
        aria-posinset={index + 1} 
        aria-setsize={items.length}
        aria-selected={i.isActive}>
        {i.tabName}
        </div>
        )}
      </nav>
      <div className="row col-sm-12 rkTabs101_panels"
      aria-live="assertive" aria-atomic="true">
        <TabContent pr_tabContent={this.state.tabContent} />
      </div>

      </div> 
      );
    }  
}
