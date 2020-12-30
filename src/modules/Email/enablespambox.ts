// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aenable_spam_box
export interface EnableSpamBoxParameters {}

import { execute } from './index';

export default (param: EnableSpamBoxParameters) => {
  return execute({
    function: 'enable_spam_box',
    parameters: param
  });
};
