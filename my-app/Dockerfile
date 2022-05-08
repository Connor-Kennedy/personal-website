FROM node:latest
WORKDIR /app
COPY . .

# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install .
RUN npm run build
CMD npm run start