export default defineEventHandler((event) => {
  const eventStream = createEventStream(event)
  const interval = setInterval(async () => {
    await eventStream.push(Math.random().toString())
  }, 1000)
  eventStream.onClosed(async () => {
    clearInterval(interval)
    await eventStream.close()
  })

  return eventStream.send()
})
