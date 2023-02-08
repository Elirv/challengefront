import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ProductCard } from '../ProductCard/ProductCard';
import "./container.css";

export const ProductsContainer = ({ addToCart, addWishlist }) => {

  const { memes } = useContext(UserContext)
console.log(memes);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? ""
    //console.log(searchParams)
  const handleInput = ({ target }) => {
    const { value } = target
    //console.log(value);
    setSearchParams({ query: value })
  }

  return (
    <>
      <input name='filter' type='text' value={query} placeholder='Search' onChange={handleInput} />
      <div className="container">
        {memes.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.img}
              />
            )
          })}
      </div>
    </>
  )
};