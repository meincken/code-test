import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [data, setData] = useState({ categories: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData({ categories: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <div>loading....</div>}{" "}
      {!loading && (
        <>
          {data.categories.categories.map((item, index) => (
            <div key={index.toString()}>
              <Link to={`/categories/${item.strCategory}`}>
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                <h2>{item.strCategory}</h2>
              </Link>

              <p>{item.strCategoryDescription}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Home;
