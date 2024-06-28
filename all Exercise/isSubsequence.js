function isSubsequence(sub, str) {
    let i = 0;
    for (let char of str) {
      if (char === sub[i]) i++;
      if (i === sub.length) return true;
    }
    return false;
  }

  console.log(isSubsequence('abc', 'ahbgdc')); // Output: true
  console.log(isSubsequence('axc', 'ahbgdc')); // Output: false
  console.log(isSubsequence('ace', 'abcde')); // Output: true
