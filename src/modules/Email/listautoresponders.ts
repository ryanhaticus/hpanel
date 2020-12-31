// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_auto_responders
export interface listAutoRespondersParameters {
  domain?: number;
  regex: number;
}

import { execute } from './index';

export default (param: listAutoRespondersParameters) => {
  return execute({
    function: 'list_auto_responders',
    parameters: param
  });
};
