import classes from "./Bascket.module.scss";
import { BsBasket3 } from "react-icons/bs";


const Bascket = () => {
    return (
        <div className={` fs-3 ${classes.basket} `}>
            <span>0</span>
            <BsBasket3 />
        </div>
    )
}

export default Bascket;