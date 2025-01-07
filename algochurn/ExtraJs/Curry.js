function curry(fn) {
    return function curried(...args) {
        if (isArgsMet(args, fn, curry.placeholder)) {
            return fn.call(this, ...args)
        }
        return function (...nextArgs) {
            const mergedArgs = mergeArgs(args, nextArgs, curry.placeholder)
            return curried.call(this, ...mergedArgs)
        }
    }
}


curry.placeholder = Symbol()

function mergeArgs(argsTo, argsFrom, placeholder) {
    const result = []
    let indexFrom = 0
    let indexTo = 0
    while (indexTo < argsTo.length || indexFrom < argsFrom.length) {
        if (indexTo >= argsTo.length) {
            result.push(argsFrom[indexFrom])
            indexFrom += 1
            continue
        }
        if (indexFrom >= argsFrom.length) {
            result.push(argsTo[indexTo])
            indexTo += 1
            continue
        }
        if (argsTo[indexTo] === placeholder) {
            result.push(argsFrom[indexFrom])
            indexFrom += 1
        } else {
            result.push(argsTo[indexTo])
        }
        indexTo += 1
    }
    return result
}

function isArgsMet(args, fn, placeholder) {
    if (args.length < fn.length) {
        return false
    }
    for (let i = 0; i < fn.length; i++) {
        if (args[i] === placeholder) {
            return false
        }
    }
    return true
}
