import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
    const useSignIn = () => {
        const [authorize, result] = useMutation(AUTHORIZE);
      
        const signIn = async ({ username, password }) => {
            console.log(username, password)
        };
      
        return [signIn, result];
      };
};

export default useSignIn;