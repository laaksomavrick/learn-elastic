.PHONY: up migrate run down

up:
	@docker-compose -f build/docker-compose.yml up

down:
	@docker-compose -f build/docker-compose.yml down

run:
	@yarn start