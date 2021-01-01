// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+SSL%3A%3Aupload_key
export interface uploadKeyParameters {
  key: string;
  friendly_name?: string;
}

import { execute } from './index';

export default (param: uploadKeyParameters) => {
  return execute({
    function: 'upload_key',
    parameters: param,
  });
};
