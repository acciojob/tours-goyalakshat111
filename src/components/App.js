import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Tours from "./Tours";
import 'regenerator-runtime/runtime';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  async function getTours() {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://course-api.com/react-tours-project"
      );
      setTours(response.data);
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    getTours();
  }, []);

  function removeTour(id) {
    setTours(tours.filter((place) => place.id !== id));
  }

  if (loading) return <Loading />;

  if (tours.length == 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={getTours}>Refresh</button>
      </div>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
};

export default App;
