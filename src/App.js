import axios from "axios";
import { useState, useEffect } from "react";

function App({ name }) {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    // console.log(data);
    const details = data.results[0];
    setDetails(details);
    console.log(details);
    console.log(details.phone);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <h2>Hii - Rajasekhar, from APP Component</h2>
      <p style={{ color: "blue" }}>Hii-{name}</p>
    </>
  );
}

export default App;
