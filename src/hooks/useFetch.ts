import { useState, useEffect } from "react";
import { Quizzes} from '../types/data.type.quizz';
const useFetch = () => {
  const [dataQuizz, setDataQuizz] = useState<Quizzes>({quizzes:[]});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {

      setTimeout(async () => {
        try {
          const response = await fetch("./data.json");
          const result = await response.json();
          if (!response.ok) throw new Error("Error al obtener los datos");
          setDataQuizz(result);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    };
    fetchData();
    console.log(dataQuizz) 
  }, []);

  return {
    dataQuizz,
    loading,
    error
  }
};

export default useFetch