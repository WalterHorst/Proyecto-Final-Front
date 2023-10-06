import Card from "../Card/Card";
import { useEffect, useState } from "react";
import style from "./cards.module.css";
import PuffLoader from "react-spinners/PuffLoader";

const Cards = ({ products }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (products.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [products]);
    console.log('productos Card' + products);

    return(
        <div className={style["container"]}>
            <div className="row row-cols-4 g-4">             
                { dataLoaded 
                ? (
                    Array.isArray(products) &&  products.map((product) => {
                        return (
                            <Card
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                brand={product.brand}
                                description={product.description}
                                active={product.active}
                                stock={product.stock}
                            />
                        )
                    })
                    )
                : 
                <PuffLoader size={150} data-testid="loader" />
                }
            </div>
        </div>
    )
};

export default Cards;