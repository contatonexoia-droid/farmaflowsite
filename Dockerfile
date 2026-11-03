# Estágio 1: Instalação e Build
FROM node:18-alpine AS builder
WORKDIR /app

# Instala dependências do sistema necessárias para pacotes nativos
RUN apk add --no-cache libc6-compat

COPY package*.json ./

# Instala incluindo dependências opcionais para o Tailwind funcionar
RUN npm install --include=optional

COPY . .
RUN npm run build

# Estágio 2: Servir os arquivos estáticos com Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
