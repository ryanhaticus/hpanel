interface AddPopParameters {
  domain: string;
  email: string;
  password: string;
  quota?: number;
  send_welcome_email?: boolean;
}

import { FunctionResponse } from '..';
import { execute } from './index';

export default (param: AddPopParameters) => {
  execute(
    {
      function: 'addpop',
      parameters: param
    },
    (functionResponse: FunctionResponse) => {
      return functionResponse;
    }
  );
};
