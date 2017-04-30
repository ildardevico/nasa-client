export {
  getNotificationsByLocation,
  setNotificationsByLocation
} from './notify'

export const getCurrCoord = () => new Promise( (ok, err) => navigator.geolocation.getCurrentPosition(ok, err));

