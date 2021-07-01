// azerdii;
// 5;

function findSubstring(s, k) {
	// Write your code here
	const vowels = "aeiou";
	let longestVowelCount = 0;
	let result = "Not found!";

	// get vowelCount for the first string
	// after its established, iterate the block of string
	// subtract the old one that fell off
	// add the new one thats added
	let vowelCount = 0;
	for (let i = 0; i < s.length - k + 1; i++) {
		const substring = s.slice(i, i + k);
		console.log(`i: ${i}: ${substring}`);

		if (i === 0) {
			for (const letter of substring) {
				if (isVowel(letter)) {
					vowelCount++;
				}
			}
			console.log(`initial: ${vowelCount}`);
		} else {
			if (isVowel(s[i - 1])) {
				vowelCount--;
				console.log(`old: ${vowelCount}`);
			}
			if (isVowel(s[i + k])) {
				vowelCount++;
				console.log(`new: ${vowelCount}`);
			}
		}
		console.log(`current: ${vowelCount}`);

		if (vowelCount > longestVowelCount) {
			longestVowelCount = vowelCount;
			result = substring;
		}
		if (vowelCount === k) break;
	}

	return result;
}

function isVowel(char) {
	const vowels = "aeiou";
	return vowels.includes(char);
}

findSubstring("azerdii", 5);
