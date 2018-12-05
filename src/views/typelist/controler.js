/**
 * 物品列表
 */
import wepy from "wepy";
import qs from 'query-string';
import { getMarketTypes } from "service";
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
        groupId: null,
        action: null,
        list: null
    };

    computed = {};

    methods = {
        click({ currentTarget: { dataset } }) {
            linkTo(`/views/orderlist/index?${qs.stringify(dataset)}`)
        },
        longpress({ currentTarget: { dataset } }) {
            linkTo(`/views/typedetail/index?${qs.stringify(dataset)}`)
        }
    };

    async onLoad(params) {
        this.groupId = params.groupId;
        this.action = params.action;
        const list = await getMarketTypes(this.groupId);
        this.setData("list", list);
    }
}
