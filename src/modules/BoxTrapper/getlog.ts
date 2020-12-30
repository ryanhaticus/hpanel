// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_log
export interface GetLogParameters {
  email: string;
  date?: string;
}

import { execute } from './index';

export default (param: GetLogParameters) => {
  return execute({
    function: 'get_log',
    parameters: param
  });
};
