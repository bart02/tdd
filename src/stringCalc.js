const calc = (input) => {
    let delimiter = /\n|,/u
    if (input.startsWith('//'))
        [, delimiter] = input.match(/\/\/(.*)\n/u);
        input = input.replace(/\/\/(.*)\n/u, '');
    if (input === '') {
        return 0;
    }
    return input.split(delimiter).reduce((acc, curr) => {
        return acc + parseInt(curr, 10);
    }, 0);
};

export default calc;
