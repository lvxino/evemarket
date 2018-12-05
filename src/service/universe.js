import cache from 'lib/cache';
import fetch from 'lib/fetch';

/**
 * 获取所有星域
 */
export const getAllRegion = async () => {
    const KEY = 'GET_ALL_REGION';
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch('/universe/getAllRegions');
    await cache.set(KEY, res);
    return res;
}
