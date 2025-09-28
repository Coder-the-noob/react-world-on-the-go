import { Suspense } from "react";
import "./App.css";
import Countires from "./Components/Countries/Countires";

const coutriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())
  
function App() {
  return (
    <>
      <Suspense fallback={<p>Nadir vai Loading....</p>}>
        <Countires coutriesPromise={coutriesPromise}></Countires>
      </Suspense>
    </>
  );
}

export default App;
