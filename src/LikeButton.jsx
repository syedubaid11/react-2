import { useState } from "react";

export default function LikeButton (){
    let [isLiked, setIsLiked] = useState(false);
    let ToggleLike = () => {
        console.log("toggle krde");
    };
return (
    <div>
        <p onClick={ToggleLike}>
            {isLiked.toString()}
            <i className="fa-regular fa-heart"></i>
         </p>
    </div>
);
}   