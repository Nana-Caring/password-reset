# Password Change UI

This project provides a user-friendly interface for changing passwords. It includes components for inputting the current password, new password, and confirming the new password. The application also features a password strength indicator to help users create secure passwords.

## Project Structure

```
password-change-ui
├── src
│   ├── components
│   │   ├── PasswordChangeForm.js
│   │   ├── PasswordStrengthIndicator.js
│   │   └── Button.js
│   ├── pages
│   │   ├── ChangePassword.js
│   │   └── Success.js
│   ├── services
│   │   └── api.js
│   ├── utils
│   │   └── validation.js
│   ├── styles
│   │   ├── components.css
│   │   └── main.css
│   ├── App.js
│   └── index.js
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
└── README.md
```

## Features

- **Password Change Form**: Allows users to input their current password, new password, and confirm the new password.
- **Password Strength Indicator**: Provides visual feedback on the strength of the new password.
- **Success Page**: Displays a confirmation message after a successful password change.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd password-change-ui
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.