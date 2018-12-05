/**
 * 物品详情
 */
import wepy from "wepy";
import { getTypeDetailList } from "service";
import LoadingView from "components/LoadingView";

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: "EVE"
    };

    components = {
        LoadingView
    };

    data = {
        groupId: null,
        typeId: null,
        typeDetail: null
    };

    computed = {
        iconUrl() {
            if (this.typeId) {
                return `http://static.awsxin.com/eve/image/types/${this.typeId}_64.png`
            }

            return ''
        },
    };

    methods = {};

    async onLoad(params) {
        const { groupId, typeId } = params;
        this.groupId = groupId;
        this.typeId = typeId;
        this.typeDetail = await getTypeDetailList(this.typeId);
        this.$apply();
    }
}
