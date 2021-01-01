// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+DAV%3A%3Aget_calendar_contacts_config
export interface getCalendarContactsConfigParameters {
  user?: string;
}

import { execute } from './index';

export default (param?: getCalendarContactsConfigParameters) => {
  return execute({
    function: 'get_calendar_contacts_config',
    parameters: param,
  });
};
