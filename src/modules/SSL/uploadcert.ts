// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aupload_cert
export interface uploadCertParameters {
  crt: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param: uploadCertParameters) => {
  return execute({
    function: 'upload_cert',
    parameters: param,
  });
};
