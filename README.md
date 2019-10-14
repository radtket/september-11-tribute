# ICESept11Site
## <b>About</b>
one page website honoring HSI personnel who supported recovery and security efforts following the September 11th attacks
<br/>
<br/>
## <b>How to set up your local environment</b>

### 1) Install Node if not already installed
Check to see if you have NodeJS installed by running the following command in the Terminal:
`node -v`

If you do not get a version number back, then download Node from 
https://nodejs.org/en/download/

Choose the standard installation which will install Node.js v10.15.3 to `/usr/local/bin/node` and Node Package Manager (npm v6.4.1) to `/usr/local/bin/npm`

Run `node -v` again to verify which version of Node you have.\
Run `npm -v` to verify which version of npm you have.
<br/>
<br/>

### 2) Create an SSH key for your computer
This identifies and authenticates your computer to our private GitHub repository.

Open the following guide on a new browser tab: Booz Allen's enterprise github help page:  https://help.github.com/en/enterprise/2.15/user/articles/checking-for-existing-ssh-keys

If the Terminal outputs `No such file or directory`, then right-click on the link to generate a new SSH key and open this page in yet another new tab.\
Direct link to that page and section:  
https://help.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key
You don't *need* to do steps 1 through 3 found on this page. Just bear in mind that skipping these steps means you will need to type your passphrase everytime you push to the Github repo.
<br/>
<br/>
### 3) Clone the github repo
Choose where on your local hard drive you want to keep Github repos. 
A popular choice is to create a folder called Dev off your user directory `~/Dev/`

In the Terminal -
1) Change directories to home; i.e., the user directory: `cd ~/`
2) Create the Dev folder: `mkdir Dev`
3) Optional: View the contents of current directory including hidden files: `ls -a`
4) Change directories to Dev: `cd Dev`
5) Optional: Confirm present working directory's file path: `pwd`

In the browser, navigate to the HSI project's Github repo located at 
https://github.boozallencsn.com/HSIWeb/ICESept11Site

Click the green Clone button\
Click the small blue "Use SSH" hyperlink\
Click the clipboard button to copy the URL.

Back in the Terminal at `~/Dev/`, type  
`git clone` then type a space and paste in what you copied:
`git@github.boozallencsn.com:HSIWeb/ICESept11Site.git`
<br/>
<br/>

### 4) Install node_modules for the project
Change directory to the project root:\
`cd ~/Dev/ICESept11Site`

Add or update dependencies on the project:\
`npm i`\
*-This is short for `npm install`, which reads the package.json to create a list of dependencies and uses package-lock.json to inform which versions of these dependencies to install. If a dependency is not in package-lock.json, it will be added by `npm i`; i.e., this command will install any missing dependencies in the node_modules folders.*
<br/>
<br/>
### 5) Install text editor of your choice 
Install the text editor or IDE of your choice, such as Visual Studio Code.\
Browse to `~/Dev/ICESept11Site` and open the project's root folder. 

To see a list of other possible commands to run on project, open package.json and see "scripts" property. 

To see a list of dependencies required for this project, see the package.json's "devDependencies" property.
<br/>
<br/>
### 6) Daily workflow
Build the project\
`npm run build`\
*-Compiles the SCSS into CSS and any non-web standard versions of JS into web-ready JS, and saves those files into the docs folder. After running this command, any file in the docs folder is technically ready to be dragged into SharePoint.*

Start the web server and watch for changes made to local files\
`npm run serve`\
 *-A new browser tab opens at web address http://localhost:3000/*
<br/>
<br/>
#### Troubleshooting tips:
If you cannot get server up and running, try the following:
1. Remove package-lock.json, package.json, and the whole node_modules folder.
2. Reinstall node_modules by running `npm i` at the project root.

If you get a message about an audit fix, go ahead and select to run the automatic audit fix. If the message says you should manually resolve a problem, it is up to your discretion to read what the problem is (the Terminal will include a URL to more details) and decide which actions to take or which dependencies to update.
<br/>
<br/>
## <b>Git Conventions</b>
See what branch you are on\
`git branch`

Switch to the branch you want to use as your starting point\
`git checkout branchName`

Fetch references to what is currently on the remote repository's version of the branch\
`git fetch origin branchName`

Pull the code that is currently on the remote repository's version of the branch into your local version of the branch\
`git pull origin branchName`

Before you start making changes, run `npm run build` and `npm run serve` to see what the design looks like in the browser.

Change HTML, SCSS, and JS files in the `src` folder as desired.
<br/>
<br/>
#### When you like the changes you have made and/or you have reached a good stopping point, commit and push your changes to the remote.
1) See which files you changed\
   `git status`

2) Stage the file(s) you want to commit\
   `git add filename` 

3) Commit the file(s). When writing your git commit message, please use the following format:\
   `git commit -m "branchName: adds, removes, or changes something in filenameA and filename B"`

4) Finally, push the file(s) up to the remote repository\
   `git push`

     - If it is the first push from your local, use 
    `git push -u origin git@github.boozallencsn.com:HSIWeb/ICESept11Site.git`

    - If you created your own new branch on your local that you are pushing for the first time, use `git push -u origin myNewBranchName`

5) Confirm on the remote Github account that your commit reached the remote.\
   -Open https://github.boozallencsn.com/HSIWeb/ICESept11Site and refresh the browser page.
<br/>

#### Resolving Merge Conflicts

In some cases, after `git pull` or `git checkout branchName`, a merge conflict will arise. Often, git will automatically resolve such conflicts. Occasionally, you will need to manually select which line changes you want to keep in the listed problem file(s).<br/>
1) Open that file in the text editor.<br/>
2) Search for `<<<`. This marker indicates the start of the remote's version of the code.<br/>
3) Search for `---`. This marker indicates the break between the remote's version and your local's version.<br/>
4) Search for `>>>`. This marker indicates the end of your local's version. <br/>
5) Okay! Use your mouse to select and delete EITHER what is above the break OR what is below the break. Also be sure to delete the markers. Save the file.
6) Back in the Terminal, add that fixed version of the file<br/>
 `git add fixedFileName`<br/>
7) Confirm you have no other merge conflicts to resolve by running<br/>
 `git status`<br/>

 