import originJSONP from 'jsonp'

// url在这里是个比较纯净的地址，这里将所有的Query通过data拼接到url上，以方便于以后调用
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // url中有？，则写？，没有，则写上&（因为param函数里面删除了&）

  // Promise方法，成功则调用resolve,失败则调用reject
  return new Promise((resolve, reject) => {
    // jsonp(url, opts, fn)对应下面三个参数，当下面的err为否的时候，表示成功
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject()
      }
    })
  })
}

// 下面的函数把data拼接到url参数里面
function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url = url + `&${k}=${encodeURIComponent(value)}` // encodeURIComponent() 函数作用：可把字符串作为URI 组件进行编码
  }
  return url ? url.substr(1) : ''   // url存在，则先删除第一个拼接字符前的&，再返回。若不存在，则返回空
}
