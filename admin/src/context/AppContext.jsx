import { createContext } from "react";


export const AppContext=createContext()

 const currencySymbol='₹'



const AppContextProvider=(props)=>{

  const calculateAge = (dob) => {
    const today = new Date();
    const birtDate = new Date(dob);
  
   
  
    let age = today.getFullYear() - birtDate.getFullYear();
    
  
    return age;
  }

  const months=["","Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]

  

  const slotDateFormat=(slotDate)=>{
    const dateArray=slotDate.split('_')
    return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2] 

  }

  


    const value={
        calculateAge,
        slotDateFormat,
        currencySymbol
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}



export default AppContextProvider