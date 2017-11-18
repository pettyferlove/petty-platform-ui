let util = {}

util.updateOpenTags = function (_state, _tag) {
  // 判断该页面是否已经打开过
  let isOpen = false
  _state.forEach(item => {
    if (item.name === _tag.name) {
      isOpen = true
    }
  })
  if (!isOpen) {
    _state.push(_tag)
  }
}

export default util
