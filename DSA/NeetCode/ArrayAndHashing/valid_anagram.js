// TODO: O(nlogn+mlogm) O(n+m)
function isAnagram(s, t) {
    s = s.split("").sort();
    t = t.split("").sort();
    return JSON.stringify(s) == JSON.stringify(t);
}


// TODO: Hash Table: O(n+m) O(1) since we have at most 26 different characters
function isAnagram(s, t) {

    // If length is not same, simply reject
    if (s.length !== t.length) {
        return false;
    }

    const countS = {};
    const countT = {};
    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1;
    }
    // Above we created a hast table like
    // countS = { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
    // countT = { s: 1, i: 1, l: 1, e: 1, n: 1, t: 1 }

    // now for every key we checked the value
    for (const key in countS) {
        if (countS[key] !== countT[key]) {
            return false;
        }
    }
    return true;
}

// TODO: Hash Table Optimal: same complexity as above
// bit bitch, but understand it by gpt its fun
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return count.every(val => val === 0);
}
