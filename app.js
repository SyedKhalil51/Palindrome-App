
function palindromeChecker()
{
    var inputStringValue = document.getElementById('string').value; 
    var reversePalindromeValue= ""; 
    for(var i=inputStringValue.length-1; i>=0; i--)
    {
        reversePalindromeValue = reversePalindromeValue + inputStringValue[i];
    } 
    if(inputStringValue == reversePalindromeValue)
    {
        document.getElementById('resultstring').innerText=   "Yes, Given word " +inputStringValue+ " is a palindrome";
    } 
    else
    {
        document.getElementById('resultstring').innerText= "No, Given word " +inputStringValue+ " is not a palindrome";
    } 
} 