// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Aignore_messages
export interface ignoreMessagesParameters {
  email: string;
  queuefile: string;
}

import { execute } from './index';

export default (param: ignoreMessagesParameters) => {
  return execute({
    function: 'ignore_messages',
    parameters: param,
  });
};
