// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Features%3A%3Ahas_feature
export interface hasFeatureParameters {
  name: string;
}

import { execute } from './index';

export default (param: hasFeatureParameters) => {
  return execute({
    function: 'has_feature',
    parameters: param,
  });
};
