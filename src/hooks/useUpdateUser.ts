import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { api } from '../services/api';
import { queryClient } from '../services/queryClient';

export type createUserFormData = {
  name: string;
  login: string
  email: string;
  password: string;
  password_confirmation: string;

}

type ErrorType = {
  title: string;
  details: string;
}


export function useUpdateUser(onSuccess?: () => {}, onError?: () => {}) {
  const toast = useToast()

  return useMutation(async (user: createUserFormData) => {
      const response = await api.put('edit', {
        ...user
      })
      return response.data.user;
  
    }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['user'])
      onSuccess?.()
    }, onError: (error: AxiosError<ErrorType>) => {
      
        onError?.()
        toast({
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  });
}
