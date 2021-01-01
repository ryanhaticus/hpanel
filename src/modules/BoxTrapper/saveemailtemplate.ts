// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Asave_email_template
export interface saveEmailTemplateParameters {
  email: string;
  template: string;
  contents: string;
}

import { execute } from './index';

export default (param: saveEmailTemplateParameters) => {
  return execute({
    function: 'save_email_template',
    parameters: param,
  });
};
