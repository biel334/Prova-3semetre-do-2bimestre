# Normalização do Banco de Dados (escola)

## 1ª Forma Normal (1FN)

**Regra:** todos os atributos devem ser atômicos (sem listas, sem grupos
repetidos), e cada tabela deve ter uma chave primária.

**Aplicação:** todas as tabelas (`alunos`, `materias`, `professores`,
`notas`, `presencas`) possuem:
- Apenas valores atômicos em cada coluna (nenhuma coluna guarda múltiplos
  valores, como uma lista de matérias dentro da linha do aluno).
- Uma chave primária (`id`) definida em todas elas.

✅ O schema está em 1FN.

## 2ª Forma Normal (2FN)

**Regra:** estar em 1FN e não ter dependências parciais — ou seja, todo
atributo não-chave deve depender da chave primária inteira (relevante
principalmente quando a chave primária é composta).

**Aplicação:** todas as tabelas usam chave primária simples (`id`), não
chave composta. Logo, não existe a possibilidade de dependência parcial
(esse problema só ocorre com chaves compostas).

✅ O schema está em 2FN.

## 3ª Forma Normal (3FN)

**Regra:** estar em 2FN e não ter dependências transitivas — ou seja,
nenhum atributo não-chave pode depender de outro atributo não-chave (só
pode depender diretamente da chave primária).

**Aplicação:**
- Em `alunos`: `nome`, `email` e `curso` dependem apenas de `id`. Não há
  atributo que dependa de outro atributo não-chave.
- Em `professores`: `nome` e `email` dependem apenas de `id`. O campo
  `materia_id` é uma FK e representa o relacionamento com `materias`, não
  uma dependência transitiva.
- Em `notas`: `nota` depende da combinação lógica `(aluno_id, materia_id)`,
  mas como a chave primária real é `id`, e `aluno_id`/`materia_id` são FKs
  (não atributos derivados de outros atributos não-chave), não há violação.
- Em `presencas`: `data_aula` e `presente` dependem apenas de `id`.

✅ O schema está em 3FN — não há desnormalização proposital nesse projeto.

## Observação sobre o campo `curso` em `alunos`

O campo `curso` é armazenado como texto livre (`VARCHAR`) direto na tabela
`alunos`, em vez de uma tabela `cursos` separada com FK. Isso **não viola**
a 3FN (já que `curso` depende diretamente de `id`, não de outro atributo),
mas é uma escolha de modelagem simplificada: se o sistema crescesse e
precisasse, por exemplo, listar todos os alunos de um curso com nome
padronizado (evitando erros de digitação como "Informatica" vs
"Informática"), o ideal seria extrair `curso` para sua própria tabela com
FK em `alunos`. Para o escopo atual do projeto, manter como texto livre é
aceitável e foi a opção adotada.