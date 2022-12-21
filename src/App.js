import React from "react";
import './App.css';
import {userListData} from "./user-list-data";
import Card from "./components/Card";

function App() {
    const result = userListData.map(data => (
        <Card
            key={data.id}
            id={data.id}
            title={data.title}
            body={data.body}
        />
    ))
  return (
      <div className="App">
          {result}
      </div>
  );
}

export default App;
