// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aget_cn_name
export interface getCnNameParameters {
  domain: string;
  service: string;
  add_mail_subdomain?: boolean;
}

import { execute } from './index';

export default (param: getCnNameParameters) => {
  return execute({
    function: 'get_cn_name',
    parameters: param,
  });
};
