import cache from 'lib/cache';
import fetch from 'lib/fetch';

/**
 * 获取市场菜单根目录
 */
export const getMarketGroupRoot = async () => {
    const KEY = 'GET_MARKET_GROUP_ROOT';
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch('/market/group/root');
    cache.set(KEY, res);
    return res;
}

/**
 * 根据 marketGroupId 获取市场菜单子目录
 */
export const getMarketGroupChildren = async (marketGroupId) => {
    const KEY = `GET_MARKET_GROUP_CHILDREN${marketGroupId}`;
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch(`/market/group/children/${marketGroupId}`);
    cache.set(KEY, res);
    return res;
}

/**
 * 根据 regionId typeId tag 查询订单列表
 * @param {*} regionId
 * @param {*} typeId
 * @param {*} tag
 */
export const quertOrderList = (regionId, typeId, tag = 'cn') => {
    return fetch(`/market/orders/${tag}/${regionId}/${typeId}`)
}

/**
 * 根据 tag 获取基础矿价信息
 * @param {*} tag
 */
export const getMineralPrice = (tag = 'cn') => {
    return fetch(`/market/mineral/${tag}/price`);
}

/**
 * 获取市场目录树
 */
export const getMarketMenuTree = async () => {
    const KEY = 'GET_MARKET_MENU_THREE';
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch('/market/menu');
    cache.set(KEY, res);
    return res;
}

/**
 * 获取市场舰船目录树
 */
export const getMarketShipMenuTree = async () => {
    const KEY = 'GET_MARKET_SHIP_MENU_THREE';
    let res = await cache.get(KEY);

    if (res) {
        return res;
    }

    res = await fetch('/market/shipMenu');
    cache.set(KEY, res);
    return res;
}
