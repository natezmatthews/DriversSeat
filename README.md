# Driver's Seat Take-Home Assignment

## Requirements

_This section is copied from [Igor Mandello's template](https://gist.github.com/Igormandello/57d57ee9a9f32a5414009cbe191db432)._\
You will only need Node.js

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v15.10.0

    $ npm --version
    7.5.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Steps to run the application the first time
1. Clone this repository. Github has instructions for how to do that [here](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories).
1. Enter the directory of the project: `cd DriversSeat`
1. Install the dependencies:
`npm install`
1. Start the application: `npm start`

## Steps to run the application in the future
### If there have been changes to the repository
1. Pull down the new changes using `git pull`. If you encounter an error, ask for help, since there are too many possible errors to capture in this README.
1. Run `npm install` again, since there may be new dependencies to install, or old dependencies to update.
1. Start the application: `npm start`

### If there have not been any changes to the repository
Simply run `npm start`!