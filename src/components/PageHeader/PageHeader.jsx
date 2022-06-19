import React from "react";
import "./PageHeader.css";



const PageHeader=({title})=>{
    return(
        <div className='teamheader-container flexbox'>
          <h2>{title}</h2>
        </div>
    )
}

export default PageHeader;