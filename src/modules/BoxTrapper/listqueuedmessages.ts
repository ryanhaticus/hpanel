// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+BoxTrapper%3A%3Alist_queued_messages
export interface ListQueuedMessagesParameters {
  email: string;
  date?: number;
}

import { execute } from './index';

export default (param: ListQueuedMessagesParameters) => {
  return execute({
    function: 'list_queued_messages',
    parameters: param
  });
};
