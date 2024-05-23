const x = 'x'
export default defineWebSocketHandler({
  open(peer) {
    peer.subscribe(x)
  },

  message: async (peer, message) => {
    // const redis = await useStorage('tmp')
    // const xxx = await useStorage().setItem('0:v', message.text())
    const redis = await useStorage('0')
    peer.publish(x, message.text())
  },

  close(peer, event) {
  },

  error(peer, error) {
  },
})
