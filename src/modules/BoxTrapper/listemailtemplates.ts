// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Alist_email_templates

import { execute } from './index';

export default () => {
  return execute({
    function: 'list_email_templates',
  });
};
