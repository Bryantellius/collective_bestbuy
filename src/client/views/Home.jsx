import React from "react";

const Home = () => {
  const [test, setTest] = React.useState("");

  React.useEffect(() => {
    fetch("/api/v1/test")
      .then((res) => res.json())
      .then(({ msg }) => setTest(msg));
  }, []);

  return (
    <main className="container">
      <div className="homePage">
        <div className="title">
          <h1>Best Buy</h1>
          <h5 className="tagLine">"We're still a thing!</h5>
          <hr />
          <img src="../assets/img/bestbuy.jpg" alt="Test" />
        </div>
      </div>
    </main>
  );
};

export default Home;
