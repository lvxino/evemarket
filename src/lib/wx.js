/* global wx */
/**
 *获取系统信息
 */
export const getSystemInfo = () => new Promise(resolve => {
    wx.getSystemInfo({
        success(info) {
            resolve(info)
        },
        fail() {
            resolve({})
        }
    });
})

/**
 * 获取节点位置大小
 * @param {*} selector
 */
export const getElementRect = (selector) => new Promise(resolve => {
    const query = wx.createSelectorQuery();
    query.select(selector).boundingClientRect(res => resolve(res));
    query.exec();
})

/**
 * 跳转
 * @param {*} url
 */
export const linkTo = (url) => new Promise(resolve => {
    wx.navigateTo({
        url,
        success() {
            resolve(true)
        },
        fail() {
            resolve(false)
        }
    })
})


/**
 * 检查session_key是否失效
 */
export const checkSession = () => new Promise(resolve => {
    wx.checkSession({
        success() {
            resolve(true)
        },
        fail() {
            resolve(false)
        }
    })
})

/**
 * wx.login
 */
export const wxLogin = () => new Promise((resolve, reject) => {
    wx.login({
        success({ code }) {
            resolve(code);
        },
        fail() {
            reject();
        }
    })
})
