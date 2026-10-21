(() => {
  'use strict';

  const pageSize = 100;
  const searchInput = document.getElementById('word-search');
  const levelFilter = document.getElementById('level-filter');
  const list = document.getElementById('word-list');
  const resultCount = document.getElementById('result-count');
  const pageLabel = document.getElementById('page-label');
  const previousButton = document.getElementById('previous-page');
  const nextButton = document.getElementById('next-page');
  let vocabulary = [];
  let page = 0;

  const normalize = value => String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase();

  function filteredWords() {
    const query = normalize(searchInput.value.trim());
    const level = levelFilter.value;
    return vocabulary.filter(word => {
      if (level !== 'all' && Number(word.l) !== Number(level)) return false;
      if (!query) return true;
      return [word.zh, word.traditional, word.py, word.en]
        .some(value => normalize(value).includes(query));
    });
  }

  function render() {
    const results = filteredWords();
    const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
    page = Math.min(page, pageCount - 1);
    const first = page * pageSize;
    const visible = results.slice(first, first + pageSize);

    list.replaceChildren();
    if (!visible.length) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 4;
      cell.className = 'table-message';
      cell.textContent = 'No words match your search. Try another term or level.';
      row.append(cell);
      list.append(row);
    } else {
      visible.forEach(word => {
        const row = document.createElement('tr');
        const levelCell = document.createElement('td');
        const badge = document.createElement('span');
        badge.className = 'level-badge';
        badge.textContent = 'HSK ' + word.l;
        levelCell.append(badge);

        const chineseCell = document.createElement('td');
        chineseCell.className = 'chinese-word';
        chineseCell.lang = 'zh-Hans';
        chineseCell.textContent = word.zh || '';
        if (word.traditional && word.traditional !== word.zh) {
          const traditional = document.createElement('span');
          traditional.className = 'traditional-word';
          traditional.lang = 'zh-Hant';
          traditional.textContent = 'Traditional: ' + word.traditional;
          chineseCell.append(traditional);
        }

        const pinyinCell = document.createElement('td');
        pinyinCell.className = 'pinyin-word';
        pinyinCell.textContent = word.py || '';
        const meaningCell = document.createElement('td');
        meaningCell.className = 'english-meaning';
        meaningCell.textContent = word.en || '';
        row.append(levelCell, chineseCell, pinyinCell, meaningCell);
        list.append(row);
      });
    }

    resultCount.textContent = results.length.toLocaleString() + (results.length === 1 ? ' word' : ' words');
    pageLabel.textContent = 'Page ' + (page + 1) + ' of ' + pageCount;
    previousButton.disabled = page === 0;
    nextButton.disabled = page >= pageCount - 1;
  }

  searchInput.addEventListener('input', () => { page = 0; render(); });
  levelFilter.addEventListener('change', () => { page = 0; render(); });
  previousButton.addEventListener('click', () => { if (page > 0) { page -= 1; render(); } });
  nextButton.addEventListener('click', () => {
    if ((page + 1) * pageSize < filteredWords().length) { page += 1; render(); }
  });

  fetch('hsk-vocabulary.json')
    .then(response => {
      if (!response.ok) throw new Error('Could not load the vocabulary database.');
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) throw new Error('The vocabulary database has an unexpected format.');
      vocabulary = data;
      render();
    })
    .catch(() => {
      resultCount.textContent = 'Vocabulary could not be loaded';
      list.replaceChildren();
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 4;
      cell.className = 'table-message';
      cell.textContent = 'The vocabulary list is unavailable right now. Please refresh the page to try again.';
      row.append(cell);
      list.append(row);
    });
})();