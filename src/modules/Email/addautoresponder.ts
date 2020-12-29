// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_auto_responder
export interface AddAutoResponderParameters {
  email: string;
  from: string;
  subject: string;
  body: string;
  domain: string;
  is_html: boolean;
  charset?: string;
  interval: number;
  start: number;
  stop: number;
}

import { execute } from './index';

export default (param: AddAutoResponderParameters) => {
  return execute({
    function: 'add_auto_responder',
    parameters: param
  });
};
