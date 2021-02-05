import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Category(props) {
  let { id } = useParams();
  const [data, setData] = useState({ meals: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let filter = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
    const fetchData = async () => {
      const result = await axios(`${filter}${id}`);
      setData({ meals: result.data });
      setLoading(false);
    };
    fetchData();
  });

  return (
    <>
      {loading && <div>loading....</div>}
      {!loading && (
        <>
          {data.meals.meals.map((item, index) => (
            <>
              <Link to={`/categories/${item.strCategory}`}>
                Back to Category
              </Link>
              <article key={index.toString()}>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <h2>{item.strMeal}</h2>
                <p>{item.strInstructions}</p>
              </article>
            </>
          ))}
        </>
      )}
    </>
  );
}

export default Category;
