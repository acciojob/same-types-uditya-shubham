function isSameType(value1, value2) {
  //your js code here
	if(typeof(value1)==typeof(value2))
		return true;
		else if ((isNaN(value1)&& !isNaN(value2)) ||(!isNaN(value1)&& isNaN(value2)) )
		return true;
	else if(typeof(value1)!=typeof(value2))
	   return false;

  else if(isNaN(value1)==isNaN(value2))
		return true;
	
	
	
	
	
	
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
