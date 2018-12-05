/**
 * store operate
 */

class Store {
    /* global wx */

    getStorageInfo() {
        return new Promise(resolve => {
            wx.getStorageInfo({
                success(status) {
                    resolve(status);
                },
                fail() {
                    resolve(null);
                }
            });
        });
    }

    clearStorage() {
        return new Promise((resolve, reject) => {
            wx.clearStorage({
                success(status) {
                    resolve(status);
                },
                fail() {
                    reject(new Error('清空本地存储失败'));
                }
            });
        });
    }

    removeStorage(key) {
        return new Promise((resolve, reject) => {
            wx.removeStorage({
                key,
                success(status) {
                    resolve(status);
                },
                fail() {
                    reject(new Error(`删除本地存储失败【key:${key}】`));
                }
            });
        });
    }

    setStorage(key, data) {
        return new Promise(resolve => {
            wx.setStorage({
                key,
                data,
                success() {
                    resolve(true);
                },
                fail() {
                    resolve(false);
                }
            });
        });
    }

    getStorage(key) {
        return new Promise(resolve => {
            wx.getStorage({
                key,
                success(v) {
                    resolve(v);
                },
                fail() {
                    resolve(null);
                }
            });
        });
    }
}

export default new Store();
