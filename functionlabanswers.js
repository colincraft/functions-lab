////Function Labs 1.14.15

//Forgot number 3, last bonus is wrong.

///for loop
var arr = [1,2,3,4,5];

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i])
}
///

//max of two numbers

	function maxOfTwoNumbers(num1, num2) {
		if (num1 > num2){
			return num1
		} else {
			return num2
		}
	}

maxOfTwoNumbers(2, 5)

//max of three numbers

	function maxOfThreeNumbers (num1, num2, num3){
		if (num1 > num2 && num1 > num3){
			return num1
		} else if (num2 > num1 && num2 > num3) {
			return num2
		} else {
			return num3
		}
	}

maxOfThreeNumbers(5, 3, 6)

//takes a character and returns a vowel.


function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];

    for(i = 0; i < vowels.length; i++){
        if (vowels[i] == char.toLowerCase()){
            return true;
        }
    }
    return false;
}


//sum of arrays

	var total = 0
	var sumArray = [1,2,3,4];
	for(var i=0; i < sumArray.length; i++) { 
		total += sumArray[i]; 
	}

	//For each number in the array, the number will add itself to the total variable.
	// x += y is the same as x = x+ y




///Muliply Arrays

	var total = 1
	var multiplyArray = [1,2,3,4];
	for(var i=0; i < multiplyArray.length; i++) { 
		total *= multiplyArray[i]
	}

	//for each number in the array, the number will multiply itself to the total 
	// x *= y is the same as x = x * y

///reverseString

	function reverse(word){
	    return word.split("").reverse().join(""); 
	}
	reverse("Horse");
	    // "" in the split method is used to seperate to split each charachter.
	    // reverse method reverses the order of elements in string/array.
	    // include "" with no space in the join method to join the split, reversed letters of the word together without having commas in between the words. 

////findLongestWord


	var words = ["Harold", "hen", "asdasda"];

	words.sort(function findLongestWord(a, b){
		return b.length - a.length
	});

	//first, the sort method takes the optional parameter of 2 numbers which we find by returning the length of the second parameter 
	//'b' length and subtracting 'a's length from 'b' and returns it to the function. Since it returns a negative number, the sort function sorts in descending order. 


////filterLongWords


function filterLongWords(array, num) {
    var str = [];
    for(i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            str.push(array[i])
        }
    }
    return str;
}

str = ["ljkdnalksnd", "ljasbdlas", "sda"]
















