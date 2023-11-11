// pesquisaPage.ts
import { Page, expect } from '@playwright/test';
import { validationMessages } from '../components/utils';

export class PesquisaPage {
  private page: Page;
  private baseUrl: string;

  constructor(page: Page, baseUrl: string) {
    this.page = page;
    this.baseUrl = baseUrl;
  }

  async clickSearchButton() {
    await this.page.click('.search-open');
  }

  async clickSubmitButton() {
    await this.page.click('.search-submit');
    await this.page.waitForLoadState('load');
  }

  async fillSearchField(searchTerm: string) {
    await this.page.waitForSelector('.search-field', { state: 'visible' });
    await this.page.fill('.search-field', searchTerm);
  }

  async validatePageIntegrity() {
    await this.page.goto(this.baseUrl);
    await expect(this.page).toHaveTitle(validationMessages.pageTitle);

    const searchButton = await this.page.$('.search-submit');
    expect(await searchButton?.isEnabled()).toBe(true);
  }

  async validateSearchResultsPage() {
    await this.page.waitForSelector('.archive-title', { state: 'visible' });
    const pageTitle = await this.page.textContent('.archive-title');
    expect(pageTitle).toContain(validationMessages.searchResults);
  }

  async validateNoResultsPage() {
    await this.page.waitForSelector('.search-no-results', { state: 'visible' });
    const noResultsMessage = await this.page.textContent('.search-no-results');
    expect(noResultsMessage).toContain(validationMessages.noResults);
  }

  async performSearchWithoutTerms() {
    await this.clickSearchButton();
    await this.fillSearchField('');
    await this.clickSubmitButton();
    await this.validateSearchResultsPage();
  }
}
