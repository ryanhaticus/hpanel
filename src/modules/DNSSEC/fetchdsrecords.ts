// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DNSSEC%3A%3Afetch_ds_records
export interface fetchDsRecordsParameters {
  domain: string;
}

import { execute } from './index';

export default (param: fetchDsRecordsParameters) => {
  return execute({
    function: 'fetch_ds_records',
    parameters: param,
  });
};
