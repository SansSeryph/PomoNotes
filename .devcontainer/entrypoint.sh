#!/bin/bash
set -ex

# `docker-compose.yml` defines several volumes that cache dependencies
# to speed up development after the initial build of the dev container.
# Unlike all the other cache volumes, the `node_modules` cache volume is nested
# inside another mount point -- VS Codes' `workspace` mount point.
# This odd situation requires that we re-affirm ownership of the cached
# `node_modules` directory each time the container starts.
sudo chown -R vscode /workspace/node_modules

# Wait for VS Code to remote in
sleep infinity