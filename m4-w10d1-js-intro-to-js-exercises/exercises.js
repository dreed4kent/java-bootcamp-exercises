﻿/*
1. SumDouble
*/

function sumDouble(x, y) {
    let sum = x + y;
    if (x === y) {
        sum *= 2;
    }
    return sum;
}

/*
2. HasTeen
*/

function hasTeen(x, y, z) {
    if ((x > 12 && x < 20 || y > 12 && y < 20 || z > 12 && z < 20)) {
        return true;
    } else {
        return false;
    }
}

/*
3. LastDigit          -- N o t   W o r k i n g! =(
*/

function LastDigit(x, y) {
    if (x%10 == y%10) {
        return true;
    } else {
        return false;
    }
}

/*
4. SeeColor
*/

function seeColor(colorString) {
    if (colorString.substring(0, 3) == "red") {
        return "red";
    } else if (colorString.substring(0, 4) == "blue") {
        return "blue";
    } else {
        return "";
    }
}

/*
5. MiddleThree        -- N o t   W o r k i n g! =(
*/

function middleThree(wordString) {
    if (wordString.length % 0) {

    }
}

/*
6. FrontAgain         -- N o t   W o r k i n g! =(
*/

function frontAgain(frontString) {
    if (frontSting.substring(0, 2) == frontString.substring(frontString.length - 2)) {
        return true;
    } else {
        return false;
    }
}

/*
7. AlarmClock         -- N o t   W o r k i n g! =(
*/

function alarmClock(day, vacation) {
    if (day > 0 && day < 6 && !vacation) {
        return "7:00"
    } else if ((day > 0 && day < 6 && vacation) || (day == 6 ^ day == 0 && !vacation)){
        return "10:00";
    } else if (day == 6 || day == 0 && vacation) {
        return "off";
    } else {
		return "off";
	}
}

/*
8. MakeMiddle
*/

function makeMiddle(intArray) {
    var results = [];
    if (intArray.length % 2 == 0 && intArray.length > 1) {
        results.push(intArray[intArray.length / 2-1])
        results.push(intArray[intArray.length / 2])
    }
    return results;
}

/*
9. OddOnly
*/

function oddOnly(intArray) {
    var results = [];
    for (var i = 0; i < intArray.length; i++) {
        if (intArray[i] % 2 == 0) {
        } else {
        results.push(intArray[i]);
        }
    }
    return results;
  }

/*
10. Weave
*/

//   function weave()

/*
11. CigarParty        -- N o t   W o r k i n g! =(
*/

  function cigarParty () {
    if (weekend) {
        if (cigars > 39) {
          return true;
        }
        } else {
        if (cigars > 39 && cigars < 61) {
          return true;
        }
        }
    return false;
    }

/*
12. StringSplosion    -- N o t   W o r k i n g! =(
*/

function stringSplosion(src) {
var result = "";
for(var i = 0; i < src.length; i++) {
    result += src.substring(i, 0);
    }
}

/*
13. FizzBuzz
*/

function fizzBuzz(num) {
    if(num % 5 == 0 && num % 3 == 0) {
        return "FizzBuzz";
    }
        else if (num%5==0) {
          return "Buzz";
        }
        else if (num%3==0) {
          return "Fizz";
        }
        else {
          return num;
        }
      }

/*
14. CountValues
*/