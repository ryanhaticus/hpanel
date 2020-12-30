// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_status
export interface GetStatusParameters {
  email: string;
}

import { execute } from './index';

export default (param: GetStatusParameters) => {
  return execute({
    function: 'get_status',
    parameters: param
  });
};
