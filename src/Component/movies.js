import React from "react";
import CommentInput from "./comments";
import StarRating from "./star-rating";

export default class Movie extends React.Component {
   render(){
    return (
        <div className="card w-75">
            <div className="card-heder bg-primary text-white">
                Movie Name
            </div>
            <div className="card-body">
                This would describe all of the movie infomation
            </div>
            <div className="card-footer">

                <StarRating/>
                <CommentInput/>
            </div>
        </div>
    );
   }
}