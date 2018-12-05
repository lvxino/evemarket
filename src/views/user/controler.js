/**
 * 用户中心
 */
import wepy from 'wepy';

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: 'EVE'
    };

    components = {};

    data = {
        apiResult: '',
        code: '',
        userInfo: {},
    };

    computed = {
        apiResultD() {
            return JSON.stringify(this.apiResult)
        },
        userInfoD() {
            return JSON.stringify(this.userInfo)
        }
    };

    methods = {
        login() {
            wx.login({
                success: (res) => {
                    this.code = res.code;
                    this.$apply();
                },
                fail: () => {
                    this.code = '';
                    this.$apply();
                }
            })
        },
        getUserInfo({ detail }) {
            this.userInfo = detail;
            this.$apply();
        },
        verify() {
            const { encryptedData, iv, rawData, signature, userInfo } = this.userInfo;
            wx.request({
                url: 'https://eveapi.awsxin.com/v3/user/testLogin',
                data: {
                    code: this.code,
                    encryptedData,
                    iv,
                    rawData,
                    signature,
                    userInfo
                },
                success: (res) => {
                    this.apiResult = res;
                    this.$apply();
                },
                fail: () => {
                    this.apiResult = {};
                    this.$apply();
                }
            })
        }
    };

    events = {};

    onLoad() {
        console.log('load!!!');
    }
}
