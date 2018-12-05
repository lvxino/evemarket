import cache from 'lib/cache';
import fetch from 'lib/fetch';

/**
 * 根据 marketGroupId 获取物品列表
 * @param {*} groupId
 */
export const getMarketTypes = async (groupId) => {
    const KEY = `GET_MARKET_TYPES${groupId}`;
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch(`/invtype/market/list/${groupId}`);
    cache.set(KEY, res);
    return res;
}

/**
 * 根据 typeId 获取物品详情
 * @param {*} typeId
 */
export const getTypeDetail = async (typeId) => {
    const KEY = `GET_TYPE_DETAIL${typeId}`;
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch(`/invtype/detail/${typeId}`);
    cache.set(KEY, res);
    return res;
}

/**
 * 根据 typeId 获取物品详情 属性根据属性类别分组
 * @param {*} typeId
 */
export const getTypeDetailList = async (typeId) => {
    const KEY = `GET_TYPE_DETAIL_LIST${typeId}`;
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch(`/invtype/detailList/${typeId}`);
    cache.set(KEY, res);
    return res;
}

/**
 * 根据 name 模糊查询物品
 * @param {*} name
 */
export const searchTypes = (name, limit, offset) => {
    return fetch(`/invtype/search/${name}?limit=${limit}&offset=${offset}`);
}
