// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Alist_ftp
export interface listFtpParameters {
  skip_acct_types: number;
  include_acct_types: number;
}

import { execute } from './index';

export default (param: listFtpParameters) => {
  return execute({
    function: 'list_ftp',
    parameters: param
  });
};
