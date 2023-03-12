import React from "react";
import Styles from "./Card.module.css"

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Card: React.FC<CardProps>=({title,description,image})=>{
return (
    <div className={Styles["card"]}>
            <img src={`${image}`} className={Styles["card-image"]} />
            <div className={Styles["container"]}>
                <p className={Styles["title"]}>{title}</p>
                <span className={Styles["description"]}>{description}</span>
            </div>
        
        </div>
);
}

export default Card;