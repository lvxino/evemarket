/**
 * 缓存相关
 * 服务器 version 改变 则自动清空
 */
import { getServerStatus } from 'service';
import store from 'lib/store';

class Cache {
    constructor() {
        this.check = false;
        this.store = null;
    }

    async init() {
        const status = await getServerStatus();
        this.check = true;
        const version = await store.getStorage('version');
        if (!version || version !== status.version) {
            // 版本号改变 则重置缓存
            this.store = {};
            await store.setStorage('version', status.version);
            await store.setStorage('cache', this.store);
            return;
        }
        this.store = (await store.getStorage('cache')) || {};
    }

    /**
     * 设置缓存
     * @param {*} key
     * @param {*} data
     */
    async set(key, data) {
        if (!this.check) {
            await this.init();
        }
        this.store[key] = data;
        return store.setStorage('cache', this.store);
    }

    /**
     * 取缓存
     * @param {*} key
     */
    async get(key) {
        if (!this.check) {
            await this.init();
        }
        return this.store[key];
    }
}

export default new Cache();
