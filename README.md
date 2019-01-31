# awesomeness

:sunglasses: All awesome curated lists from GitHub.

This project aims to provide a simple way to access all awesome curated lists that exists in GitHub. My intent with this project was also to test performance and UI look'n'feel of ionic apps in all target platforms.

## Setup

`awesomeness` is an ionic project forked from [The Ionic Super Starter](https://github.com/ionic-team/starters/tree/master/ionic-angular/official/super).

In order to serve it do as follows

```bash
$ ionic serve
```

If you don't have `ionic-cli` installed, take a look [here](https://ionicframework.com/docs/installation/cli).

### Web

To generate a web (PWA) release do

```bash
$ ionic build --prod --service-worker -- --base-href /awesomeness/
```

Every release is updated in `gh-pages` branch and is available at [https://rubenochiavone.github.io/awesomeness/](https://rubenochiavone.github.io/awesomeness/).

### Android

To generate an android release do

```bash
$ ionic cordova build android --prod --release
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keys/awesome-release-key.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk awesomeness
$ zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk app-release.apk
```

Keystore password is `awesomeness`.

### iOS

To generate an iOS release do

```bash
$ ionic cordova platform add ios
$ ionic cordova build ios --prod
```

## Contributing

Feel free to contribute, no guidelines to contribute ATM.

## License

MIT license, see [LICENSE.txt](LICENSE.txt).
