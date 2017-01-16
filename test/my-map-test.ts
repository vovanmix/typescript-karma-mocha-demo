import { expect } from "chai";
// import "mocha";

import MyMap from "../src/my-map";

describe("MyMap", () => {
    describe("number generic", () => {
        let numberMap: MyMap<number>;

        beforeEach(() => {
            numberMap = new MyMap<number>();
        });

        it("sets the value", () => {
            numberMap.setItem("apples", 5);
            expect(numberMap.getItem("apples")).to.eq(5);
        });

        it("returns undefied by default", () => {
            expect(numberMap.getItem("apples")).to.be.undefined;
        });
    });

    describe("string generic", () => {
        let numberMap: MyMap<string>;

        beforeEach(() => {
            numberMap = new MyMap<string>();
        });

        it("sets the value", () => {
            numberMap.setItem("apples", "5");
            expect(numberMap.getItem("apples")).to.eq("5");
        });

        it("prints the map", () => {
            numberMap.setItem("apples", "5");
            numberMap.setItem("oranges", "1");
            numberMap.setItem("bananas", "3");

            expect(numberMap.printMap()).to.eq("apples => 5\r\noranges => 1\r\nbananas => 3");
        });
    });
});
