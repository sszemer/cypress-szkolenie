FROM cypress/base:16

WORKDIR /app

COPY . /app/

RUN npm ci
RUN npx cypress install
RUN npx cypress run
RUN npx mochawesome-merge "./cypress/results/*.json">mochawesome.json
RUN npx marge mochawesome.json --inline
RUN mv mochawesome-report/mochawesome.html mochawesome-report/index.html