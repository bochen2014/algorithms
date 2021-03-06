/**
 * 只能用递归来做，LIS要维护的是一个dp_ending_with比较容易维护，但这里要维护的是一个combination
 * 无法维护
 * @param {Number} n 
 * @param {Number} k 
 */

function combine(n, k) {
    if (n < 1 || k < 1 || n < k) {
        return [];
    }
    if (k === 1) {
        return Array.from(Array(n), (_, i) => [i + 1]);
    }
    var _nSelected = combine(n - 1, k - 1);
    for (var i = 0; i < _nSelected.length; i++) {
        _nSelected[i].push(n);
    }
    var _nNotSelected = combine(n - 1, k);
    return _nSelected.concat(_nNotSelected);


}

console.log(combine(5, 3))