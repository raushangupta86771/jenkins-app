# Use the official Node.js image.
FROM node:20-alpine

# Create and set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json files.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the port that the app will run on.
EXPOSE 3000

# Define the command to run the app.
CMD ["node", "app.js"]
