/**
 *
 */
import wepy from "wepy";
import {} from "service";
import LoadingView from "components/LoadingView";
/* global wx */
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

    methods = {};

    async onLoad(params) {}
}
