import React from "react";
import Movie from "./movies";

export default class MoviesList extends React.Component{
    render () {
        return(
            <div className="container">
                <Movie/>
                <Movie/>
                <Movie/>

            </div>
        );
    }
}