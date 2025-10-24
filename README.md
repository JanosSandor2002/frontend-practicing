# 1. expo cli

# Quickstart - Expo + React Native + TypeScript

# 1. prerequisites

# Node.js, Git telepítve, opcionálisan Android Studio / Xcode

npm install -g eas-cli # EAS CLI a buildhez

# 2. create

npx create-expo-app my-expo-app

npx create-expo-app 03 --template blank

npx create-expo-app 03 --template blank-typescript

# TypeScript verzió

npx create-expo-app my-expo-app --template blank-typescript

# 3. run

cd my-expo-app
npx expo start

# android: a

# ios: i

# web: npm run web

# 4. environment variables

# .env fájl a gyökérben

# EXPO_PUBLIC_API_URL=https://api.example.com

# EXPO_PUBLIC_ENV=production

# 5. build

eas login
eas build:configure
eas build -p android --profile production
eas build -p ios --profile production

# lokális build

# eas build --local

# 6. extra commands

npm run lint
npm run reset-project
npm run android
npm run ios
npm run web
