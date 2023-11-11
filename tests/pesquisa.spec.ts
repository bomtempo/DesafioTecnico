import { test } from '@playwright/test';
import { PesquisaPage } from '../pages/pesquisaPage';
import { searchTerms } from '../components/utils';
import { baseUrl } from '../playwright.config';

test('Validar integridade da página', async ({ page }) => {
  const pesquisaPage = new PesquisaPage(page, baseUrl);
  await pesquisaPage.validatePageIntegrity();
});

test('Pesquisar sem inserir termos', async ({ page }) => {
  const pesquisaPage = new PesquisaPage(page, baseUrl);

  await page.goto(baseUrl);
  await pesquisaPage.performSearchWithoutTerms();
});

test('Pesquisar com termo inválido', async ({ page }) => {
  const pesquisaPage = new PesquisaPage(page, baseUrl);

  await page.goto(baseUrl);
  await pesquisaPage.clickSearchButton();
  await pesquisaPage.fillSearchField(searchTerms.invalido);
  await pesquisaPage.clickSubmitButton();
  await pesquisaPage.validateNoResultsPage();
});
