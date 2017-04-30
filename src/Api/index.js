export {
  getNotificationsByLocation,
  setNotificationsByLocation,
  approve,
  resolve,
} from './notify'

export const getCurrCoord = () => new Promise( (ok, err) => navigator.geolocation.getCurrentPosition(ok, err));
