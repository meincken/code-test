import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Category(props) {
  let { slug } = useParams();
  const [data, setData] = useState({ meals: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let filter = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;
    const fetchData = async () => {
      const result = await axios(`${filter}${slug}`);
      setData({ meals: result.data });
      setLoading(false);
    };
    fetchData();
  });

  return (
    <>
      <Link to="/">Home</Link>
      {loading && <div>loading....</div>}
      {!loading && (
        <>
          {data.meals.meals.map((item, index) => (
            <Link to={`/recipe/${item.idMeal}`} key={index.toString()}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <h2>{item.strMeal}</h2>
            </Link>
          ))}
        </>
      )}
    </>
  );
}

export default Category;
