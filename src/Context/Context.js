
import React, { useReducer, useContext } from "react";

import {WeatherReducer} from './Reducer';



const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children})=>{

    const [state, dispatch] = useReducer(WeatherReducer, {
        city:{
					    "city": "Барнаул",
    					"population": "632.4",
    					"lat": "53.3479968",
    					"lng": "83.7798064",
    					"admin_name": "Алтайский край",
    					"iso2": "RU-ALT",
    					"federal_district": "Сибирский",
    					"okato": "1401000000",
    					"oktmo": "1701000001",
    					"kladr_id": "2200000100000",
    					"fias_id": "d13945a8-7017-46ab-b1e6-ede1e89317ad"

          },
          current:'',
          daily:''
    })

    
    //const APIKEY = ''
    return (
        <WeatherAPPContext.Provider value={{state, dispatch}} >
            {children}
        </WeatherAPPContext.Provider>
    )
}

export default WeatherAPPProvider;

export const UseWeatherAppContext = ()=>{
    return useContext(WeatherAPPContext);
}