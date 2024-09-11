import { CarModel } from "../components/CardView/props";
import { CAR_API_BASE_URL } from "../constants/car";

interface ApiResponse {
    cars: CarModel[]
}

export const getCarData = async(id:number): Promise <CarModel | undefined> => {
    try{
        const response = await fetch(CAR_API_BASE_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Converte a resposta para JSON
        const data:ApiResponse = await response.json(); 
        
     
        //Filtrar carro por id
        const carData = data.cars.find((car)=> car.id === id);
        
        return carData;

    } catch(error){
        console.log('Error ao consultar dados na api:', error);
        return undefined;
    }
}