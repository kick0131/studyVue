# Sample projects

## Environment
- WLS(Ubuntu)
- node(nvm)
- npm

## Setup
```bash
# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# node
nvm install node

# Vue CLI
npm install -g @vue/cli

```

## Usage
### Vue3 + Vuetify on Vite
```bash
# Create Vite Project
npm create vite@latest
# Add Vuetify
vue add vuetify

# run application
cd <your project>
npn i
npm run dev
```


## Usage(Old)
### Create Project
1. run `vue cli`
    ```
    vue create my-project
    ```
2. install first setup
    ```
    cd my-project
    vue add vuetify
    yarn add vue-chartjs
    ```

### Execute Project
1. change into sample project directory.
    ```
    ex)
    cd google-map
    ```
1. download node_modules.
    ```
    npm ci
    or
    yarn install
    ```
1. execute run command.
    ```
    npm run serve
    or
    yarn serve
    ```

## commands
### create project
```
vue create (projectname)
```
### uninstall module
```
yarn [global] remove <module>
```

### formatter
***for Mac***
```
Shift + Option + F
```
***for Win***
```
Shift + Alt + F
```

## Configure
### Pretter
see `.prettierrc.js`

## Trouble shoot

### Enable Admin PowerShell User
`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`

## ToDo
- use [ngrok](https://ngrok.com/download)
- use [Pinia](https://pinia.vuejs.org/) PiniaはVuexの後継の位置づけ

## Vuetify Theme
write vuetify.js
```bash
export default createVuetify(
  {
    theme: {
      defaultTheme: 'dark'
    },
  }
)
```

https://next.vuetifyjs.com/en/features/theme/

### wireframe
https://vuetifyjs.com/ja/getting-started/wireframes/#section-30b530f330d730eb
