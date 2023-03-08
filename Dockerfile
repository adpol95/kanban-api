# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

EXPOSE 80/tcp
EXPOSE 80/udp
EXPOSE 443/tcp
EXPOSE 8081/udp

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["npm", "start"]

