import React, {useState} from 'react'
import {ReactComponent as Like} from "../assets/like.svg"
import {ReactComponent as Dislike} from "../assets/dislike.svg"
const LikeButtons = () => {
    const [likeState, setLikeState] = useState<boolean>(false)
    const [dislikeState, setDislikeState] = useState<boolean>(false)
    const toggleLikeState = (buttonType: "like" | "dislike") => {
        if(buttonType === "like"){
            setLikeState(true)
            setDislikeState(false)
        }
        else{
            setLikeState(false)
            setDislikeState(true)
        }
    }
    return ( <>
        <Like onClick={() => toggleLikeState("like")} className={`${likeState ? 'stroke-current fill-pink-600' : ''} h-7 transition-all duration-100 hover:scale-110 `}/> 
    <Dislike onClick={() => toggleLikeState("dislike")} className={`${dislikeState ? 'stroke-current fill-indigo-500' : ''} h-7 transition-all duration-100 hover:scale-110`}/>
    </> );
}
 
export default LikeButtons;