import test from "ava";

const hello: string = "Hello World";

test("works", (t) => {
  t.assert(true, "Error");

  t.truthy(hello, "Wrong");
});
