import { useSwiper } from "swiper/react";

import classes from "./Button.module.scss";

import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Button = () => {

    const swiper = useSwiper();

    return (
        <div>
            <BiRightArrowAlt className={classes['arrow-prev']} onClick={() => swiper.slidePrev()} />

            <BiLeftArrowAlt className={classes['arrow-next']} onClick={() => swiper.slideNext()} />
        </div>
    )

}

export default Button;