import { useState, useEffect } from 'react';

const AreaProgressChart = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
        const fetchData = async () => {
          try 
          {
            const response = await fetch('http://localhost:8000/api/v1/advisor/list-of-plans-with-more-subscriptions', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              credentials: 'include'
            })
            if (!response.ok) {
              throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setProgressData(data.plans);
          }
    
          catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      console.log("Ye le bhadwe:", progressData);
  return (

     <div className="progress-bar" style={{backgroundColor:"#ffffff"}}>
       <div className="progress-bar-info">
         <h4 className="progress-bar-title">Most Sold Plans</h4>
       </div>
       <div className="progress-bar-list">
          {progressData.map((progressData) => {
           return (
             <div className="progress-bar-item" key={progressData._id}>
               <div className="bar-item-info">
                 <p className="bar-item-info-name">{progressData._id}</p>
                 <p className="bar-item-info-value">
                   {progressData.noOfSubscription}
                 </p>
               </div>
               <div className="bar-item-full">
                 <div
                   className="bar-item-filled"
                   style={{
                     width: `${progressData.noOfSubscription*20}%`,
                   }}
                 ></div>
               </div>
             </div>
           );
         })} 
       </div>
     </div>
  );
};

export default AreaProgressChart;
