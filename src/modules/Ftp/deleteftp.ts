// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Ftp%3A%3Adelete_ftp
export interface deleteFtpParameters {
  domain?: string;
  user: string;
  destroy?: boolean;
}

import { execute } from './index';

export default (param: deleteFtpParameters) => {
  return execute({
    function: 'delete_ftp',
    parameters: param,
  });
};
