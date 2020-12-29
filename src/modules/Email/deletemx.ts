// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_list
export interface DeleteMxParameters {
  domain: string;
  exchanger: string;
  priority: number;
}

import { execute } from './index';

export default (param: DeleteMxParameters) => {
  return execute({
    function: 'delete_mx',
    parameters: param
  });
};
