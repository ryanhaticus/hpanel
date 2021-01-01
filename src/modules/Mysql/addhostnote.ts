// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Mysql%3A%3Aadd_host_note
export interface addHostNoteParameters {
  host: string;
  note: string;
}

import { execute } from './index';

export default (param: addHostNoteParameters) => {
  return execute({
    function: 'add_host_note',
    parameters: param,
  });
};
