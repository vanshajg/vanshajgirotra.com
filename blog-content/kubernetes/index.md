---
title: "Kubernetes notes"
description: "Kubernetes notes I took from the internet"
slug: "kubernetes-notes"
tags: ["notes", "kubernetes", "devops"]
date: "1"
private: false
---

# Introduction
An intro to K8s

## What is Kubernetes:
Kubernetes runs your workload by placing containers into Pods to run on Nodes. A node may be a virtual or physical machine,depending on the cluster.

## what is pod : 
smallest unit in k8s, abstraction over containers
usually 1 application (container) per pod
each pod has its own IP address which is internal IP address
they can die fairly easily because of multiple reasons so when new ones are created new IP is given to them


## Services
service is used to give a static IP address to a pod. 
as its IP address doesn't change it is used to help inter pod communication
service has permanent IP address
lifecycle of POD and service is not connected 
2 types of service : 
internal , external
external service can be used to access that particular pod from outside
service is also a load balancer


## ingress
used to route traffic to k8s cluster
because the external service has IP address like 10.102.23.33:8080 so for ease of access ingress is the one who gets the initial request which has a easier name : eg myapp.com and routes it to an IP address


## configmap and secrets
configmap is used to store enviroment variables in plain text format. while secrets is a base64 encoded format.


## volumes
used for persisting data. the data storage can be local / external. k8s doesn't manage persistance on its own


## deployment:
blueprint for pods 
abstraction over pods. used to specify number of pods needed for a particular application
this is used for stateless applications only


## statefulset
this is similar to deployment but used for applications which hold state .like DB, elastic search 



# Kubernetes Archetecture

## Inside a Node
There are 2 types of nodes, worker nodes and master nodes. worker nodes are used to do your buisness logic. master nodes are used to control them
each worker node has: 
1. container runtime: Eg docker
2. Kubelet: used to control the runtime and node
3. Kube Proxy: intelligently forwards request to requested node. eg. redirect to a app pod in same node instead of a different node thus saving network call

each master node has:
1. API server: gateway to control the master -> slave nodes, also authenticates requests
2. scheduler: used to decide which node should the pod go (checks node load % or some other data point). kubelet starts the pod
3. controller manager: detect state changes like pod crashes. CM sends request to scheduler and the cycle continues.
4. etcd: key value store of cluster state. every change is saved in this key-value store. scheduler, controller manager takes data from this store to decide actions


# Minikube and Kubectl
minicube : A 1 node cluster which has master and worker processes on the same node
kubectl: CLI for kubernetes cluster. makes request to the api server on the master

# Layers of abstraction
deployment manages replicaset. and replicaset manages pods. pods is an abstraction over containers.
everything below deployment is managed by k8s








