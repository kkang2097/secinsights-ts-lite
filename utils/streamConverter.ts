
//We should directly use Web APIs instead of Vercel AI SDK,
//not everyone uses NextJS or Vercel libraries
export function iteratorToStream(iterator: any): ReadableStream {
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await iterator.next()
   
        if (done) {
          controller.close()
        } else {
          controller.enqueue(value)
        }
      },
    })
  }