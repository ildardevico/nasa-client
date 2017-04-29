import { COORDINATS_FETCH_SUCCEEDED } from 'constants'
import combineEvents  from 'utils/combineEvents'


export const position = combineEvents({
  [COORDINATS_FETCH_SUCCEEDED]: (_, { coordinates }) => coordinates
}, {});
