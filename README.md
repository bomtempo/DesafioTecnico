# Testes Automatizados com Playwright

Este repositório contém testes automatizados escritos em TypeScript com Playwright para validar a integridade de um site específico.

## Sobre o Projeto

O projeto utiliza Playwright, uma ferramenta de automação de teste end-to-end para navegadores, para garantir que a aplicação web funcione conforme o esperado. O código é escrito em TypeScript para fornecer uma base sólida e facilitar a manutenção.

## Estrutura do Projeto

- **tests/**: Contém os casos de teste escritos com Playwright Test.
- **pages/**: Páginas e objetos de página utilizados nos testes.
- **components/**: Componentes e utilidades reutilizáveis.

Usando esta estrutura, a manutenção do código fica mais fácil, os códigos mais limpos e seguem boas práticas.

## Configuração do Projeto
1. **Clonando o repositório:**
   ```bash
   git clone git@github.com:bomtempo/DesafioTecnico.git

3. **Instalação de Dependências:**
   ```bash
   npm install

4. **Instalando Playwright:**
   ```bash
   npx playwright install

5. **Executar Testes:**
   ```bash
   npx playwright test


## Casos de Teste
### Validar Integridade da Página Principal
   Testa se a página principal do site carrega corretamente. Valida a integridade da página verificando o título da página e se o botão de pesquisa está habilitado.

### Pesquisar sem Inserir Termos
   Testa se é possível realizar uma pesquisa sem inserir termos. Valida se, ao pressionar pesquisar, aparecem todas as postagens do blog.

### Pesquisar com Termo Inválido
   Testa se uma mensagem adequada é exibida ao pesquisar com um termo inválido. Valida que não trouxe nenhuma postagem.
