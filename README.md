# Bluetooth Device Scanner App

## Overview

The Bluetooth Device Scanner App is a React Native application designed to scan and display Bluetooth devices in your vicinity. It leverages the `react-native-ble-plx` library for managing Bluetooth Low Energy (BLE) operations, offering a user-friendly interface to initiate scanning for devices, display a list of discovered devices, and manage Bluetooth permissions.

## Features

- **Bluetooth Device Scanning**: Users can start a scan to discover nearby Bluetooth devices. The app displays a list of detected devices, including their names or placeholder text for unnamed devices.
- **Permission Management**: The app requests the necessary Bluetooth permissions from the user to ensure it operates correctly across different devices.
- **Responsive UI**: Implements a clean and responsive user interface, making it easy to use and understand. It includes buttons for starting scans and requesting permissions, along with a list to display the devices.
- **Device Management**: Users can see the number of devices found and get specific information about each device, such as its name and ID.

## Technical Details

- **State Management**: The application uses React's `useReducer` and `useCallback` hooks for state management, ensuring efficient updates and re-renders.
- **Custom Components**: Features custom button components (`Button` and `ButtonCard`) for interactions, enhancing the UI and UX.
- **Permissions API**: Uses a custom `permissions` module to request and verify Bluetooth permissions, critical for accessing Bluetooth functionalities.
- **Bluetooth API Integration**: The `Bluetooth` class, a singleton, encapsulates all Bluetooth operations, including scanning for devices, stopping scans, and checking the device connection status.

## How It Works

1. **App Launch**: Upon launching, the app automatically requests Bluetooth permissions from the user.
2. **Scanning for Devices**: Users can initiate a scan by pressing the "Find Devices" button. The app then displays discovered devices in real time.
3. **Device Listing**: Discovered devices are listed with their names. If a device does not have a name, it displays "Unknown Name".
4. **Permission Requests**: Users can manually request permissions again if needed by pressing the "Request Permission" button.

## Setup

To run this app:

1. Ensure you have the React Native environment set up.
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Create a development build using Expo commands:
   - First, clean the prebuild environment with `npx expo prebuild --clean`.
   - Then, execute `npx expo run:android --no-build-cache` (or `npx expo run:ios` for iOS devices) to start the app on a device or emulator.

## Dependencies

- `react-native-ble-plx`: For Bluetooth LE operations.
- `react-native-safe-area-context` and `@expo-google-fonts/roboto-slab`: For UI styling and fonts.
- `expo-status-bar`: To manage the status bar appearance.

This app demonstrates efficient use of modern React Native features and libraries to create a functional and user-friendly Bluetooth device scanner.
