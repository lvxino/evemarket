/**
 * 用户中心
 */
import wepy from 'wepy';
import { wxLogin } from '../../lib/wx';
import { login } from '../../service';
import store from '../../lib/store';

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: 'EVE'
    };

    components = {};

    data = {
        userInfo: null
    };

    computed = {

    };

    methods = {
        async getUserInfo({ detail: { userInfo } }) {
            try {
                const code = await wxLogin();
                const res = await login({ userInfo, code });
                // res.userInfo 包含openID 和 服务端加密签名
                await store.setStorage('userInfo', res.userInfo);
                wx.showToast({ title: '登录成功' });
                this.userInfo = res.userInfo;
                this.$apply();
            } catch (e) {
                wx.showToast({ title: '登录失败', icon: 'loading' });
            }
        }
    };

    events = {};

    async onLoad() {
        this.userInfo = await store.getStorage('userInfo');
    }
}
