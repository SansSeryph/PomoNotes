# [Choice] Ruby version: 2, 2.7, 2.6, 2.5
ARG VARIANT=2.7.2
FROM mcr.microsoft.com/vscode/devcontainers/ruby:${VARIANT}

ARG NODE_VERSION="lts/*"
RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"

# [Optional] Uncomment this section to install additional OS packages.
 RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
     && apt-get -y install --no-install-recommends vim xvfb

# install chrome
RUN mkdir /root/chrome/
RUN wget -O /root/chrome/chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt install -y /root/chrome/chrome.deb

# [Optional] Uncomment this line to install additional gems.
# RUN gem install <your-gem-names-here>

# [Optional] Uncomment this line to install global node packages.
RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g yarn" 2>&1

COPY entrypoint.sh /root/entrypoint.sh
