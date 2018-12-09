import cache from 'lib/cache';
import fetch from 'lib/fetch';

export const getSolarSystemPath = async (origin, destination, flag, avoid) => {
    const res = await fetch('/map/route/solarSystems', { origin, destination, flag, avoid })
    return res.list || [];
}


export const getNearbySystem = async (solarSystemId, distence) => {
    const res = await fetch('/map/nearby/solarSystems/list', { solarSystemId, distence });
    return res.list || [];

}
