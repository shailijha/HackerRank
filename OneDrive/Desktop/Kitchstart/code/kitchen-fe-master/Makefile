# Manual deployment to ECR
repo-name = 896646865062.dkr.ecr.us-east-2.amazonaws.com
image-name = $(repo-name)/kitchen-frontend-service:latest

deploy-image: registry-login build-image push-image

run-local: build-image run

registry-login:
	@echo "Login to registry..."
	aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin $(repo-name)

build-image:
	@echo "Building image..."
	docker build --no-cache -t $(image-name) .

push-image:
	@echo "Pushing image to ECR..."
	docker push $(image-name)

run:
	@echo "Running docker image locally..."
	docker run -p 8080:80 $(image-name)
