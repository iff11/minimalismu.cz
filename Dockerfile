FROM rails:onbuild

# Update and install basics
RUN apt-get update && apt-get install -y git curl tar bzip2

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs

WORKDIR /usr/src/app/frontend
RUN npm install
RUN npm install -g bower
RUN bower install --allow-root
RUN npm rebuild node-sass
