const collatz = (limit) => {
    let moreSteps = { steps: 0, number: 1 }

    for (let n = 1; n <= limit; n++) {
        let testNumber = n
        let steps = 0

        while (testNumber !== 1) {
            steps += 1

            testNumber = testNumber % 2 ? testNumber * 3 + 1 : testNumber / 2
        }


        if (steps > moreSteps.steps) { moreSteps = { steps, number: n } }
    }

    return moreSteps
}

collatz(1000000) // { steps: 524, number:  837799}