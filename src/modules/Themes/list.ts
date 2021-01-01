// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Themes%3A%3Alist
export interface listParameters {
  show_mail_themes?: boolean;
}

import { execute } from './index';

export default (param?: listParameters) => {
  return execute({
    function: 'list',
    parameters: param,
  });
};
