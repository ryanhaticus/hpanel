// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Branding%3A%3Aspritelist
export interface SpritelistParameters {
  image?: string;
  img: string;
  imgtype: string;
  method: string;
  skipgroups?: boolean;
  subtype: string;
}

import { execute } from './index';

export default (param: SpritelistParameters) => {
  return execute({
    function: 'spritelist',
    parameters: param
  });
};
