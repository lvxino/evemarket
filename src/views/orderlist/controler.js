/**
 *
 */
import wepy from "wepy";
import numeral from 'numeral';
import { quertOrderList, getAllRegion } from "service";
import LoadingIcon from "components/LoadingIcon";
import Switch from 'components/Switch';
import LoadingButton from 'components/LoadingButton';
import Select from 'components/Select';

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: "EVE"
    };

    components = {
        LoadingIcon,
        Switch,
        Switch2: Switch,
        LoadingButton,
        Select
    };

    data = {
        isBuy: false,
        tag: false,
        name: '',
        typeId: '',
        region: '',
        sailOrder: [],
        buyOrder: [],
        regions: [],
        loading: false,
        maxBuyPrice: '--',
        minSailPrice: '--'
    };

    computed = {
        iconUrl() {
            if (this.typeId) {
                return `http://static.awsxin.com/eve/image/types/${this.typeId}_64.png`
            }

            return ''
        },
        showList() {
            return this.isBuy ? this.buyOrder : this.sailOrder
        }
    };

    watch = {
        tag() {
            this.quertOrderList();
        },
        region() {
            this.quertOrderList();
        }
    }

    async quertOrderList() {
        const { tag, region, typeId } = this;
        this.loading = true;
        this.sailOrder = [];
        this.buyOrder = [];
        this.minSailPrice = '--';
        this.maxBuyPrice = '--';
        this.$apply();
        const list = await quertOrderList(region, typeId, tag ? 'eu' : 'cn');
        this.sailOrder = list.filter(item => {
            item.priceDisplay = numeral(item.price).format('0,0.00');
            return !item.is_buy_order
        })
        this.buyOrder = list.filter(item => item.is_buy_order);
        this.sailOrder.sort((a, b) => a.price - b.price);
        this.buyOrder.sort((a, b) => b.price - a.price);
        this.minSailPrice = this.sailOrder[0] && this.sailOrder[0].priceDisplay || '--';
        this.maxBuyPrice = this.buyOrder[0] && this.buyOrder[0].priceDisplay || '--';
        this.loading = false;
        this.$apply();
    }

    async onLoad(params = {}) {
        const { name = '', typeId = '', region = '10000002', tag = 'cn' } = params;
        this.name = decodeURIComponent(name);
        this.typeId = typeId;
        this.region = region;
        this.tag = tag === 'cn' ? !!false : true;
        this.regions = await getAllRegion();
        this.$apply();
    }
}
