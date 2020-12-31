// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_email_template
export interface getEmailTemplateParameters {
  email?: number;
  template?: number;
}

import { execute } from './index';

export default (param?: getEmailTemplateParameters) => {
  return execute({
    function: 'get_email_template',
    parameters: param
  });
};
