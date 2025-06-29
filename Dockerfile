FROM ruby:3.1.7 AS build
RUN gem install bundler jekyll

WORKDIR /build
COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install

COPY . .
RUN bundle exec jekyll build

FROM nginx:alpine3.22-slim AS final
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/_site /usr/share/nginx/html