// 通知

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    time: query.lasttime || -1,
    setNewCount:true,
    total:true
  }
  return request(`/api/msg/notices`, data, createOption(query, 'weapi'))
}
