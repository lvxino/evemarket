/**
 * 用户中心
 */
import wepy from 'wepy';
import LoadingView from "components/LoadingView";
import { wxLogin } from '../../lib/wx';
import { login } from '../../service';
import store from '../../lib/store';

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: 'EVE'
    };

    components = { LoadingView };

    data = {
        loading: false,
        userInfo: false
    };

    methods = {
        async getUserInfo({ detail: { userInfo } }) {
            try {
                this.loading = true;
                const code = await wxLogin();
                const res = await login({ userInfo, code });
                // res.userInfo 包含openID 和 服务端加密签名
                await store.setStorage('userInfo', res.userInfo);
                this.userInfo = res.userInfo;
                this.$apply();
            } catch (e) {
                wx.showToast({ title: '登录失败', icon: 'loading' });
            } finally {
                this.loading = false;
                this.$apply();
            }
        },
        async logout() {
            await store.removeStorage('userInfo');
            this.userInfo = null;
            this.$apply();
        }
    };

    async onLoad() {
        this.userInfo = await store.getStorage('userInfo');
    }
}
