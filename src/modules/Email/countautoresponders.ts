// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Acount_auto_responders
export interface CountAutoRespondersParameters {}

import { execute } from './index';

export default (param: CountAutoRespondersParameters) => {
  return execute({
    function: 'count_auto_responders',
    parameters: param
  });
};
