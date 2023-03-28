// let str=["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]

function sample(arr, k) {
    let a = []
    if (arr.length == 0 || k > arr.length || k <= 0) {
        console.log('nothing');

    }
    else {
        for (let i = 0; i <= arr.length - k; i++) {
            let str = ""
            for (let j = i; j < i + k; j++) {
                str = str + arr[j];
            }
            a.push(str);
        }

        for (let i = 0; i <= a.length; i++) {
            for (let j = i; j < a.length; j++) {
                if (a[i].length < a[j].length) {
                    let temp = a[i];
                    a[i] = a[j]
                    a[j] = temp;
                }
            }
        }
        console.log(a);
        console.log('the longest letter in the array is-->' + a[0]);

    }

}

sample(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3)
