import fetch from 'lib/fetch';
import store from '../lib/store';


/**
 * 登录
 */
export const login = (params) => fetch('/user/login', params, { method: 'POST' });


/**
 * 获取搜藏列表
 */
export const getFavList = async () => {
    const userInfo = await store.getStorage('userInfo');
    if (!userInfo) {
        wx.showToast({ title: '请先登录', icon: 'loading' });
        return [];
    }

    return fetch('/user/getFavList', { _t: +new Date() }, {
        header: {
            openid: userInfo.openId,
            iv: userInfo.sign
        }
    });
}

/**
 * 保存搜藏
 */
export const saveFav = async (params) => {
    const userInfo = await store.getStorage('userInfo');
    if (!userInfo) {
        wx.showToast({ title: '请先登录', icon: 'loading' });
        return [];
    }

    return fetch('/user/addFav', params, {
        method: 'POST',
        header: {
            openid: userInfo.openId,
            iv: userInfo.sign
        }
    });
}

/**
 * 删除搜藏
 */
export const deleteFav = async (typeId) => {
    const userInfo = await store.getStorage('userInfo');
    if (!userInfo) {
        wx.showToast({ title: '请先登录', icon: 'loading' });
        return [];
    }

    return fetch('/user/deleteFav', { typeId }, {
        method: 'POST',
        header: {
            openid: userInfo.openId,
            iv: userInfo.sign
        }
    });
}
