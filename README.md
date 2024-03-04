# Real-time Chat Package

This package provides a simple real-time chat server using Socket.io for communication and the `data-decr-encr` npm package for message encryption and decryption.

## Installation

You can install this package via npm:

```bash
npm install rt-chat
```

## Usage

```javascript
const server = require('rt-chat');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Features

- Real-time communication using Socket.io.
- Encryption and decryption of messages for secure communication.

## API

### Events

- **join(username)**: Broadcasted when a new user joins the chat. `username` is the username of the new user.
- **message(encryptedMessage)**: Broadcasted when a user sends a message. `encryptedMessage` is the encrypted message sent by the user.
- **userLeft(username)**: Broadcasted when a user disconnects from the chat. `username` is the username of the disconnected user.

### Methods

- **listen(port[, callback])**: Starts the chat server on the specified port. Optionally, you can provide a callback function to be called when the server starts.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
