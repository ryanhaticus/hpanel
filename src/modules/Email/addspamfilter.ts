// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+Email%3A%3Aadd_spam_filter
export interface addSpamFilterParameters {
  required_score?: string;
  account?: string;
}

import { execute } from './index';

export default (param?: addSpamFilterParameters) => {
  return execute({
    function: 'add_spam_filter',
    parameters: param,
  });
};
