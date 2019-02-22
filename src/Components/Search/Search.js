import React from 'react';
import Classes from './Search.css'

/*Input tags*/
const search=(props)=>{
    return(
        <div className={Classes.Search}>
            <input type='text' placeholder={props.placeholder} value={props.value} autoComplete="off" onChange={props.change}
            onKeyPress={props.keyPress}/>
        </div>
        
    )
}

export default search;