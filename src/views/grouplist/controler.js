/**
 * 市场菜单
 */
import wepy from "wepy";
import { getMarketGroupRoot, getMarketGroupChildren } from "service";
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
            if (+dataset.hastypes === 0) {
                linkTo(`/views/grouplist/index?parentId=${dataset.id}&action=${this.action}`)
                return;
            }

            linkTo(`/views/typelist/index?groupId=${dataset.id}&action=${this.action}`)
        }
    };

    async onLoad(params) {
        this.action = params.action;
        this.parentId = params.parentId;
        if (this.parentId) {
            this.list = await getMarketGroupChildren(this.parentId);
        } else {
            this.list = await getMarketGroupRoot();
        }
        this.$apply();
    }
}
