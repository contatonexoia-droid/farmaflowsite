# Estágio 1: Build da aplicação React + Vite
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte e assets públicos (incluindo ícones, favicons e imagens)
COPY . .

# Gera o build otimizado de produção na pasta /app/dist
RUN npm run build

# Estágio 2: Servidor Nginx leve para servir o site em produção
FROM nginx:alpine

# Remove a configuração padrão do Nginx e adiciona a configuração otimizada para o FarmaFlow
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos compilados do estágio de build para o diretório público do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80 (padrão esperado pelo proxy reverso Traefik do Easypanel)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
