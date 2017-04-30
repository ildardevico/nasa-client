export {
  getNotificationsByLocation,
  setNotificationsByLocation,
  approve,
  resolve,
} from './notify'

export const getCurrCoord = () => new Promise( (ok, err) => navigator.geolocation.getCurrentPosition(ok, err));

export const getAddress = (lat,lng) => fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`);

