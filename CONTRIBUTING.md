There are two packages here in the packages directory.
- ohu(initialize project template)
- ohu-scripts(contains the scripts for setting up the development server, buildiing production builds,etc)

### Set Up
```
yarn add lerna -g
yarn install

cd package/ohu-scripts
npm run dev
```

### Test
```
cd package/ohu-scripts
yarn link
cd <dir>
yarn link 'ohu-scripts'
```

### Publish
```
npm run build
npm run publish
```