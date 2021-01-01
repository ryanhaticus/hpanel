// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+UserTasks%3A%3Adelete
export interface UTdeleteParameters {
  id: string;
}

import { execute } from './index';

export default (param: UTdeleteParameters) => {
  return execute({
    function: 'delete',
    parameters: param,
  });
};
