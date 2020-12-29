// EP stands for Execute Parameters

import { instance } from '../';

export interface FunctionEP {
  function: string;
  parameters: any;
}

export interface ModuleEP {
  module: string;
  functionEP: FunctionEP;
}

export interface FunctionResponse {
  failed: boolean;
  reason?: string;
  response: any;
}

export type FunctionCallback = (functionResponse: FunctionResponse) => void;

export const mexecute = (ep: ModuleEP, callback: FunctionCallback) => {
  instance.axios
    .get(`${ep.module}/${ep.functionEP.function}`, {
      params: {
        ...ep.functionEP.parameters
      }
    })
    .then((response) => {
      let data = response.data;
      callback({
        failed: !data.result,
        reason: data.reason,
        response: data
      });
    })
    .catch((error) => {
      let data = error.response.data;
      callback({
        failed: !data.result,
        reason: data.reason,
        response: data
      });
    });
};
