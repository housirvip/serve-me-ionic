# serve-me-ionic

> Build with [Ionic](https://ionicframework.com/), version 4

## How to use

```shell script
# after clone
cd serve-me-ionic
npm install

# open in browser
ionic serve

# if you have not install ionic
npm install -g @ionic/cli
# if you have not cordova
npm i -g cordova
#if you want to build android apk
ionic cordova build android
```

## Bug

```shell script
# commands with "--prod" is unavaliable now
# just like below shows
ionic build --prod
ionic cordova build android --prod
ionic cordova prepare android --prod

# delete "--prod" instead
# just because the firebaseX plugin
# wait this plugin to be fixed by it's author
```

## Remember

change the serve-me-ionic/src/environments/environment.ts
if you need to change the server ip address

## Prototype

> https://org.modao.cc/app/be72e5e3b68ff7c3efe0e0d0e3bdafb0429a96a7
