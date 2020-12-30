// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Areset_email_template
export interface ResetEmailTemplateParameters {
  email: string;
  template: string;
}

import { execute } from './index';

export default (param: ResetEmailTemplateParameters) => {
  return execute({
    function: 'reset_email_template',
    parameters: param
  });
};
