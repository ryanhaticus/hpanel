// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aimage
export interface imageParameters {
  imagefile: number;
  needfile: boolean;
  reqext: number;
  skip_logo_check: boolean;
  nomagic: boolean;
}

import { execute } from './index';

export default (param: imageParameters) => {
  return execute({
    function: 'image',
    parameters: param
  });
};
