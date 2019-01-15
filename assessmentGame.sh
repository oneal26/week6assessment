#! /bin/bash

# REQs
# ~~~~~~~~~~~~~~~~~~
#  Creates a variable
# Does String Comparison
# Uses Conditionals
# Uses Loops
# Does Simple Math with User Input


read -r -p"
Let's play a game, tell me your favorite number and I'm gonna do something cool with it. 
:" favnum

if [ $[$favnum % 2] -eq 0 ]
	then
		oddOrEven="$favnum is an even number, that's pretty cool right?
        "
    else
        oddOrEven="$favnum is an odd number, kinda like I'm an odd guy. 
        "
	fi
echo $oddOrEven
echo "Now check this out.."

read -r -p"
Enter your name and I'll do something else cool!!:
" name

myName="reed"
myfavnum=$[$favnum + 2]

if [ "$name" = "$myName" ]
    then
        checkName="Your name is $name, My name is $myName too!! And your favorite number is $favnum? That's 2 less than mine, $myfavnum!"
    else
        checkName="Your name is $name, that's not my name. My name is $myName. And your favorite number, $favnum, is only 2 less than mine! Mines $myfavnum"
    fi
echo $checkName