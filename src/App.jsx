import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hasChanged, setHasChanged] = useState(false);
  // useEffect(() => {
  //   function handleBeforeUnload(e) {
  //     e.preventDefault();
  //     e.returnValue = "";

  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => console.log("data", json));

  //     return e.returnValue;
  //   }
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [hasChanged]);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  }, [hasChanged]);

  const handleTabClosing = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log("data", json));
  };

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  function handleOnChange() {
    setHasChanged(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <div className="container">
        <h1>Hello World!!</h1>
        <form onChange={handleOnChange}>
          <label>First Name</label>
          <input type="text" name="firstName" />
          <label>Last Name</label>
          <input type="text" name="lastName" />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
