require("babel-polyfill");

class Calculator {
    calculate(left, right) {
        if (left === 0 || right === 0) {
            return this.zeroResult(left, right);
        }

        const steps = [...this.generateSteps(left, right)];
        const result = this.determineResult(steps);

        return {
            result: result,
            steps: steps
        };
    }

    *generateSteps(left, right) {
        while (left >= 1) {
            const included = left % 2 === 1;
            const step = {
                left: left,
                right: right,
                included: included
            };

            left = Math.floor(left / 2);
            right = right * 2;

            yield step;
        }
    }

    determineResult(steps) {
        return steps
            .filter(step => step.included)
            .map(step => step.right)
            .reduce((a, b) => a + b);
    }

    zeroResult(left, right) {
        return {
            result: 0,
            steps: [
                {
                    left: left,
                    right: right,
                    included: true
                }
            ]
        };
    }
}

export default Calculator;
