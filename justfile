set shell := ["zsh", "-cu"]

@install:
    yarn install

@dev:
    yarn dev

@format:
    yarn prettier
    yarn lint

@build:
    yarn build
