// https://documentation.cpanel.net/display/DD/UAPI+Functions+-+StatsBar%3A%3Aget_stats
export interface getStatsParameters {
  display: string;
  warnings?: boolean;
  warninglevel?: number;
  warnout?: boolean;
  infinityimg?: string;
  infinitylang?: string;
  rowcounter?: string;
}

import { execute } from './index';

export default (param: getStatsParameters) => {
  return execute({
    function: 'get_stats',
    parameters: param,
  });
};
