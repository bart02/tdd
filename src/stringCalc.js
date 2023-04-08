const calc = (input) => {
    if (input === '') {
        return 0;
    }
    return input.split(/\n|,/u).reduce((acc, curr) => {
        return acc + parseInt(curr, 10);
    }, 0);
};

export default calc;
