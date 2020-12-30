// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aimage
export interface ImageParameters {
  imagefile?: string;
  needfile?: boolean;
  reqext?: string;
  skip_logo_check?: boolean;
  nomagic?: boolean;
}

import { execute } from './index';

export default (param?: ImageParameters) => {
  return execute({
    function: 'image',
    parameters: param
  });
};
