import "./styles/main.scss";

import RkTabs1 from "./RkTabs1_wrap.jsx";

function Home(props) {
  return (
    <div>
      <h2 className="item-id">RkTabs1-01</h2>
      <div className="row">
        <div className="col-sm-3">39</div>
        <div className="col-sm-9">
          <RkTabs1 />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);