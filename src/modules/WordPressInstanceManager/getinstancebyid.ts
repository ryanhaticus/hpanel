// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+WordPressInstanceManager%3A%3Aget_instance_by_id
export interface getInstanceByIdParameters {
  id?: number;
}

import { execute } from './index';

export default (param?: getInstanceByIdParameters) => {
  return execute({
    function: 'get_instance_by_id',
    parameters: param
  });
};
