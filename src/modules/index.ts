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

export const mexecute = async (ep: ModuleEP) => {
  const response = await instance.axios.get(
    `${ep.module}/${ep.functionEP.function}`,
    {
      params: {
        ...(ep.functionEP.parameters != undefined
          ? ep.functionEP.parameters
          : {})
      }
    }
  );
  return response;
};
