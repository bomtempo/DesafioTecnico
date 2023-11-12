# Testes Automatizados com Playwright

Este repositório contém testes automatizados escritos em TypeScript com Playwright para validar a integridade de um site específico.

## Sobre o Projeto

O projeto utiliza Playwright, uma ferramenta de automação de teste end-to-end para navegadores, para garantir que a aplicação web funcione conforme o esperado. O código é escrito em TypeScript para fornecer uma base sólida e facilitar a manutenção.

## Estrutura do Projeto

- **tests/**: Contém os casos de teste escritos com Playwright Test.
- **pages/**: Páginas e objetos de página utilizados nos testes.
- **components/**: Componentes e utilidades reutilizáveis.

Usando desta forma a manutenção dos códigos ficam mais fáceis, códigos mais limpos e seguem boas práticas.

## Configuração do Projeto

1. **Instalação de Dependências:**
   ```bash
   npm install

### Executar Testes:
    npx playwright test


## Casos de Teste
Validar Integridade da Página Principal
Testa se a página principal do site carrega corretamente.

// tests/seuArquivoDeTestes.ts

import { test } from '@playwright/test';
import { PesquisaPage } from '../pages/pesquisaPage';
import { baseUrl } from '../playwright.config';

test('Validar integridade da página principal', async ({ page }) => {
  const pesquisaPage = new PesquisaPage(page, baseUrl);
  await pesquisaPage.validatePageIntegrity();
});


## Pesquisar sem Inserir Termos
Testa se é possível realizar uma pesquisa sem inserir termos.

// tests/seuArquivoDeTestes.ts

import { test } from '@playwright/test';
import { PesquisaPage } from '../pages/pesquisaPage';
import { baseUrl } from '../playwright.config';

test('Pesquisar sem inserir termos', async ({ page }) => {
  const pesquisaPage = new PesquisaPage(page, baseUrl);
  await page.goto(baseUrl);
  await pesquisaPage.performSearchWithoutTerms();
});


## Pesquisar com Termo Inválido
Testa se uma mensagem adequada é exibida ao pesquisar com um termo inválido.

// tests/seuArquivoDeTestes.ts

import { test } from '@playwright/test';
import { PesquisaPage } from '../pages/pesquisaPage';
import { searchTerms } from '../components/utils';
import { baseUrl } from '../playwright.config';

test('Pesquisar com termo inválido', async ({ page }) => {
  const pesquisaPage = new PesquisaPage(page, baseUrl);
  await page.goto(baseUrl);
  await pesquisaPage.clickSearchButton();
  await pesquisaPage.fillSearchField(searchTerms.invalido);
  await pesquisaPage.clickSubmitButton();
  await pesquisaPage.validateNoResultsPage();
});
