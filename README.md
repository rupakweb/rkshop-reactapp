/*

# how to upload react app on github with git and vscode
# 10 steps ->
1: open vscode and npm start app <br>
2: open new terminal cd app-name <br>
3: npm install gh-pages --save-dev <br>
4: create repository on github <br>
5: go back vscode and open terminal type repository command <br>
  - git init
  - git status (some status red)
  - git add .
  - git status (all status green)
  - git commit -m "first commit"
  - git branch -M 'main'
  - git remote add origin https://github.com/rupakweb/repository-name.git
  - git push -u origin 'main' <br>
6: Reppository refrace add all files on your repository <br>
7: goto vscode editor open package.json file <br>
8: edit file and add <br>
<pre>
  { 
    "homepage": "https://rupakweb.github.io/repository-name",         (es string ko add krna hai hai apne repository url k sath) <br>
    "name": "top-courses",
}
</pre>
  <br>
  <pre>
  "scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",             (add this string in script opject)
    "deploy": "gh-pages -d build",              (add this string in  script opject)
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
</pre>
<br>
9: open terminal <br>
  npm run deploy
<br>
10: your app publish go to repository >  setting > pages > GitHub Pages url (open url: https://rupakweb.github.io/repository-name) 
<br>
finsish

*/
