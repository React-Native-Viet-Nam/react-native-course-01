# RN Course 01

> App : Todo List Application

## Dev

```sh
npm run start
```

```sh
# list device
emulator -list-avds
# start device
emulator -avd Pixel_3a_API_34_extension_level_7_x86_64
# start with non-interactive mode/deamon mode
start /B emulator -avd Pixel_3a_API_34_extension_level_7_x86_64 > output.txt
```

## Resources

1. [Code](https://github.com/academind/react-native-practical-guide-code)
2. [Course](https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197340#overview)

## Debug

### Expo

[Expo Tools for VSCode](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "expo",
      "request": "attach",
      "name": "Debug Expo app",
      "projectRoot": "${workspaceFolder}",
      "bundlerPort": "8081",
      "bundlerHost": "127.0.0.1"
    }
  ]
}
```
