import React from 'react';
import './seasonDisplayStyles.css';

const seasonDetails = {
    summer : {
        message : 'Let\'s hit the beach!', 
        iconName : 'sun'
    }, 
    winter : {
        message : 'Brrr! It\'s cold outside', 
        iconName : 'snowflake'
    }
}


const determineSeason = (month, latitude) => {

    if(month > 2 && month < 10){

        return latitude < 0 ? 'winter' : 'summer';

    }else{

        return latitude < 0 ? 'summer' : 'winter';

    }

}


const SeasonDisplay = props => {


    const season = determineSeason(new Date().getMonth(), props.latitude);

    return (
        <div className={`seasonDisplay ${season}`}>
            <i className={`icon massive icon-left ${seasonDetails[season].iconName}`}></i>
            <p className="message">{seasonDetails[season].message}</p>
            <i className={`icon massive icon-right ${seasonDetails[season].iconName}`}></i>
        </div>
    );

}

export default SeasonDisplay;