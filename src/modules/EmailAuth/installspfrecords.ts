// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+EmailAuth%3A%3Ainstall_spf_records
export interface installSpfRecordsParameters {
  domain: string;
  record: string;
}

import { execute } from './index';

export default (param: installSpfRecordsParameters) => {
  return execute({
    function: 'install_spf_records',
    parameters: param,
  });
};
