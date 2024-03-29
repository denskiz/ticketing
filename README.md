# Ticketing

E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

Currently building the auth back end

Using node v14.13.0

nvm install --lts

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

## Technologies Used

Docker, Kubernetes, Typescript on Backend

Backend: Node, Express, JSON webtoken, MongoDB

Frontend: Server Side Rendering with NextJS
Next not writen in TypeScript
Bootstrap 5 alpha
https://v5.getbootstrap.com/

## To get Started

isthisunsafe

ticketing.dev

minikube start --driver=virtualbox

minikube addons enable ingress

skaffold dev

We are using skaffold to run all the kubernetes clusters and docker pods to save time deploying and rebuilding them all the time.

Get inital Props is the only place where we can fetch data during the server side rendering process

loadbalancer service name and namespace:

http://ingress-nginx-controller.ingress-nginx.svc.cluster.local

## NPM Packages

npm login

npm publish --access public

npx force-unpublish pkg-name 'common'

npm update @detickets/common

# Event Bus

Using NATS Streaming Server to share events with all the different services in the application

https://docs.nats.io/
