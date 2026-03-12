# Development Environment Setup
It helps to have a local environment to test your code. This document is meant to assist in getting a copy of the codebase running on your own computer for testing and development.

- [Initial Setup](#initial-setup)
    - [Linux](#linux)
    - [MacOS](#macos)
    - [Android](#android)
    - [Windows](#windows)
- [Dev Environment](#dev-environment)
    - [Git](#git)
    - [API](#api)
    - [Yarn](#yarn)
- [Launching](#launching)
    - [Viewing](#viewing)
    - [Closing](#closing)
- [Compiling](#compiling)
    - [Go](#go)
    - [Vite](#vite)
- [Advanced](#advanced)
    - [Database](#database)
    - [Configuration](#configuration)
    - [SOPS](#sops)
    - [Nginx](#nginx)

## Initial Setup
Before we can execute the code we need a shell to run it in. Essentially we need a terminal to run commands in. If you aren't familiar with the command line or text interfaces don't worry. Everything you need will need to type into the terminal will be listed on this page to be easily copied and pasted.

Executing commands on the terminal is just like sending a text: you compose or paste a short message and press 'return' to send it. The command line can be demanding in regards to spaces, capitalization and punctuation. Try to be patient with yourself, it gets easier the more you use it.

Once you have a terminal you can use it to install the required software:

- Git: used for tracking and merging changes to the project files. It allows us to work collaboratively, combining our edits together and keeping a history of changes, like a shared folder with an undo feature.
- Go (golang): Go is the programming language used to write the API that powers the backend. You need go installed in order to compile the api after making changes.
- NodeJS (npm): Node is used to generate the files that compose the frontend. It's needed run a test version of frontend sites locally.

### Linux
Congratulations, Linux makes this simple. If you don't know how to open the terminal you can probably find it in your launcher menu by searching for `terminal`, there's usually also a hotkey to open the terminal: `Ctrl + Alt + t` works on many systems, including Ubuntu and Fedora.

Use the terminal to install **git**, **golang**, and **npm**:

- Debian/Ubuntu: 
    ```
    sudo apt install git golang npm
    ```
- CentOS/RHEL:
    ```
    sudo yum install git golang npm
    ```
- Fedora:
    ```
    sudo dnf -y install git go npm
    ```
- Arch:
    ```
    sudo pacman -S git go npm
    ```

### Mac OS
Macs come with a great terminal, first use it to install **Homebrew**, which you'll use to get the packages required to run the development environment.

Open the terminal by searching for `terminal` in Spotlight (you can open **Spotlight Search** with `command + space`

Use the terminal to install **Homebrew**:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

(This uses the bash shell to download and run the install script)

Once **Homebrew** is installed you can use it to install **git**, **golang**, and **npm**:

```
brew install git golang npm
```

### Android
The **termux** app is perfectly suitable for running the development environment. Simply install it from the **Play Store** (or the **F-Droid** app if you're cool)

Once **Termux** is installed, open the app and use the terminal to install **git**, **golang**, and **npm**:

```
pkg install git golang npm
```

### Windows
It's technically possible to use the **cmd** application in Windows as a terminal, but the amount of extra effort needed to make it work is simply not worth it. Instead you should use WSL, the Windows Subsystem for Linux. WSL is an option from Microsoft that allows you to run a complete Linux terminal from within Windows.

Follow these steps to set up WSL, [you can find the official documentation here](https://learn.microsoft.com/en-us/windows/wsl/setup/environment):

1. Open a **PowerShell** window as administrator:
    - Open the start menu
    - Search for `powershell`
    - Right-click on **Windows PowerShell** and select **Run as administrator**
2. Run this command in **PowerShell**:
    ```
    wsl --install
    ```
3. Complete the installation and restart your machine
4. Open **Ubuntu** from the start menu to start setting up Linux
5. Pick a username and password for WSL
6. Update WSL:
    ```
    sudo apt update && sudo apt upgrade
    ```
7. Install **git**, **golang**, and **npm**:
    ```
    sudo apt install git golang npm
    ```

## Dev Environment

### Git
To use git with GitHub we must first be authorized:

1. Create an SSH keypair (if you don't already have one) by running:
    ```
    ssh-keygen -t ed25519
    ```
2. Follow the system defaults, you can leave the password blank.
3. View your public key by running:
    ```
    cat ~/.ssh/id_ed25519.pub
    ```
4. Go to [your Keys page on GitHub](https://github.com/settings/keys) and click **New SSH Key**
5. Paste your public key into the **Key** field, leave **Key Type** as "Authentication Key", and give it a descriptive **Title** like 'Laptop'

If you run into any issues try consulting [GitHub's official documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Navigate to your **home directory** (or wherever you want to put the code for the project): 

```
cd ~
```

(**c**hange **d**irectory to **~**, which means **home**)

Next, copy the repository from GitHub:

```
git clone git@github.com:absentbird/TESC-Farm.git
```

Now change directory into the project:

```
cd TESC-Farm
```

Look at the files:

```
ls
```

(**l**i**s**t, or as I think of it **l**ook at **s**tuff), you should see all the same files as the main branch on GitHub.

You can see the other branches of the project by running:

```
git branch -r
```

(-r to include remote branches on GitHub), and switch to them by running:

```
git checkout name
```

Where 'name' is the name of the branch you'd like to switch to.

### API
The API is written in Go and is compiled into a binary to run on the server. Before you launch the API, make sure you have a recent version of the Go programming language installed by running this command from the **TESC-Farm** directory:

```
sudo ./scripts/install_go.sh
```

Source files for the API are located in the **api** directory, to enter the directory from **TESC-Farm** simply run:

```
cd api
```

To run in development mode you can launch the API with:

```
go run cmd/farmapi.go
```

(you must be in the **api** directory to use this command)

### Yarn
Used for frontend environments. Before running **yarn** it must be installed via **npm**:

```
sudo npm install --global yarn
```

Once **yarn**'s installed it can be used to get all required files by running:

```
yarn install
```

Which should work in any one of the frontend directories, e.g. **taskpanel**.

To set up a new frontend directory you can run:

```
yarn create vuetify
```

From the **TESC-Farm** directory. Name the new directory, follow the recommended options, and use TypeScript.

Yarn is used in conjunction with vite to host the development version of frontend sites by running:

```
yarn vite
```

(you must be in the site's directory)

## Launching
To launch the development environment you can run:

```
./scripts/launch.sh
```

(you must be in the **TESC-Farm** directory to run this command)

Select which frontend to launch and hit **return**.

Changes made to frontend sites should load automatically, but changes to backend files will require the api to be recompiled. To do so quit and relaunch.

### Viewing
The frontend of the local dev environment is hosted at http://localhost:3000 while the backend is hosted at http://localhost:8000

Keep in mind that the local dev environment is only visible on your computer, no other devices on the network can see it or interact with it.

### Closing
To close the development environment simply press `Ctrl + C`

## Compiling
Once the code is stable you can compile it by running:

```
make
```

(you must be in the directory you want to compile)

The **make** command executes commands from a file named **makefile** in the same directory. Code must be compiled before it will take effect on the production server.

### Go
To compile the API with go run the following command from the **api** directory:

```
go build -o farmapi cmd/farmapi.go
```

### Vite
To compile a frontend site into static files, which are then stored in **dist**, you can run: 

```
yarn vite build
```

(you must be in the directory of the site you want to compile)

## Advanced

### Database
You should not need to access the database directly.

The development database is stored in **api/assets/data-dev.db** in SQLite3 format.

To update the dev database you can run:

```
cp api/assets/data.db api/assets/data-dev.db
```

(you must be in the **TESC-Farm** directory to run this command) this turns the development database into a copy of the production database.

### Configuration
You should not need to change the configuration settings.

The development config file for the api is located at **api/configs/config-dev.yaml**. For frontend sites the dev variables are locates in **directory/.env.development** where **directory** is the directory name of the site.

### SOPS
To modify secret values used in the production system you can use **sops**. To install **sops** follow the instructions here: https://github.com/getsops/sops/releases

Next you'll need to generate an **age** keypair and have your public key added to the **api/.sops.yaml** file and then update the keys in the **secrets.yaml** file. This must be done by someone who already has permission to view the secrets.

Once you have sops configured you can edit the secret values by running:

```
sops api/configs/secrets.yaml
```

(you must be in the **TESC-Farm** directory)

### Nginx
Nginx is the webserver which manages requests in production. The configuration files can be found in **api/configs** and every site directory, always named **nginx.conf**. You can learn more about Nginx configurations here: https://nginx.org/en/docs/beginners\_guide.html
