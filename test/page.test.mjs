import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("page includes required storefront sections and appointment actions", () => {
  for (const id of ["services", "process", "pricing", "space", "reviews", "contact"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }

  assert.match(html, /宠物洗护/);
  assert.match(html, /立即预约/);
  assert.match(html, /查看套餐/);
  assert.match(html, /styles\.css/);
  assert.match(html, /assets\/dog-bath\.jpeg/);
  assert.match(html, /assets\/store-reception\.png/);
  assert.match(html, /assets\/store-wash-suite\.png/);
  assert.match(html, /assets\/store-grooming-room\.png/);
  assert.equal(existsSync(new URL("../assets/dog-bath.jpeg", import.meta.url)), true);
  assert.equal(existsSync(new URL("../assets/store-reception.png", import.meta.url)), true);
  assert.equal(existsSync(new URL("../assets/store-wash-suite.png", import.meta.url)), true);
  assert.equal(existsSync(new URL("../assets/store-grooming-room.png", import.meta.url)), true);
});
