/**
 *
 */
import wepy from "wepy";
import { searchTypes } from "service";
import qs from 'query-string';
import { linkTo } from 'lib/wx';
import LoadingIcon from 'components/LoadingIcon';

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: "EVE"
    };

    components = {
        LoadingIcon
    };

    data = {
        list: null,
        limit: 100,
        offset: 0,
        search: '',
        loading: false
    };

    computed = {};

    methods = {
        click({ currentTarget: { dataset } }) {
            linkTo(`/views/orderlist/index?${qs.stringify(dataset)}`)
        },
        longpress({ currentTarget: { dataset } }) {
            linkTo(`/views/typedetail/index?${qs.stringify(dataset)}`)
        },
        input({ detail: { value } }) {
            this.search = value;
        },
        async searchTypes() {
            this.list = null;
            this.offset = 0;
            this.loading = true;
            this.$apply();
            this.list = await searchTypes(this.search, this.limit, this.offset);
            this.loading = false;
            this.$apply();
        },
        showMore() {

        }
    }
}
