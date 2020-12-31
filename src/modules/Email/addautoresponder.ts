// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_auto_responder
export interface addAutoResponderParameters {
  email?: number;
  from?: number;
  subject?: number;
  body?: number;
  domain?: number;
  is_html?: boolean;
  charset: number;
  interval?: number;
  start?: number;
  stop?: number;
}

import { execute } from './index';

export default (param: addAutoResponderParameters) => {
  return execute({
    function: 'add_auto_responder',
    parameters: param
  });
};
