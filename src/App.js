import "./App.css";
import { useSelector } from "react-redux";
import NewComponent from "./NewComponent";

function App() {
  const { objectItems } = useSelector((state) => state.object);
  console.log({ objectItems: objectItems });
  return (
    <div className='App'>
      {objectItems.map((objectItem) => (
        <div key={objectItem.id}>
          {objectItem.count}
          <h2>{objectItem.name}</h2>
        </div>
      ))}
      <NewComponent></NewComponent>
    </div>
  );
}

export default App;
