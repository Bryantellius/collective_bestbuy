import React from "react";

const App = () => {
  const [test, setTest] = React.useState("");

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then(({ msg }) => setTest(msg));
  }, []);

  return (
    <main className="container">
      <div>
        <h1>{test}</h1>
      </div>
    </main>
  );
};

export default App;
