import { useMutation } from "@tanstack/react-query"
import { PersonData } from "../interfaces/person-data"
import axios from "axios"

const postData = (data: PersonData) => {
    return axios.post("https://localhost:8080")
}

export function useIdentityMutation(){
    const { mutate, isLoading, isSuccess, isError } = useMutation({
       mutationFn: (data: PersonData ) => postData(data)
    })

    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}