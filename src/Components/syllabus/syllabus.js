import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; 

import Hindi_ from '../../Assets/Hindi.pdf'
import PolSc_ from '../../Assets/PoliticalScienceRevised.pdf'
import Sociology_ from '../../Assets/Sociology.pdf'
import Education_ from '../../Assets/Education.pdf'
import DefenceStrategicStudies from '../../Assets/DefenceStrategicStudies.pdf'
import AncientHistory from '../../Assets/AncientHistory.pdf'
import FirstaidHealth from '../../Assets/FirstaidHealth.pdf'
import FoodNutritionHygiene from '../../Assets/FoodNutritionHygiene.pdf'
import Geography_ from '../../Assets/Geography.pdf'
import HomeScience from '../../Assets/HomeScience.pdf'

const Syllabus = () => {
    const [opt,setOpt] = useState(Geography_);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleSelect = (e) => {
        e.preventDefault();
        if(e.currentTarget.value == 'h')setOpt(Hindi_)
        if(e.currentTarget.value == 'sc')setOpt(Sociology_)
        if(e.currentTarget.value == 'dss')setOpt(DefenceStrategicStudies)
        if(e.currentTarget.value == 'ah')setOpt(AncientHistory)
        if(e.currentTarget.value == 'g')setOpt(Geography_)
        if(e.currentTarget.value == 'e')setOpt(Education_)
        if(e.currentTarget.value == 'ps')setOpt(PolSc_)
        if(e.currentTarget.value == 'fh')setOpt(FirstaidHealth)
        if(e.currentTarget.value == 'fhh')setOpt(FoodNutritionHygiene)
        if(e.currentTarget.value == 'hs')setOpt(HomeScience)
    }

    return ( 
        <React.Fragment>
            <select className="col-12" onChange = {handleSelect} className="select" style={{margin:"10px", height:"40px", width:"80%"}}>
                <option value="h">Hindi</option>
                <option value="sc">Sociology</option>
                <option value="dss">Defence Strategic Studies</option>
                <option value="ah">Ancient History</option>
                <option value="g">Geography</option>
                <option value="e">Education</option>
                <option value="ps">Political Science</option>
                <option value="fh">First aid Health</option>
                <option value="fhh">Food Nutrition Hygiene</option>
                <option value="hs">Home Science</option>
            </select>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer 
                fileUrl={opt}
                plugins={[defaultLayoutPluginInstance]} />
            </Worker>
            
        </React.Fragment>
     );
}
 
export default Syllabus;