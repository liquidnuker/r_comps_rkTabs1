import AsyncTabItem1 from './TabItem1_wrap.jsx';
import AsyncTabItem2 from './TabItem2_wrap.jsx';

function TabContent(props) {
  if (props.pr_tabContent === "item1") {
    return <AsyncTabItem1 />;
  }

  if (props.pr_tabContent === "item2") {
    return <AsyncTabItem2 />;
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
    let activeIndex = index;
    let state = this.state; // "this" remover
    
    state.items[activeIndex].isActive = true;      

    // remove activeTab
    if (state.activeTab !== activeIndex) {
      state.items[state.activeTab].isActive = false;

      // set current activeTab
      state.activeTab = activeIndex;
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

      <nav className="tabs1-01" role="tablist">
      {items.map((i, index) =>
        <div 
        className={ items[index].isActive ? 'active': '' } 
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
      <div className="tabs1-01_content">
        <TabContent pr_tabContent={this.state.tabContent} />
      </div>

      </div> 
      );
    }  
}
