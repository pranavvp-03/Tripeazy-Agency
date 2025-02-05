import Agency from "../model/agencyModel"


const registerAgency = async (req,res)=>{
      const {companyName,email,password,confirmPassword,contactNumber,nameOfManager,registrationId,
        contry,state,district} = req.body
    try{

        
   
        const agency= new Agency({
          con
        })
  
     
    }catch(error){

    }
   
      
}
export default registerAgency