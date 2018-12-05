/**
 * fetch lib
 */
const baseUrl = 'https://eveapi.awsxin.com/v3';

/* global wx */
const fetch = (url, data, options) => {
    if (typeof url === 'object') {
        options = url;
        url = url.url;
        data = url.data;
    }

    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl}${url}`,
            data,
            ...options,
            success(res) {
                if (+res.statusCode === 200) {
                    return resolve(res.data || null);
                }
                reject(
                    new Error(
                        `Request Status Error 【url:${url}】 【status:${
                            res.statusCode
                        }】`
                    )
                );
            },
            fail() {
                reject(new Error(`Request Error 【url:${url}】`));
            }
        });
    });
};

export default fetch;
