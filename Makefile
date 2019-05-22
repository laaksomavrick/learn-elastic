.PHONY: up migrate run

up:
	@docker-compose -f build/docker-compose.yml up

migrate:
	@scripts/migrate.sh

run:
	@scripts/run.sh