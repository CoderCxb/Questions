setTimeout(() => {
  console.log('setTimeout')
}, 0)

const { port1, port2 } = new MessageChannel()
port2.onmessage = function () {
  console.log('MessageChannel')
}
port1.postMessage('ping')

Promise.resolve().then(() => {
  console.log('Promise')
})