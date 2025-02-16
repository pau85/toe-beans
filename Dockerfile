# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install git
RUN apt-get update && apt-get install -y git

# Clone the repository
RUN git clone https://github.com/pau85/toe-beans .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
