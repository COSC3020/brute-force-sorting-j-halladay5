function permutationSort(list) {
    var l = 0;
    var r = list.length - 1;

    if(checkSorted(list) == true) return 1;
    return permute(list, l, r); 
}

function permute(list, l, r) {
    if (list.length <= l + 1)
    {
        return 1;
    }
    var count = 0;

    for (var i = l; i <= r; i++) {
        if (list[i] != list[l]) {
            swap(list, l, i);
        }

        count += permute(list, l + 1, r);

        if (checkSorted(list)) 
        {
            return count;
        }

        if (list[l] != list[i]) {
            swap(list, l, i);
        }
    }

    return count;
}

function checkSorted(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1])
        {
            return false;
        }
    }
    return true;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}



