# automat ethe base layer generation for the Lambda Function

#remove the container first it exits : avoid duplication
#docker rm layer-container

#build a base layer
docker build -t base-layer .

#rename it to layer container
docker run --name layer-container base-layer

#copy the generated zip artifact to our so that our CDK can use it
docker cp layer-container:layer.zip . && echo "created layer.zip with updated base layer..."