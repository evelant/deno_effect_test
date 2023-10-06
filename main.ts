import { Context, Effect } from "effect";

interface Foo {
  bar: string;
}
const Foo = Context.Tag<Foo>();

/*
Argument of type 'Tag<Foo, Foo>' is not assignable to parameter of type 'Effect<unknown, unknown, unknown>'.
  Type 'Tag<Foo, Foo>' is missing the following properties from type 'Effect<unknown, unknown, unknown>': [EffectTypeId], [symbol], [symbol]deno-ts(2345)
*/
Effect.map(Foo, ({ bar }) => bar);

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
