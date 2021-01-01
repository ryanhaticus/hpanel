// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Adelete_filter
export interface deleteFilterParameters {
  account: string;
  filtername: string;
}

import { execute } from './index';

export default (param: deleteFilterParameters) => {
  return execute({
    function: 'delete_filter',
    parameters: param,
  });
};
