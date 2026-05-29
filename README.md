O servidor Node.js é privado — sem acesso direto pelo host. Todo acesso externo passa pelo Nginx.

---

## Como executar o projeto

```bash
docker compose up --build
```

---

## Como executar as migrations

```bash
docker compose exec node-container node command.js migrate
```

Para reverter:
```bash
docker compose exec node-container node command.js migrate:undo
```

---

## Como realizar login e usar o token JWT

**1. Criar usuário:**
```bash
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Gabriel","email":"gabriel@email.com","password":"123456"}'
```

**2. Fazer login:**
```bash
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"email":"gabriel@email.com","password":"123456"}'
```

**3. Usar o token nas rotas protegidas:**
```bash
curl http://localhost:8080/students \
  -H "Authorization: Bearer SEU_TOKEN"
```

---

## Documentação Swagger

Disponível em: http://localhost:8080/api-docs/