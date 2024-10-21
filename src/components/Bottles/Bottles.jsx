import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css"
import { addToLs } from "../../utilites/localstorages";


const Bottles = () => {
    const[bottles, setBottles]= useState([])
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handelAddToCArd = bottle => {
       const NewCart = [...cart,bottle]
       setCart(NewCart)
       addToLs(bottle.name)
    }

    return (
        <div>
            <h2>Bottle Available:{bottles.length}</h2>
            <h4>Cart :{cart.length}</h4>
           <div className="bottle-container">
           {
                bottles.map(bottle => <Bottle 
                    key={bottle.id}
                    bottle ={bottle}
                    handelAddToCArd={handelAddToCArd}
                ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;