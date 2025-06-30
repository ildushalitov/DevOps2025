#!/bin/bash

TAG="latest"

usage() {
  echo "Использование: $0 [-t тег]"
  exit 1
}

while getopts "t:" opt; do
  case $opt in
    t)
      TAG=$OPTARG
      ;;
    *)
      usage
      ;;
  esac
done

echo "Собираем образ с тегом: $TAG"

docker build -t my-node-app:$TAG .

