export const formHandler = <T extends object>(values: T) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (values) {
                    resolve(values)
                } else {
                    reject(new Error('Something goes wrong'))
                }
            },
            1e3,
        )
    })
}