import { expect } from "chai";

export function shouldBehaveLikeGreeter(): void {
  it("should return the new greeting once it's changed", async function () {
    expect(await this.greeter.greet()).to.equal("Hello, world!");

    expect(await this.greeter.greet("New Message")).to.equal("New Message");
  });
}
