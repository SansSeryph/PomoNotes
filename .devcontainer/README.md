# Setup via VS Code Remote Containers With Ruby on Rails

[VS Code Remote Containers Development docs](https://code.visualstudio.com/docs/remote/remote-overview)

## Prerequisites

* [docker](https://docs.docker.com/engine/install/) (tested with 19.03.13, build 4484c46d9d)
* [docker-compose](https://docs.docker.com/compose/install/) (tested with 1.27.4, build 40524192))
* VS Code
* [VS Code Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
## Steps

1. Clone the repository
1. Open cloned directory in VS Code
1. When prompted, click "Reopen in Container"
1. Wait for docker image to build
1. Open a new terminal inside VS Code. By default this will occur within the development container
1. Install server-side dependencies

    ```
    rvm install $(cat .ruby-version)
    bundle install
    ```
1. Install client-side dependencies

    ```yarn install```

1. Run the [test suite](../README.md#Test_Suite)

    ```bundle exec rspec```
1. Serve the rails app.

    ```rails s -b 0.0.0.0```

1. Run the dev webpack server

    ```bundle exec bin/webpack-dev-server```

1. Visit the app in your browser

    ```http://localhost:3000```


## Inspired by:

https://github.com/microsoft/vscode-dev-containers/tree/master/containers/ruby-rails

https://verschaffelt.be/2019/06/24/remote-development-with-visual-studio-code/

https://github.com/atona/vscode-remote-try-rails

https://github.com/microsoft/vscode-dev-containers/blob/master/containers/javascript-node-postgres/.devcontainer/docker-compose.yml
