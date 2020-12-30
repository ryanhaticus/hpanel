// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Alist_auto_responders
export interface ListAutoRespondersParameters {
  domain: string;
  regex?: string;
}

import { execute } from './index';

export default (param: ListAutoRespondersParameters) => {
  return execute({
    function: 'list_auto_responders',
    parameters: param
  });
};
