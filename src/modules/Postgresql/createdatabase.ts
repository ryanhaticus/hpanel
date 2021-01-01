// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Postgresql%3A%3Acreate_database
export interface createDatabaseParameters {
  name: string;
}

import { execute } from './index';

export default (param: createDatabaseParameters) => {
  return execute({
    function: 'create_database',
    parameters: param,
  });
};
