// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Adump_database_schema
export interface dumpDatabaseSchemaParameters {
  dbname?: number;
}

import { execute } from './index';

export default (param?: dumpDatabaseSchemaParameters) => {
  return execute({
    function: 'dump_database_schema',
    parameters: param
  });
};
