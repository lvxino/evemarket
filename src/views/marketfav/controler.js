/**
 *
 */
import wepy from "wepy";
import qs from 'query-string';
import { getFavList, deleteFav } from "service";
import LoadingView from "components/LoadingView";
import { linkTo } from 'lib/wx';

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: "EVE"
    };

    components = {
        LoadingView
    };

    data = {
        list: null
    };

    computed = {};

    methods = {
        click({ currentTarget: { dataset } }) {
            linkTo(`/views/orderlist/index?${qs.stringify(dataset)}`)
        },
        longpress({ currentTarget: { dataset } }) {
            // 删除
            wx.showModal({
                title: '提示',
                content: '是否确认删除？',
                success: async (res) => {
                    if (res.confirm) {
                        const res = await deleteFav(dataset.typeId);
                        // typeId
                        if (res && res.success) {
                            wx.showToast({ title: '删除成功' });
                            this.getFavList();
                        }
                    }
                }
            })
        }
    };

    async getFavList() {
        const res = await getFavList();
        this.list = res.list || [];
        this.$apply();
    }

    async onLoad() {
        this.getFavList();
    }
}
