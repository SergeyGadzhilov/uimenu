FROM node:alpine AS builder

WORKDIR /usr/build

COPY . .

RUN npm ci --only=production \
    && npm install turbo --global \
    && npm install @rollup/rollup-linux-x64-musl \
    && npm run build

FROM node:alpine

WORKDIR /usr/app

COPY --from=builder /usr/build/node_modules ./node_modules
COPY --from=builder /usr/build/package.json ./package.json
COPY --from=builder /usr/build/apps/client/dist ./apps/client/dist
COPY --from=builder /usr/build/apps/api/dist/prisma ./apps/api/dist/prisma
COPY --from=builder /usr/build/apps/api/dist/src ./apps/api/dist/src
COPY --from=builder /usr/build/apps/client/dist ./apps/client/dist

EXPOSE 3000