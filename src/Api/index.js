export const getCurrCoord = () => new Promise( (ok, err) => navigator.geolocation.getCurrentPosition(ok, err));