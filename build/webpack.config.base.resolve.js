const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);
const COM_PATH = 'src/plugin/components'
const WEUI_PATH = 'node_modules/weui-miniprogram/miniprogram_dist'

module.exports = {
  alias: {
    components: resolve(COM_PATH),
    weui: resolve(WEUI_PATH)
  }
};
