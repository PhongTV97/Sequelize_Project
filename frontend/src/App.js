import "./App.css";
import React, { useEffect } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { testApi } from "./services";

function App() {
  useEffect(() => {
    Promise.all([testApi()]).then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <DatePicker />
    </div>
  );
}

export default App;
