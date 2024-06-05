import { useToast } from "@chakra-ui/react";
import { type } from "os";
import { useMutation } from "react-query";
import { api } from "../services/api";
import { queryClient } from '../services/queryClient';
import { error } from "console";
import { AxiosError } from "axios";
import SignIn from '../pages/index';





export type signIn = {
  name: string,
  login: string,
  email: string,
  password: string,
  password_confirmation: string;
}


type ErrorType = {
  title: string,
  details: string
}

export function useSignIn(onSuccess?: ()=> {}, onError?: ()=>{}){
  const toast = useToast()

  return useMutation(async (user: signIn)=>{
    const response = await api.post('endpoint', {
      ...user
    })
    return response.data.user;
  },{
    onSuccess: async ()=> {
      await queryClient.invalidateQueries(['user'])
      onSuccess?.()
    }, onError: (error: AxiosError<ErrorType>)=>{
      onError?.()

      toast({
        title: error.response?.data.title,
        description: error.response?.data.details,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  });
}

