import { getNotificationsByLocation } from './notify'
export const getCurrCoord = () => new Promise( (ok, err) => navigator.geolocation.getCurrentPosition(ok, err));

export {
  getNotificationsByLocation,
}
