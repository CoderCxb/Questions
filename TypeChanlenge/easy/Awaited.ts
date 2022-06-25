// 如果我们有一个封装类型，比如Promise。我们如何获得包装类型内部的类型?例如，Promise<ExampleType>如何获得ExampleType?

type MyAwaited<T> = T extends Promise<infer R> ? R : never;

type s = Awaited<Promise<string>>