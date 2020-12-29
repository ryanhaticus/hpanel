// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_filter
export interface DeleteFilterParameters {
  account: string;
  filtername: string;
}

import { execute } from './index';

export default (param: DeleteFilterParameters) => {
  return execute({
    function: 'delete_filter',
    parameters: param
  });
};
