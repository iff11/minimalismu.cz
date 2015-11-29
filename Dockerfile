FROM rails:onbuild

# Update and install basics
RUN apt-get update && apt-get install -y git curl nano vim tmux tar bzip2

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs

WORKDIR /usr/src/app/frontend
RUN npm install
RUN bower install
