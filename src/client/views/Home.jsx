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
          <img src="../assets/img/bestbuy.jpg" alt="Test" />
         
          <h5 className="tagLine">"We're still a thing!</h5>
        </div>
      </div>
    </main>
  );
};

export default Home;
