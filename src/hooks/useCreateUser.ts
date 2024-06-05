import { useToast } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
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

export function useCreateUser(onSuccess?: () => {}, onError?: () => {}) {

  const toast = useToast()

  return useMutation(async (user: createUserFormData) => {
    const response = await api.post('save', {
      ...user
    })

    return response.data.user;
  }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['save'])
      onSuccess?.()
    }, onError: (erro: AxiosError<ErrorType>) => {
      onError?.()

      toast({
        title: erro.response?.data.title,
        description: erro.response?.data.details,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  });
}