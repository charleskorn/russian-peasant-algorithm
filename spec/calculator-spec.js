import Calculator from "../app/js/calculator";
import CalculatorSpecHelper from "./support/calculator-spec-helper";

describe("A Russian peasant calculator", () => {
    const calculator = new Calculator();

    expectMultiplication(0, 0)
        .toHaveResult(0)
        .andSteps(
            {left: 0, right: 0, included: true}
        );

    expectMultiplication(1, 0)
        .toHaveResult(0)
        .andSteps(
            {left: 1, right: 0, included: true}
        );

    expectMultiplication(0, 1)
        .toHaveResult(0)
        .andSteps(
            {left: 0, right: 1, included: true}
        );

    expectMultiplication(1, 1)
        .toHaveResult(1)
        .andSteps(
            {left: 1, right: 1, included: true}
        );

    expectMultiplication(2, 1)
        .toHaveResult(2)
        .andSteps(
            {left: 2, right: 1, included: false},
            {left: 1, right: 2, included: true}
        );

    expectMultiplication(1, 2)
        .toHaveResult(2)
        .andSteps(
            {left: 1, right: 2, included: true}
        );

    expectMultiplication(13, 238)
        .toHaveResult(3094)
        .andSteps(
            {left: 13, right: 238, included: true},
            {left: 6, right: 476, included: false},
            {left: 3, right: 952, included: true},
            {left: 1, right: 1904, included: true}
        );

    function expectMultiplication(left, right) {
        return new CalculatorSpecHelper(calculator, left, right);
    }
});

