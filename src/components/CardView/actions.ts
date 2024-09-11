import { getCarData } from "../../api/getCars"
import { CarModel } from "./props"

//fazer uma solicitação para a api
export const loadCarData = async (id:number, setCarData:React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
    
    try{
       const response = await getCarData(id)
       setCarData(response);

    }catch(error){
        console.log("Erro ao buscar da api", error);
        setCarData(undefined);
    }
}

export const handlePreviousItem = async(carData:CarModel | undefined, setCarData:React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {

    try{
        let response;
        if(carData && carData?.id > 1){
            response = await getCarData(carData.id-1)
        }

        if(response){
            setCarData(response)
        }

    }catch (error){
        setCarData(undefined)
    }
}

export const handleNextItem = async(carData:CarModel | undefined, setCarData:React.Dispatch<React.SetStateAction<CarModel | undefined>>) => {
    
    
    try{
        let response;
        if(carData && carData?.id < 10){
            response = await getCarData(carData.id+1)
        }

        if(response){
            setCarData(response)
        }

    }catch (error){
        setCarData(undefined)
    }

}