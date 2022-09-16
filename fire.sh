#!/bin/bash
lsof -ti tcp:8080 | xargs kill -9
lsof -ti tcp:8085 | xargs kill -9
lsof -ti tcp:9000 | xargs kill -9
