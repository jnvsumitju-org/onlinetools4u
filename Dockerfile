# syntax=docker/dockerfile:1

###############################
# Build stage
###############################
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
RUN npm ci

# Copy source
COPY . .

# Build static assets
RUN npm run build

###############################
# Runtime stage
###############################
FROM nginx:1.27-alpine AS runtime

# Remove default config and add SPA-friendly one
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


