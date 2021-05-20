import React from "react";

const Home = () => {
  const [test, setTest] = React.useState("");

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then(({ msg }) => setTest(msg));
  }, []);

  return (
    <main className="container">
      <h1>{test}</h1>
    </main>
  );
};

export default Home;
