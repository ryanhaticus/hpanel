// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aget_email_template
export interface GetEmailTemplateParameters {
  email: string;
  template: string;
}

import { execute } from './index';

export default (param: GetEmailTemplateParameters) => {
  return execute({
    function: 'get_email_template',
    parameters: param
  });
};
