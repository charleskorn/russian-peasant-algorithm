export default class CalculatorSpecHelper {
    constructor(calculator, left, right) {
        this.calculator = calculator;
        this.left = left;
        this.right = right;
    }

    toHaveResult(result) {
        this.result = result;
        return this;
    }

    andSteps(...steps) {
        this.steps = steps;
        this.build();
    }

    build() {
        describe(`when calculating ${this.left} x ${this.right}`, () => {
            let calculations;

            beforeEach(() => {
                calculations = this.calculator.calculate(this.left, this.right);
            });

            it("calculates the correct result", () => {
                expect(calculations.result).toEqual(this.result);
            });

            it("includes the steps taken to calculate the result", () => {
                expect(calculations.steps).toEqual(this.steps);
            });
        });
    }
}
