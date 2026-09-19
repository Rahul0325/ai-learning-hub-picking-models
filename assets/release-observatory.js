(() => {
  const MODEL_RELEASES = [[2024,"2024-01-25","Z.ai","GLM-4",0],[2024,"2024-02-04","Qwen","Qwen1.5",0],[2024,"2024-02-15","Google DeepMind","Gemini 1.5 Pro",0],[2024,"2024-02-26","Mistral","Mistral Large",0],[2024,"2024-03-04","Anthropic","Claude 3 Opus",1],[2024,"2024-03-28","xAI","Grok 1.5",0],[2024,"2024-04-17","Mistral","Mixtral 8x22B",1],[2024,"2024-04-18","Meta","Llama 3",0],[2024,"2024-04-23","Microsoft","Phi-3",0],[2024,"2024-05-06","DeepSeek","DeepSeek V2",0],[2024,"2024-05-13","OpenAI","GPT-4o",0],[2024,"2024-06-07","Qwen","Qwen2",0],[2024,"2024-06-21","Anthropic","Claude 3.5 Sonnet",1],[2024,"2024-07-23","Meta","Llama 3.1",1],[2024,"2024-07-24","Mistral","Mistral Large 2",0],[2024,"2024-08-12","Z.ai","GLM-4-Plus",0],[2024,"2024-08-13","xAI","Grok 2",0],[2024,"2024-09-05","DeepSeek","DeepSeek V2.5",0],[2024,"2024-09-12","OpenAI","o1-preview",1],[2024,"2024-09-19","Qwen","Qwen2.5",0],[2024,"2024-09-25","Meta","Llama 3.2",0],[2024,"2024-10-22","Anthropic","Claude 3.5 Sonnet Oct update",0],[2024,"2024-11-18","Mistral","Pixtral Large",0],[2024,"2024-11-28","Qwen","QwQ-32B-Preview",0],[2024,"2024-12-06","Meta","Llama 3.3 70B",0],[2024,"2024-12-11","Google DeepMind","Gemini 2.0 Flash",0],[2024,"2024-12-12","Microsoft","Phi-4",0],[2024,"2024-12-20","Z.ai","GLM-Zero-Preview",0],[2024,"2024-12-26","DeepSeek","DeepSeek V3",1],[2025,"2025-01-15","MiniMax","MiniMax-01",0],[2025,"2025-01-20","DeepSeek","DeepSeek R1",1],[2025,"2025-01-20","Moonshot","Kimi K1.5",0],[2025,"2025-01-28","Qwen","Qwen2.5-Max",0],[2025,"2025-02-19","xAI","Grok 3",1],[2025,"2025-02-24","Anthropic","Claude 3.7 Sonnet",0],[2025,"2025-02-27","OpenAI","GPT-4.5",0],[2025,"2025-03-06","Qwen","QwQ-32B",0],[2025,"2025-03-25","Google DeepMind","Gemini 2.5 Pro",1],[2025,"2025-04-05","Meta","Llama 4 Scout",0],[2025,"2025-04-05","Meta","Llama 4 Maverick",0],[2025,"2025-04-14","OpenAI","GPT-4.1",0],[2025,"2025-04-16","OpenAI","o3",1],[2025,"2025-04-16","OpenAI","o4-mini",0],[2025,"2025-04-29","Qwen","Qwen3",1],[2025,"2025-04-30","Microsoft","Phi-4-reasoning",0],[2025,"2025-05-07","Mistral","Mistral Medium 3",0],[2025,"2025-05-22","Anthropic","Claude Opus 4",1],[2025,"2025-05-22","Anthropic","Claude Sonnet 4",0],[2025,"2025-06-10","Mistral","Magistral",0],[2025,"2025-06-16","MiniMax","MiniMax-M1",0],[2025,"2025-07-09","xAI","Grok 4",1],[2025,"2025-07-11","Moonshot","Kimi K2",0],[2025,"2025-07-28","Z.ai","GLM-4.5",1],[2025,"2025-08-07","OpenAI","GPT-5",1],[2025,"2025-08-21","DeepSeek","DeepSeek V3.1",0],[2025,"2025-08-28","Microsoft","MAI-1-preview",0],[2025,"2025-09-24","Qwen","Qwen3-Max",0],[2025,"2025-09-29","Anthropic","Claude Sonnet 4.5",1],[2025,"2025-09-30","Z.ai","GLM-4.6",0],[2025,"2025-10-27","MiniMax","MiniMax-M2",0],[2025,"2025-11-06","Moonshot","Kimi K2 Thinking",1],[2025,"2025-11-12","OpenAI","GPT-5.1",0],[2025,"2025-11-17","xAI","Grok 4.1",0],[2025,"2025-11-18","Google DeepMind","Gemini 3 Pro",1],[2025,"2025-11-24","Anthropic","Claude Opus 4.5",1],[2025,"2025-12-01","DeepSeek","DeepSeek V3.2",1],[2025,"2025-12-02","Mistral","Mistral Large 3",0],[2025,"2025-12-11","OpenAI","GPT-5.2",1],[2025,"2025-12-22","Z.ai","GLM-4.7",1],[2025,"2025-12-23","MiniMax","MiniMax-M2.1",0],[2026,"2026-01-25","Qwen","Qwen3-Max-Thinking",0],[2026,"2026-01-27","Moonshot","Kimi K2.5",1],[2026,"2026-02-05","Anthropic","Claude Opus 4.6",1],[2026,"2026-02-12","MiniMax","MiniMax-M2.5",0],[2026,"2026-02-12","Z.ai","GLM-5",1],[2026,"2026-02-15","Qwen","Qwen3.5",1],[2026,"2026-02-17","Anthropic","Claude Sonnet 4.6",0],[2026,"2026-02-19","Google DeepMind","Gemini 3.1 Pro",0],[2026,"2026-03-05","OpenAI","GPT-5.4",0],[2026,"2026-03-16","Mistral","Mistral Small 4",0],[2026,"2026-03-18","MiniMax","MiniMax-M2.7",0],[2026,"2026-04-07","Z.ai","GLM-5.1",1],[2026,"2026-04-08","Meta","Muse Spark",0],[2026,"2026-04-16","Anthropic","Claude Opus 4.7",0],[2026,"2026-04-18","Qwen","Qwen3.6-Max-Preview",0],[2026,"2026-04-20","Moonshot","Kimi K2.6",0],[2026,"2026-04-23","OpenAI","GPT-5.5",1],[2026,"2026-04-24","DeepSeek","DeepSeek V4 Preview",1],[2026,"2026-05-19","Google DeepMind","Gemini 3.5 Flash",1],[2026,"2026-05-21","Qwen","Qwen3.7-Max",0],[2026,"2026-05-22","Mistral","Mistral Medium 3.5",0],[2026,"2026-05-28","Anthropic","Claude Opus 4.8",0],[2026,"2026-06-01","MiniMax","MiniMax-M3",0],[2026,"2026-06-02","Microsoft","MAI-Thinking-1",0],[2026,"2026-06-09","Anthropic","Claude Fable 5",1],[2026,"2026-06-16","Z.ai","GLM-5.2",1],[2026,"2026-06-30","Anthropic","Claude Sonnet 5",0],[2026,"2026-07-09","OpenAI","GPT-5.6 Sol",1],[2026,"2026-07-09","OpenAI","GPT-5.6 Terra",0],[2026,"2026-07-09","OpenAI","GPT-5.6 Luna",0],[2026,"2026-07-09","Meta","Muse Spark 1.1",0],[2026,"2026-07-15","Thinking Machines","Inkling",0],[2026,"2026-07-16","xAI","Grok 4.5",1],[2026,"2026-07-16","Moonshot","Kimi K3",1],[2026,"2026-07-21","Google DeepMind","Gemini 3.6 Flash",0],[2026,"2026-07-24","Anthropic","Claude Opus 5",1],[2026,"2026-08-02","Qwen","Qwen3.8-Max",0],[2026,"2026-08-05","Meta","Muse Spark 1.2",0],[2026,"2026-08-12","xAI","Grok 4.6",1],[2026,"2026-08-13","DeepSeek","DeepSeek V4 Pro",0],[2026,"2026-08-13","Google DeepMind","Gemini 3.7 Flash",0],[2026,"2026-08-18","Z.ai","GLM-5.3",1],[2026,"2026-09-01","Anthropic","Claude Fable 5.1",1],[2026,"2026-09-02","Google DeepMind","Gemini 3.8 Flash",0],[2026,"2026-09-02","Meta","Muse Spark 1.3",1],[2026,"2026-09-03","OpenAI","GPT-6 Astra",1]].map(([year, date, lab, model, frontier]) => ({ year, date, lab, model, frontier: Boolean(frontier) }));

  const BENTO_MODES = {
    all: {
      series: ['19', '27', '46'],
      fullYearSeries: ['29', '41', null],
      seriesLabel: 'All model releases. By September 13: 19 in 2024, 27 in 2025, and 46 in 2026. Full-year totals: 29 in 2024 and 41 in 2025. The 2026 full-year total is not available yet.',
      cards: {
        hero: ['46', 'releases by September 13'],
        benchmark: ['46 vs. 41', '2026 so far vs. all of 2025'],
        delta: ['142%', 'more releases than the same period in 2024'],
        rhythm: ['44', 'separate release events'],
        field: ['9', 'labs shipped frontier models'],
        interval: ['5.1 days', 'average gap between release events']
      },
      notes: {
        hero: 'That is 2.4 times the same period in 2024.',
        benchmark: 'Nine months of 2026 already passed the full 2025 total.',
        delta: 'The equal-period count climbed from 19 to 27, then 46.',
        rhythm: 'Forty-six models arrived across 44 distinct dates.',
        field: 'OpenAI and Anthropic account for eight frontier releases.',
        interval: 'Those 44 release events span just 221 days.'
      }
    },
    frontier: {
      series: ['5', '9', '19'],
      fullYearSeries: ['6', '16', null],
      seriesLabel: 'Frontier model releases. By September 13: 5 in 2024, 9 in 2025, and 19 in 2026. Full-year totals: 6 in 2024 and 16 in 2025. The 2026 full-year total is not available yet.',
      cards: {
        hero: ['19', 'frontier releases by September 13'],
        benchmark: ['19 vs. 16', '2026 so far vs. all of 2025'],
        delta: ['280%', 'more frontier releases than the same period in 2024'],
        rhythm: ['18', 'separate frontier release dates'],
        field: ['9', 'labs released frontier models'],
        interval: ['12.9 days', 'average gap between frontier release events']
      },
      notes: {
        hero: 'The same period produced five frontier releases in 2024 and nine in 2025.',
        benchmark: 'By September 13, the count was three above all of 2025.',
        delta: 'The equal-period count rose from five to nine, then 19.',
        rhythm: 'Nineteen frontier models arrived across 18 dates.',
        field: 'Five of the nine labs shipped more than one frontier model.',
        interval: 'Eighteen frontier release dates span 219 days.'
      }
    },
    cadence: {
      series: ['117d', '119d', '63d'],
      fullYearSeries: null,
      seriesLabel: 'Median days between releases from the same lab: 117 days in 2024, 119 days in 2025, and 63 days in 2026.',
      cards: {
        hero: ['63 days', 'median gap between releases from the same lab'],
        benchmark: ['20 of 36', 'gaps were 60 days or less'],
        delta: ['10', 'gaps were 30 days or less'],
        rhythm: ['4', 'release pairs landed on the same day'],
        field: ['7', 'labs had a gap of 60 days or less'],
        interval: ['63 days', 'median gap between releases from the same lab']
      },
      notes: {
        hero: 'The 2025 median was 119 days.',
        benchmark: 'Only nine gaps were this short in 2025.',
        delta: 'There were three 30-day gaps in 2025 and none in 2024.',
        rhythm: 'Same-day pairs rose from none in 2024 to four in 2026.',
        field: 'Each lab recorded at least one gap of 60 days or less.',
        interval: 'That is 56 days shorter than the 2025 median.'
      }
    }
  };

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  class ReleaseObservatory {
    constructor(bentoSlide = null, includeCalendar = false) {
      this.gsap = window.gsap;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.mode = 'all';
      this.year = 2026;
      this.type = 'all';
      this.selectedMonth = 6;
      if (bentoSlide) this.initBento(bentoSlide);
      if (includeCalendar) this.initCalendar();
    }

    initBento(bentoSlide) {
      this.bentoSlide = bentoSlide;
      this.cards = [...this.bentoSlide.querySelectorAll('[data-release-card]')];
      this.modeButtons = [...this.bentoSlide.querySelectorAll('[data-release-mode]')];

      this.modeButtons.forEach((button) => button.addEventListener('click', () => {
        this.setMode(button.dataset.releaseMode);
      }));
      this.updateSeries(BENTO_MODES[this.mode], false);
    }

    updateSeries(state, animate = true) {
      const items = [...this.bentoSlide.querySelectorAll('.release-mini-series__item')];
      const values = state.series.map((value) => Number.parseFloat(value));
      const fullYearValues = state.fullYearSeries?.map((value) => value === null ? null : Number.parseFloat(value)) ?? values.map(() => null);
      const max = Math.max(...values, ...fullYearValues.filter((value) => value !== null));
      items.forEach((item, index) => {
        const fullYearValue = fullYearValues[index];
        item.classList.toggle('has-full-year', fullYearValue !== null);
        item.style.setProperty('--bar-ytd-height', `${Math.max(6, (values[index] / max) * 100)}%`);
        item.style.setProperty('--bar-full-height', fullYearValue === null ? '0%' : `${Math.max(6, (fullYearValue / max) * 100)}%`);
      });
      const series = this.bentoSlide.querySelector('.release-mini-series');
      const isComparison = Boolean(state.fullYearSeries);
      series.classList.toggle('is-comparison', isComparison);
      series.setAttribute('aria-label', state.seriesLabel);
      const currentLegend = series.querySelector('[data-series-current-legend]');
      const fullYearLegend = series.querySelector('[data-series-full-legend]');
      currentLegend.textContent = isComparison ? 'By Sep 13' : 'Median gap';
      fullYearLegend.hidden = !isComparison;
      if (!this.gsap || !animate || this.reducedMotion) {
        items.forEach((item) => item.style.setProperty('--bar-progress', '1'));
        return;
      }
      this.gsap.fromTo(items, { '--bar-progress': 0 }, {
        '--bar-progress': 1,
        duration: 0.66,
        stagger: 0.07,
        ease: 'power3.out'
      });
    }

    setMode(mode) {
      if (!BENTO_MODES[mode] || mode === this.mode) return;
      this.mode = mode;
      this.modeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.releaseMode === mode)));
      const content = this.cards.map((card) => card.querySelector('.release-card-content'));
      const update = () => {
        const state = BENTO_MODES[mode];
        this.cards.forEach((card) => {
          const key = card.dataset.releaseCard;
          const [metric, label] = state.cards[key];
          card.querySelector('[data-card-metric]').textContent = metric;
          card.querySelector('[data-card-label]').textContent = label;
          card.querySelector('[data-card-note]').textContent = state.notes[key];
        });
        this.bentoSlide.querySelectorAll('[data-series-value]').forEach((node, index) => { node.textContent = state.series[index]; });
        this.bentoSlide.querySelectorAll('[data-series-full-value]').forEach((node, index) => {
          const value = state.fullYearSeries?.[index];
          node.textContent = value ?? '';
          node.hidden = value === null || value === undefined;
        });
        this.updateSeries(state);
      };
      if (!this.gsap || this.reducedMotion) return update();
      this.gsap.killTweensOf(content);
      this.gsap.to(content, { opacity: 0, y: -10, duration: 0.16, stagger: 0.025, ease: 'power2.in', onComplete: () => {
        update();
        this.gsap.fromTo(content, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.46, stagger: 0.045, ease: 'power3.out' });
      }});
    }

    initCalendar() {
      this.calendarSlide = document.querySelector('.release-calendar-slide');
      if (!this.calendarSlide) return;
      this.yearButtons = [...this.calendarSlide.querySelectorAll('[data-release-year]')];
      this.typeButtons = [...this.calendarSlide.querySelectorAll('[data-release-type]')];
      this.monthButtons = [...this.calendarSlide.querySelectorAll('[data-month]')];
      this.yearButtons.forEach((button) => button.addEventListener('click', () => {
        this.year = Number(button.dataset.releaseYear);
        this.yearButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        this.selectBusiestMonth();
        this.renderCalendar();
      }));
      this.typeButtons.forEach((button) => button.addEventListener('click', () => {
        this.type = button.dataset.releaseType;
        this.typeButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        this.selectBusiestMonth();
        this.renderCalendar();
      }));
      this.monthButtons.forEach((button) => button.addEventListener('click', () => {
        const month = Number(button.dataset.month);
        if (!this.isObserved(month)) return;
        this.selectedMonth = month;
        this.renderCalendar(false);
      }));
      this.renderCalendar(false);
    }

    releasesFor(month, type = this.type) {
      return MODEL_RELEASES.filter((item) => item.year === this.year && new Date(`${item.date}T00:00:00`).getMonth() === month && (type === 'all' || item.frontier));
    }

    isObserved(month) {
      return this.year < 2026 || month <= 8;
    }

    selectBusiestMonth() {
      const counts = this.monthButtons.map((_, month) => this.isObserved(month) ? this.releasesFor(month).length : -1);
      this.selectedMonth = counts.indexOf(Math.max(...counts));
    }

    renderCalendar(animate = true) {
      this.calendarSlide.classList.toggle('is-frontier', this.type === 'frontier');
      const counts = this.monthButtons.map((_, month) => this.releasesFor(month).length);
      const max = Math.max(...counts, 1);
      this.monthButtons.forEach((button, month) => {
        const observed = this.isObserved(month);
        const count = counts[month];
        const frontierCount = this.releasesFor(month, 'frontier').length;
        const releaseLabel = this.type === 'frontier'
          ? (count === 1 ? 'frontier release' : 'frontier releases')
          : (count === 1 ? 'release' : 'releases');
        button.dataset.empty = String(!observed);
        button.setAttribute('aria-disabled', String(!observed));
        button.setAttribute('aria-pressed', String(month === this.selectedMonth));
        button.setAttribute('aria-label', observed ? `${monthNames[month]} ${this.year}, ${count} ${releaseLabel}` : `${monthNames[month]} ${this.year}, not yet observed`);
        button.querySelector('.release-pulse-count').textContent = observed ? String(count) : '';
        const fill = button.querySelector('.release-pulse-fill');
        const frontier = button.querySelector('.release-pulse-frontier-fill');
        const height = observed ? `${Math.max(count ? 8 : 2, (count / max) * 100)}%` : '3%';
        const frontierHeight = this.type === 'all' && count ? `${(frontierCount / count) * 100}%` : '0%';
        if (this.gsap && animate && !this.reducedMotion) {
          this.gsap.to(fill, { height, duration: 0.62, ease: 'power3.out', overwrite: true });
          this.gsap.to(frontier, { height: frontierHeight, duration: 0.62, ease: 'power3.out', overwrite: true });
        } else {
          fill.style.height = height;
          frontier.style.height = frontierHeight;
        }
      });
      this.renderMonthDetail(animate);
    }

    renderMonthDetail(animate) {
      const panel = this.calendarSlide.querySelector('[data-release-month-detail]');
      const entries = this.releasesFor(this.selectedMonth);
      const observed = this.isObserved(this.selectedMonth);
      const update = () => {
        panel.querySelector('[data-month-title]').textContent = `${monthNames[this.selectedMonth]} ${this.year}`;
        panel.querySelector('[data-month-count]').textContent = observed ? String(entries.length) : '';
        const countLabel = this.type === 'frontier'
          ? (entries.length === 1 ? 'frontier release' : 'frontier releases')
          : (entries.length === 1 ? 'release' : 'releases');
        panel.querySelector('[data-month-count-label]').textContent = observed ? countLabel : 'not yet observed';
        const list = panel.querySelector('[data-month-list]');
        list.replaceChildren();
        if (!observed || !entries.length) {
          const empty = document.createElement('li');
          empty.className = 'release-month-detail__empty';
          const label = document.createElement('strong');
          label.textContent = observed ? 'No qualifying releases in this lens.' : 'The observation window ends September 13.';
          empty.append(label);
          list.append(empty);
          return;
        }
        entries.forEach((entry) => {
          const item = document.createElement('li');
          const model = document.createElement('strong');
          const lab = document.createElement('span');
          model.textContent = entry.model;
          lab.textContent = entry.lab;
          item.append(model, lab);
          list.append(item);
        });
      };
      if (!this.gsap || !animate || this.reducedMotion) return update();
      const content = panel.querySelectorAll('.release-month-detail__title, .release-month-detail__stat, .release-month-detail__list');
      this.gsap.to(content, { opacity: 0, y: -8, duration: 0.16, stagger: 0.02, ease: 'power2.in', onComplete: () => {
        update();
        this.gsap.fromTo(content, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.42, stagger: 0.04, ease: 'power3.out' });
      }});
    }
  }

  const init = () => {
    if (window.releaseObservatory) return;
    const bentos = [...document.querySelectorAll('.release-insight-slide')]
      .map((slide) => new ReleaseObservatory(slide));
    const calendar = new ReleaseObservatory(null, true);
    window.releaseObservatory = bentos[0] || calendar;
    window.releaseObservatory.bentos = bentos;
    window.releaseObservatory.calendar = calendar;
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
