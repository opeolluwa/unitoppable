test:
	@echo "The answer to everything is here!"

frontend:
	cd frontend && yarn dev

backend:
	cd backend && cargo shuttle run

 run:	
	docker compose up