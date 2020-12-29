import { FunctionEP, mexecute, FunctionResponse, FunctionCallback } from '..';

export const execute = (ep: FunctionEP, callback: FunctionCallback) => {
  mexecute(
    {
      module: 'Email',
      functionEP: ep
    },
    (functionResponse: FunctionResponse) => {
      callback(functionResponse);
    }
  );
};
