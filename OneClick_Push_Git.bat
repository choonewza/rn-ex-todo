SET curTimestamp=%date:~-7,2%_%date:~-10,2%_%date:~-4,4%_%time:~0,2%_%time:~3,2%
echo %curTimestamp%

git add -A
git commit -m "%curTimestamp%"
git push origin master
git status

pause