import fetch from 'lib/fetch';

/**
 * 服务器状态
 */
export const getServerStatus = () => {
    return fetch('/server/status');
}
