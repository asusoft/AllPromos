## Step 1: Make a clone of this repository

First, you will need to clone the repository to your local machine.

```bash
git clone https://github.com/asusoft/AllPromos
```

## Step 2: Install dependencies

Ensure you navigate to the project directory by running the

```bash
cd PATH_TO_PROJECT
```

before proceeding with the installation.

### Install Node.js and npm

Ensure you have [Node.js](https://nodejs.org/) installed on your machine. You can download it from the official website or use a package manager like [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage Node.js versions.

### Install Project Dependencies

Run the following command to install the project's dependencies using npm:

```bash
# using npm
npm install
```

Additionally for IOS, you need navigate to the ios directory and run this command

```bash
cd ios
pod install
```

Then navigate back to the project directory

```bash
cd ..
```

## Step 3: Start the Metro Server

You will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

#
```

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
