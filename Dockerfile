# # Base image
# FROM node:20-alpine

# # Set working directory
# WORKDIR /app

# # Copy dependencies and install
# COPY package*.json ./
# RUN npm install

# # Copy source code
# COPY . .

# # Expose port
# EXPOSE 3000

# # Run app
# CMD ["node", "server.js"]

# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only dependency files first to optimize cache
COPY package.json ./
COPY package-lock.json ./

# Install dependencies using npm ci
RUN npm ci --omit=dev && npm cache clean --force

# Copy application source code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]

