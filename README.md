# plugin-manager
A plug-in visualizer and manager that uses a plugin catalog API
## Getting Started

To get started with the plugin-manager application, follow these steps:

1. **Clone the Repository**: 
```
git clone https://github.com/isaacsoto/plugin-manager
cd plugin-manager
```
2. **Run the Development Environment**:

    There's a convenient shell script provided to automate the setup and running of the development environment. To use it, follow these steps:

    a. Open a terminal in the root folder of the repository.

    b. Run the script to set up the Vue app and Electron app in development mode:
```
bash start-dev.sh
```
3. **Access the Application**:

      The application should now be running. You can access the Vue app at `http://localhost:8080/`, and the Electron app should launch automatically.

## Notes

- The Vue app development server will be running in the background. You can access it by navigating to `http://localhost:8080/` in your browser.

- The Electron app should launch automatically after running the script. If it doesn't, you can manually navigate to the `electron-plugin-manager` folder and run `npx electron .` to start it.

- This script is tailored to the provided project structure. If your setup is different, make sure to adjust the paths and commands accordingly.

- For production deployment, remember to build the Vue app and package the Electron app appropriately.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

