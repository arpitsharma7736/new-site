import React, { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the fetch function or your preferred method to fetch data from an API.
    fetch('https://api.example.com/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setData(result); // Update the state with the fetched data.
        setLoading(false); // Set loading to false when data is loaded.
      })
      .catch((error) => {
        setError(error); // Handle any errors that occur during data fetching.
        setLoading(false); // Set loading to false in case of an error.
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
    <section className="hero">
        <h2 className='con-head'>Welcome</h2>
        <p>Connecting Jat individuals and families for a brighter future.</p>
    </section>
    </>
  )
}

export default Home