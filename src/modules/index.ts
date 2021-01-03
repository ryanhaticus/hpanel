// EP stands for Execute Parameters

import { instance } from '../';

export interface FunctionEP {
  function: string;
  parameters?: any;
}

export interface ModuleEP {
  module: string;
  functionEP: FunctionEP;
}

export const mexecute = (ep: ModuleEP) => {
  return instance.axios
    .get(`${ep.module}/${ep.functionEP.function}`, {
      params: {
        ...(ep.functionEP.parameters != undefined
          ? ep.functionEP.parameters
          : {})
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data || 'Invalid authorization credentials';
    });
};
