import { FunctionComponent } from "react";
import { Client } from "@notionhq/client";
import LineChart from "./components/LineChart";

const App: FunctionComponent = () => {
  return (
    <div className="bg-gray-200 h-full w-full">
      <LineChart></LineChart>
    </div>
  );
};

export default App;
