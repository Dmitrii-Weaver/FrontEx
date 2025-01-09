function moveZeros(list) {
    let idx = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== 0) {
            list[idx++] = list[i]
        }
    }
    while (idx < list.length) {
        list[idx++] = 0;
    }
}