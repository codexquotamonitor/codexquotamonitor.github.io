/* Codex Quota Monitor — i18n for index.html and privacy-policy.html */

const CQM_LANGS = {
  en:    { name: 'English',          dir: 'ltr', code: 'EN' },
  pt_BR: { name: 'Português (BR)',   dir: 'ltr', code: 'PT' },
  es:    { name: 'Español',          dir: 'ltr', code: 'ES' },
  fr:    { name: 'Français',         dir: 'ltr', code: 'FR' },
  ar:    { name: 'العربية',           dir: 'rtl', code: 'AR' },
  bn:    { name: 'বাংলা',             dir: 'ltr', code: 'BN' },
  hi:    { name: 'हिन्दी',            dir: 'ltr', code: 'HI' },
  id:    { name: 'Bahasa Indonesia', dir: 'ltr', code: 'ID' },
  ru:    { name: 'Русский',          dir: 'ltr', code: 'RU' },
  zh_CN: { name: '中文',             dir: 'ltr', code: 'ZH' },
};

const CQM_T = {

  /* ── ENGLISH ──────────────────────────────────────────────── */
  en: {
    nav_install: 'GitHub →',
    hero_badge: 'Free Chrome Extension',
    hero_title_html: 'Know your <em>Codex quota</em><br/>before it runs out',
    hero_desc_html: 'Track your Codex session and weekly usage directly in the browser toolbar — no setup, no distractions. Free and <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">open source</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'View source',
    pill_session: 'Session usage', pill_weekly: 'Weekly usage', pill_design: 'Codex credits',
    pill_refresh: 'Auto refresh', pill_langs: '10 languages', pill_free: 'Free', pill_opensource: 'Open source',
    features_title: "Everything you need, nothing you don't",
    features_sub: 'Simple by design. Powerful where it matters.',
    feat1_title: 'Session usage (5h)',
    feat1_desc: "See exactly how much of your 5-hour session window you've used, with a color-coded progress bar.",
    feat2_title: 'Weekly usage (7 days)',
    feat2_desc: 'Track your 7-day quota for all models plus Codex credits separately, each with its own reset timer.',
    feat3_title: 'Auto background refresh',
    feat3_desc: 'Data updates automatically every 10 minutes and from your authenticated ChatGPT session. No open tab needed.',
    feat4_title: 'Toolbar badge',
    feat4_desc: 'Your current usage percentage always visible on the extension icon. Turns orange at 70%, red at 90%.',
    feat5_title: '10 languages',
    feat5_desc: 'Available in English, Portuguese, Spanish, French, Arabic, Bengali, Hindi, Indonesian, Russian, and Chinese.',
    feat6_title: 'Private & open source',
    feat6_desc_html: 'No account, no tracking, no data collection. Everything stays in your browser. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">Inspect the source code</a> and verify it yourself.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'Privacy Policy',
    footer_copy: '© 2026 The Codex Quota Monitor team · Not affiliated with OpenAI',
    footer_email_html: 'Questions or feedback? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'Privacy Policy — Last updated: May 15, 2026',
    pp_s1_title: 'Overview',
    pp_s1_p: 'Codex Quota Monitor is a browser extension that displays your Codex usage quota directly in the browser toolbar.',
    pp_s1_h1: '🔒 We do not collect, transmit, or store any personal data on external servers. Everything stays on your device.',
    pp_s1_h2_html: '🔓 This extension is <strong>open source</strong>. You can inspect every line of code at <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> and verify our privacy practices yourself.',
    pp_s2_title: 'What data is accessed',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'This data is stored locally on your device using the browser\'s built-in <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> API and is never sent anywhere else.',
    pp_s3_title: 'What we do not do',
    pp_s3_items_html: '<li>We do not collect any personally identifiable information</li><li>We do not transmit any data to external servers</li><li>We do not use analytics, tracking pixels, or telemetry</li><li>We do not share data with third parties</li><li>We do not read your conversations or any Codex content</li><li>We do not store data beyond what is necessary to display your quota</li>',
    pp_s4_title: 'Permissions explained',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — saves quota data locally on your device</li><li><strong style="color:#e8e8f0">tabs</strong> — opens chatgpt.com when you click the "View quota" button</li><li><strong style="color:#e8e8f0">alarms</strong> — schedules background refresh every 10 minutes</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — reads the usage API using your existing session cookies</li>',
    pp_s5_title: 'Third-party services',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: "Children's privacy",
    pp_s6_p: 'This extension is not directed at children under the age of 13. We do not knowingly collect any information from children.',
    pp_s7_title: 'Changes to this policy',
    pp_s7_p: 'If we make material changes to this privacy policy, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically.',
    pp_s8_title: 'Contact',
    pp_s8_p: 'If you have any questions about this privacy policy, please contact us at:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── PORTUGUÊS (BR) ───────────────────────────────────────── */
  pt_BR: {
    nav_install: 'GitHub →',
    hero_badge: 'Extensão gratuita para Chrome',
    hero_title_html: 'Saiba sua <em>cota do Codex</em><br/>antes que acabe',
    hero_desc_html: 'Acompanhe o uso da sua sessão e cota semanal do Codex diretamente na barra do navegador — sem configuração, sem distrações. Gratuito e <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">código aberto</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'Ver código-fonte',
    pill_session: 'Uso da sessão', pill_weekly: 'Uso semanal', pill_design: 'Codex credits',
    pill_refresh: 'Atualização automática', pill_langs: '10 idiomas', pill_free: 'Grátis', pill_opensource: 'Código aberto',
    features_title: 'Tudo que você precisa, nada que não precisa',
    features_sub: 'Simples por design. Poderoso onde importa.',
    feat1_title: 'Uso da sessão (5h)',
    feat1_desc: 'Veja exatamente quanto da sua janela de 5 horas você já usou, com uma barra de progresso colorida.',
    feat2_title: 'Uso semanal (7 dias)',
    feat2_desc: 'Acompanhe sua cota de 7 dias para todos os modelos e Codex credits separadamente, cada um com seu próprio timer de reset.',
    feat3_title: 'Atualização automática em background',
    feat3_desc: 'Dados atualizados automaticamente a cada 10 minutos e após sua sessão autenticada do ChatGPT. Sem aba aberta necessária.',
    feat4_title: 'Badge na barra de ferramentas',
    feat4_desc: 'Seu percentual de uso sempre visível no ícone da extensão. Fica laranja aos 70%, vermelho aos 90%.',
    feat5_title: '10 idiomas',
    feat5_desc: 'Disponível em inglês, português, espanhol, francês, árabe, bengali, hindi, indonésio, russo e chinês.',
    feat6_title: 'Privado e código aberto',
    feat6_desc_html: 'Sem conta, sem rastreamento, sem coleta de dados. Tudo fica no seu navegador. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">Inspecione o código-fonte</a> e verifique você mesmo.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'Política de Privacidade',
    footer_copy: '© 2026 The Codex Quota Monitor team · Não afiliado à OpenAI',
    footer_email_html: 'Dúvidas ou sugestões? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'Política de Privacidade — Última atualização: 15 de maio de 2026',
    pp_s1_title: 'Visão geral',
    pp_s1_p: 'O Codex Quota Monitor é uma extensão do navegador que exibe sua cota de uso do Codex diretamente na barra do navegador.',
    pp_s1_h1: '🔒 Não coletamos, transmitimos nem armazenamos dados pessoais em servidores externos. Tudo fica no seu dispositivo.',
    pp_s1_h2_html: '🔓 Esta extensão é <strong>código aberto</strong>. Você pode inspecionar cada linha de código em <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> e verificar nossas práticas de privacidade por conta própria.',
    pp_s2_title: 'Quais dados são acessados',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'Esses dados são armazenados localmente no seu dispositivo usando a API nativa <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> e nunca são enviados para nenhum outro lugar.',
    pp_s3_title: 'O que não fazemos',
    pp_s3_items_html: '<li>Não coletamos nenhuma informação pessoal identificável</li><li>Não transmitimos dados para servidores externos</li><li>Não usamos analytics, pixels de rastreamento ou telemetria</li><li>Não compartilhamos dados com terceiros</li><li>Não lemos suas conversas nem qualquer conteúdo do Codex</li><li>Não armazenamos dados além do necessário para exibir sua cota</li>',
    pp_s4_title: 'Permissões explicadas',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — salva os dados de cota localmente no seu dispositivo</li><li><strong style="color:#e8e8f0">tabs</strong> — abre o chatgpt.com quando você clica em "Ver cota"</li><li><strong style="color:#e8e8f0">alarms</strong> — agenda a atualização em background a cada 10 minutos</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — lê a API de uso usando os cookies da sua sessão existente</li>',
    pp_s5_title: 'Serviços de terceiros',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'Privacidade de crianças',
    pp_s6_p: 'Esta extensão não é direcionada a crianças menores de 13 anos. Não coletamos conscientemente nenhuma informação de crianças.',
    pp_s7_title: 'Alterações nesta política',
    pp_s7_p: 'Se fizermos alterações materiais nesta política de privacidade, atualizaremos a data de "Última atualização" no topo desta página. Encorajamos você a revisá-la periodicamente.',
    pp_s8_title: 'Contato',
    pp_s8_p: 'Se tiver dúvidas sobre esta política de privacidade, entre em contato conosco:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── ESPAÑOL ──────────────────────────────────────────────── */
  es: {
    nav_install: 'GitHub →',
    hero_badge: 'Extensión gratuita para Chrome',
    hero_title_html: 'Conoce tu <em>cuota de Codex</em><br/>antes de que se acabe',
    hero_desc_html: 'Sigue el uso de tu sesión y cuota semanal de Codex directamente en la barra del navegador — sin configuración, sin distracciones. Gratis y <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">código abierto</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'Ver código fuente',
    pill_session: 'Uso de sesión', pill_weekly: 'Uso semanal', pill_design: 'Codex credits',
    pill_refresh: 'Actualización automática', pill_langs: '10 idiomas', pill_free: 'Gratis', pill_opensource: 'Código abierto',
    features_title: 'Todo lo que necesitas, nada más',
    features_sub: 'Simple por diseño. Potente donde importa.',
    feat1_title: 'Uso de sesión (5h)',
    feat1_desc: 'Ve exactamente cuánto de tu ventana de sesión de 5 horas has usado, con una barra de progreso a color.',
    feat2_title: 'Uso semanal (7 días)',
    feat2_desc: 'Controla tu cuota de 7 días para todos los modelos y Codex credits por separado, cada uno con su propio temporizador.',
    feat3_title: 'Actualización automática en segundo plano',
    feat3_desc: 'Los datos se actualizan automáticamente cada 10 minutos y tras cada tu sesión autenticada de ChatGPT. Sin pestaña abierta.',
    feat4_title: 'Insignia en la barra de herramientas',
    feat4_desc: 'Tu porcentaje de uso siempre visible en el icono de la extensión. Se pone naranja al 70%, rojo al 90%.',
    feat5_title: '10 idiomas',
    feat5_desc: 'Disponible en inglés, portugués, español, francés, árabe, bengalí, hindi, indonesio, ruso y chino.',
    feat6_title: 'Privado y código abierto',
    feat6_desc_html: 'Sin cuenta, sin rastreo, sin recolección de datos. Todo se queda en tu navegador. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">Inspecciona el código fuente</a> y verifícalo tú mismo.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'Política de Privacidad',
    footer_copy: '© 2026 The Codex Quota Monitor team · No afiliado a OpenAI',
    footer_email_html: '¿Preguntas o comentarios? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'Política de Privacidad — Última actualización: 15 de mayo de 2026',
    pp_s1_title: 'Descripción general',
    pp_s1_p: 'Codex Quota Monitor es una extensión del navegador que muestra tu cuota de uso de Codex directamente en la barra de herramientas.',
    pp_s1_h1: '🔒 No recopilamos, transmitimos ni almacenamos ningún dato personal en servidores externos. Todo permanece en tu dispositivo.',
    pp_s1_h2_html: '🔓 Esta extensión es <strong>código abierto</strong>. Puedes inspeccionar cada línea de código en <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> y verificar nuestras prácticas de privacidad por ti mismo.',
    pp_s2_title: 'Qué datos se acceden',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'Estos datos se almacenan localmente en tu dispositivo usando la API integrada del navegador <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> y nunca se envían a ningún otro lugar.',
    pp_s3_title: 'Lo que no hacemos',
    pp_s3_items_html: '<li>No recopilamos información de identificación personal</li><li>No transmitimos datos a servidores externos</li><li>No usamos analíticas, píxeles de seguimiento ni telemetría</li><li>No compartimos datos con terceros</li><li>No leemos tus conversaciones ni ningún contenido de Codex</li><li>No almacenamos datos más allá de lo necesario para mostrar tu cuota</li>',
    pp_s4_title: 'Permisos explicados',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — guarda los datos de cuota localmente en tu dispositivo</li><li><strong style="color:#e8e8f0">tabs</strong> — abre chatgpt.com cuando haces clic en "Ver cuota"</li><li><strong style="color:#e8e8f0">alarms</strong> — programa la actualización en segundo plano cada 10 minutos</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — lee la API de uso usando las cookies de tu sesión existente</li>',
    pp_s5_title: 'Servicios de terceros',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'Privacidad de los menores',
    pp_s6_p: 'Esta extensión no está dirigida a menores de 13 años. No recopilamos conscientemente ninguna información de menores.',
    pp_s7_title: 'Cambios en esta política',
    pp_s7_p: 'Si realizamos cambios importantes en esta política de privacidad, actualizaremos la fecha de "Última actualización" en la parte superior de esta página.',
    pp_s8_title: 'Contacto',
    pp_s8_p: 'Si tienes alguna pregunta sobre esta política de privacidad, contáctanos en:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── FRANÇAIS ─────────────────────────────────────────────── */
  fr: {
    nav_install: 'GitHub →',
    hero_badge: 'Extension Chrome gratuite',
    hero_title_html: 'Suivez votre <em>quota Codex</em><br/>avant qu\'il s\'épuise',
    hero_desc_html: 'Suivez l\'utilisation de votre session et quota hebdomadaire Codex directement dans la barre d\'outils — sans configuration, sans distraction. Gratuit et <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">open source</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'Voir le code source',
    pill_session: 'Usage de session', pill_weekly: 'Usage hebdomadaire', pill_design: 'Codex credits',
    pill_refresh: 'Actualisation auto', pill_langs: '10 langues', pill_free: 'Gratuit', pill_opensource: 'Open source',
    features_title: 'Tout ce qu\'il vous faut, rien de plus',
    features_sub: 'Simple par conception. Puissant là où ça compte.',
    feat1_title: 'Usage de session (5h)',
    feat1_desc: 'Voyez exactement combien de votre fenêtre de session de 5 heures vous avez utilisé, avec une barre de progression colorée.',
    feat2_title: 'Usage hebdomadaire (7 jours)',
    feat2_desc: 'Suivez votre quota de 7 jours pour tous les modèles et Codex credits séparément, chacun avec son propre minuteur.',
    feat3_title: 'Actualisation automatique en arrière-plan',
    feat3_desc: 'Les données se mettent à jour automatiquement toutes les 10 minutes et après chaque votre session ChatGPT authentifiée. Aucun onglet ouvert requis.',
    feat4_title: 'Badge dans la barre d\'outils',
    feat4_desc: 'Votre pourcentage d\'utilisation toujours visible sur l\'icône. Devient orange à 70 %, rouge à 90 %.',
    feat5_title: '10 langues',
    feat5_desc: 'Disponible en anglais, portugais, espagnol, français, arabe, bengali, hindi, indonésien, russe et chinois.',
    feat6_title: 'Privé et open source',
    feat6_desc_html: 'Aucun compte, aucun suivi, aucune collecte de données. Tout reste dans votre navigateur. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">Inspectez le code source</a> et vérifiez par vous-même.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',
    footer_github: 'GitHub',
    footer_privacy: 'Politique de Confidentialité',
    footer_copy: '© 2026 The Codex Quota Monitor team · Non affilié à OpenAI',
    footer_email_html: 'Questions ou retours ? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'Politique de Confidentialité — Dernière mise à jour : 15 mai 2026',
    pp_s1_title: 'Aperçu',
    pp_s1_p: 'Codex Quota Monitor est une extension de navigateur qui affiche votre quota d\'utilisation Codex directement dans la barre d\'outils.',
    pp_s1_h1: '🔒 Nous ne collectons, ne transmettons ni ne stockons aucune donnée personnelle sur des serveurs externes. Tout reste sur votre appareil.',
    pp_s1_h2_html: '🔓 Cette extension est <strong>open source</strong>. Vous pouvez inspecter chaque ligne de code sur <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> et vérifier nos pratiques de confidentialité vous-même.',
    pp_s2_title: 'Quelles données sont accédées',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'Ces données sont stockées localement sur votre appareil via l\'API intégrée du navigateur <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> et ne sont jamais envoyées ailleurs.',
    pp_s3_title: 'Ce que nous ne faisons pas',
    pp_s3_items_html: '<li>Nous ne collectons aucune information personnelle identifiable</li><li>Nous ne transmettons aucune donnée à des serveurs externes</li><li>Nous n\'utilisons pas d\'analyses, de pixels de suivi ou de télémétrie</li><li>Nous ne partageons pas de données avec des tiers</li><li>Nous ne lisons pas vos conversations ni aucun contenu Codex</li><li>Nous ne stockons pas de données au-delà de ce qui est nécessaire pour afficher votre quota</li>',
    pp_s4_title: 'Permissions expliquées',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — enregistre les données de quota localement sur votre appareil</li><li><strong style="color:#e8e8f0">tabs</strong> — ouvre chatgpt.com quand vous cliquez sur "Voir le quota"</li><li><strong style="color:#e8e8f0">alarms</strong> — planifie l\'actualisation en arrière-plan toutes les 10 minutes</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — lit l\'API d\'utilisation avec vos cookies de session existants</li>',
    pp_s5_title: 'Services tiers',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'Confidentialité des enfants',
    pp_s6_p: 'Cette extension n\'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons sciemment aucune information auprès des enfants.',
    pp_s7_title: 'Modifications de cette politique',
    pp_s7_p: 'Si nous apportons des modifications importantes à cette politique de confidentialité, nous mettrons à jour la date de "Dernière mise à jour" en haut de cette page.',
    pp_s8_title: 'Contact',
    pp_s8_p: 'Si vous avez des questions sur cette politique de confidentialité, contactez-nous à :',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── ARABIC ───────────────────────────────────────────────── */
  ar: {
    nav_install: 'GitHub →',
    hero_badge: 'إضافة Chrome مجانية',
    hero_title_html: 'اعرف <em>حصتك في Codex</em><br/>قبل أن تنفد',
    hero_desc_html: 'تتبع استخدام جلستك والحصة الأسبوعية في Codex مباشرةً من شريط أدوات المتصفح — بدون إعداد، بدون إلهاء. مجاني و<a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">مفتوح المصدر</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'عرض الكود المصدري',
    pill_session: 'استخدام الجلسة', pill_weekly: 'الاستخدام الأسبوعي', pill_design: 'Codex credits',
    pill_refresh: 'تحديث تلقائي', pill_langs: '10 لغات', pill_free: 'مجاني', pill_opensource: 'مفتوح المصدر',
    features_title: 'كل ما تحتاجه، لا أكثر',
    features_sub: 'بسيط في التصميم. قوي حيث يهم.',
    feat1_title: 'استخدام الجلسة (5 ساعات)',
    feat1_desc: 'شاهد بالضبط كم استخدمت من نافذة جلسة الـ 5 ساعات، مع شريط تقدم ملوّن.',
    feat2_title: 'الاستخدام الأسبوعي (7 أيام)',
    feat2_desc: 'تتبع حصتك لمدة 7 أيام لجميع النماذج وCodex credits بشكل منفصل، مع مؤقت إعادة ضبط خاص بكل منهما.',
    feat3_title: 'تحديث تلقائي في الخلفية',
    feat3_desc: 'تتحدث البيانات تلقائياً كل 10 دقائق وبعد كل رد من Codex. لا حاجة لتبويب مفتوح.',
    feat4_title: 'شارة في شريط الأدوات',
    feat4_desc: 'نسبة استخدامك دائماً مرئية على أيقونة الإضافة. تتحول إلى البرتقالي عند 70%، والأحمر عند 90%.',
    feat5_title: '10 لغات',
    feat5_desc: 'متوفر بالإنجليزية والبرتغالية والإسبانية والفرنسية والعربية والبنغالية والهندية والإندونيسية والروسية والصينية.',
    feat6_title: 'خاص ومفتوح المصدر',
    feat6_desc_html: 'بدون حساب، بدون تتبع، بدون جمع بيانات. كل شيء يبقى في متصفحك. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">افحص الكود المصدري</a> وتحقق بنفسك.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'سياسة الخصوصية',
    footer_copy: '© 2026 فريق Codex Quota Monitor · غير تابع لـ OpenAI',
    footer_email_html: 'أسئلة أو ملاحظات؟ <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'سياسة الخصوصية — آخر تحديث: 15 مايو 2026',
    pp_s1_title: 'نظرة عامة',
    pp_s1_p: 'Codex Quota Monitor إضافة متصفح تعرض حصة استخدامك في Codex مباشرةً في شريط الأدوات.',
    pp_s1_h1: '🔒 لا نجمع أو ننقل أو نخزن أي بيانات شخصية على خوادم خارجية. كل شيء يبقى على جهازك.',
    pp_s1_h2_html: '🔓 هذه الإضافة <strong>مفتوحة المصدر</strong>. يمكنك فحص كل سطر من الكود على <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> والتحقق من ممارسات الخصوصية بنفسك.',
    pp_s2_title: 'ما البيانات التي يتم الوصول إليها',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'تُخزَّن هذه البيانات محلياً على جهازك باستخدام API المتصفح المدمجة <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> ولا تُرسَل إلى أي مكان آخر.',
    pp_s3_title: 'ما لا نفعله',
    pp_s3_items_html: '<li>لا نجمع أي معلومات تعريفية شخصية</li><li>لا ننقل أي بيانات إلى خوادم خارجية</li><li>لا نستخدم أدوات تحليل أو بكسلات تتبع أو قياس عن بعد</li><li>لا نشارك البيانات مع أطراف ثالثة</li><li>لا نقرأ محادثاتك أو أي محتوى في Codex</li><li>لا نخزن بيانات تتجاوز ما هو ضروري لعرض حصتك</li>',
    pp_s4_title: 'شرح الأذونات',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — يحفظ بيانات الحصة محلياً على جهازك</li><li><strong style="color:#e8e8f0">tabs</strong> — يفتح chatgpt.com عند النقر على "عرض الحصة"</li><li><strong style="color:#e8e8f0">alarms</strong> — يجدول التحديث في الخلفية كل 10 دقائق</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — يقرأ API الاستخدام باستخدام ملفات تعريف الارتباط لجلستك الموجودة</li>',
    pp_s5_title: 'خدمات الطرف الثالث',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'خصوصية الأطفال',
    pp_s6_p: 'هذه الإضافة غير موجهة للأطفال دون سن 13 عاماً. لا نجمع عن قصد أي معلومات من الأطفال.',
    pp_s7_title: 'التغييرات على هذه السياسة',
    pp_s7_p: 'إذا أجرينا تغييرات جوهرية على سياسة الخصوصية هذه، سنحدّث تاريخ "آخر تحديث" في أعلى هذه الصفحة.',
    pp_s8_title: 'التواصل',
    pp_s8_p: 'إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── BENGALI ──────────────────────────────────────────────── */
  bn: {
    nav_install: 'GitHub →',
    hero_badge: 'বিনামূল্যে Chrome এক্সটেনশন',
    hero_title_html: 'আপনার <em>Codex কোটা</em> জানুন<br/>শেষ হওয়ার আগেই',
    hero_desc_html: 'ব্রাউজার টুলবারে সরাসরি Codex সেশন ও সাপ্তাহিক ব্যবহার ট্র্যাক করুন — কোনো সেটআপ নেই, কোনো বিভ্রান্তি নেই। বিনামূল্যে এবং <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">ওপেন সোর্স</a>।',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'সোর্স কোড দেখুন',
    pill_session: 'সেশন ব্যবহার', pill_weekly: 'সাপ্তাহিক ব্যবহার', pill_design: 'Codex credits',
    pill_refresh: 'স্বয়ংক্রিয় রিফ্রেশ', pill_langs: '১০টি ভাষা', pill_free: 'বিনামূল্যে', pill_opensource: 'ওপেন সোর্স',
    features_title: 'যা দরকার সব আছে, অতিরিক্ত কিছু নেই',
    features_sub: 'ডিজাইনে সহজ। যেখানে দরকার সেখানে শক্তিশালী।',
    feat1_title: 'সেশন ব্যবহার (৫ঘ)',
    feat1_desc: '৫ ঘণ্টার সেশন উইন্ডোর কতটুকু ব্যবহার হয়েছে ঠিক সেটি দেখুন, রঙ-কোডেড প্রগ্রেস বারসহ।',
    feat2_title: 'সাপ্তাহিক ব্যবহার (৭ দিন)',
    feat2_desc: 'সকল মডেল ও Codex credits-এর ৭ দিনের কোটা আলাদাভাবে ট্র্যাক করুন, প্রতিটির নিজস্ব রিসেট টাইমারসহ।',
    feat3_title: 'ব্যাকগ্রাউন্ড অটো রিফ্রেশ',
    feat3_desc: 'প্রতি ১০ মিনিটে এবং প্রতিটি Codex উত্তরের পরে স্বয়ংক্রিয়ভাবে ডেটা আপডেট হয়। কোনো ট্যাব খোলার দরকার নেই।',
    feat4_title: 'টুলবার ব্যাজ',
    feat4_desc: 'এক্সটেনশন আইকনে সবসময় ব্যবহারের শতাংশ দেখা যায়। ৭০%-এ কমলা, ৯০%-এ লাল হয়।',
    feat5_title: '১০টি ভাষা',
    feat5_desc: 'ইংরেজি, পর্তুগিজ, স্পেনীয়, ফরাসি, আরবি, বাংলা, হিন্দি, ইন্দোনেশিয়ান, রাশিয়ান এবং চীনা ভাষায় উপলব্ধ।',
    feat6_title: 'প্রাইভেট ও ওপেন সোর্স',
    feat6_desc_html: 'কোনো অ্যাকাউন্ট নেই, ট্র্যাকিং নেই, ডেটা সংগ্রহ নেই। সব ব্রাউজারেই থাকে। <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">সোর্স কোড পরীক্ষা করুন</a> এবং নিজেই যাচাই করুন।',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'গোপনীয়তা নীতি',
    footer_copy: '© ২০২৬ The Codex Quota Monitor team · OpenAI-এর সাথে অসংযুক্ত',
    footer_email_html: 'প্রশ্ন বা মতামত? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'গোপনীয়তা নীতি — সর্বশেষ আপডেট: ১৫ মে ২০২৬',
    pp_s1_title: 'সংক্ষিপ্ত বিবরণ',
    pp_s1_p: 'Codex Quota Monitor একটি ব্রাউজার এক্সটেনশন যা আপনার Codex ব্যবহারের কোটা সরাসরি ব্রাউজার টুলবারে প্রদর্শন করে।',
    pp_s1_h1: '🔒 আমরা বাহ্যিক সার্ভারে কোনো ব্যক্তিগত ডেটা সংগ্রহ, প্রেরণ বা সংরক্ষণ করি না। সব কিছু আপনার ডিভাইসেই থাকে।',
    pp_s1_h2_html: '🔓 এই এক্সটেনশনটি <strong>ওপেন সোর্স</strong>। আপনি <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a>-এ প্রতিটি লাইন কোড পরীক্ষা করতে পারেন।',
    pp_s2_title: 'কোন ডেটা অ্যাক্সেস করা হয়',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'এই ডেটা ব্রাউজারের অন্তর্নির্মিত <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> API ব্যবহার করে স্থানীয়ভাবে সংরক্ষিত হয় এবং অন্য কোথাও পাঠানো হয় না।',
    pp_s3_title: 'আমরা যা করি না',
    pp_s3_items_html: '<li>কোনো ব্যক্তিগত পরিচয়যোগ্য তথ্য সংগ্রহ করি না</li><li>বাহ্যিক সার্ভারে ডেটা প্রেরণ করি না</li><li>অ্যানালিটিক্স, ট্র্যাকিং পিক্সেল বা টেলিমেট্রি ব্যবহার করি না</li><li>তৃতীয় পক্ষের সাথে ডেটা ভাগ করি না</li><li>আপনার কথোপকথন বা Codex কন্টেন্ট পড়ি না</li><li>কোটা প্রদর্শনের জন্য প্রয়োজনীয়তার বাইরে ডেটা সংরক্ষণ করি না</li>',
    pp_s4_title: 'অনুমতি ব্যাখ্যা',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — কোটা ডেটা স্থানীয়ভাবে সংরক্ষণ করে</li><li><strong style="color:#e8e8f0">tabs</strong> — "কোটা দেখুন" বোতামে ক্লিক করলে chatgpt.com খোলে</li><li><strong style="color:#e8e8f0">alarms</strong> — প্রতি ১০ মিনিটে ব্যাকগ্রাউন্ড রিফ্রেশ নির্ধারণ করে</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — বিদ্যমান সেশন কুকি ব্যবহার করে ব্যবহার API পড়ে</li>',
    pp_s5_title: 'তৃতীয় পক্ষের সেবা',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'শিশুদের গোপনীয়তা',
    pp_s6_p: 'এই এক্সটেনশনটি ১৩ বছরের কম বয়সী শিশুদের জন্য নয়। আমরা জেনেশুনে শিশুদের কাছ থেকে কোনো তথ্য সংগ্রহ করি না।',
    pp_s7_title: 'এই নীতিতে পরিবর্তন',
    pp_s7_p: 'এই গোপনীয়তা নীতিতে উল্লেখযোগ্য পরিবর্তন করলে আমরা এই পৃষ্ঠার শীর্ষে "সর্বশেষ আপডেট" তারিখ আপডেট করব।',
    pp_s8_title: 'যোগাযোগ',
    pp_s8_p: 'এই গোপনীয়তা নীতি সম্পর্কে প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── HINDI ────────────────────────────────────────────────── */
  hi: {
    nav_install: 'GitHub →',
    hero_badge: 'मुफ़्त Chrome एक्सटेंशन',
    hero_title_html: 'अपना <em>Codex कोटा</em> जानें<br/>खत्म होने से पहले',
    hero_desc_html: 'ब्राउज़र टूलबार में सीधे Codex सेशन और साप्ताहिक उपयोग ट्रैक करें — कोई सेटअप नहीं, कोई विकर्षण नहीं। मुफ़्त और <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">ओपन सोर्स</a>।',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'सोर्स कोड देखें',
    pill_session: 'सेशन उपयोग', pill_weekly: 'साप्ताहिक उपयोग', pill_design: 'Codex credits',
    pill_refresh: 'स्वचालित रिफ्रेश', pill_langs: '10 भाषाएँ', pill_free: 'मुफ़्त', pill_opensource: 'ओपन सोर्स',
    features_title: 'जो चाहिए वो सब, जो नहीं चाहिए वो कुछ नहीं',
    features_sub: 'डिज़ाइन में सरल। जहाँ ज़रूरी वहाँ शक्तिशाली।',
    feat1_title: 'सेशन उपयोग (5घ)',
    feat1_desc: 'देखें कि आपने 5 घंटे की सेशन विंडो का कितना उपयोग किया है, रंग-कोडेड प्रगति बार के साथ।',
    feat2_title: 'साप्ताहिक उपयोग (7 दिन)',
    feat2_desc: 'सभी मॉडल और Codex credits के लिए 7 दिन का कोटा अलग-अलग ट्रैक करें, प्रत्येक के अपने रीसेट टाइमर के साथ।',
    feat3_title: 'स्वचालित बैकग्राउंड रिफ्रेश',
    feat3_desc: 'डेटा हर 10 मिनट में और हर Codex जवाब के बाद स्वचालित रूप से अपडेट होता है। कोई टैब खुला रखने की ज़रूरत नहीं।',
    feat4_title: 'टूलबार बैज',
    feat4_desc: 'एक्सटेंशन आइकन पर हमेशा उपयोग प्रतिशत दिखाई देता है। 70% पर नारंगी, 90% पर लाल हो जाता है।',
    feat5_title: '10 भाषाएँ',
    feat5_desc: 'अंग्रेज़ी, पुर्तगाली, स्पेनिश, फ्रेंच, अरबी, बंगाली, हिंदी, इंडोनेशियाई, रूसी और चीनी में उपलब्ध।',
    feat6_title: 'निजी और ओपन सोर्स',
    feat6_desc_html: 'कोई अकाउंट नहीं, कोई ट्रैकिंग नहीं, कोई डेटा संग्रह नहीं। सब कुछ आपके ब्राउज़र में रहता है। <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">सोर्स कोड जाँचें</a> और खुद सत्यापित करें।',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'गोपनीयता नीति',
    footer_copy: '© 2026 The Codex Quota Monitor team · OpenAI से असंबद्ध',
    footer_email_html: 'प्रश्न या सुझाव? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'गोपनीयता नीति — अंतिम अपडेट: 15 मई 2026',
    pp_s1_title: 'अवलोकन',
    pp_s1_p: 'Codex Quota Monitor एक ब्राउज़र एक्सटेंशन है जो आपके Codex उपयोग कोटा को सीधे ब्राउज़र टूलबार में प्रदर्शित करता है।',
    pp_s1_h1: '🔒 हम बाहरी सर्वर पर कोई व्यक्तिगत डेटा एकत्र, प्रसारित या संग्रहीत नहीं करते। सब कुछ आपके डिवाइस पर रहता है।',
    pp_s1_h2_html: '🔓 यह एक्सटेंशन <strong>ओपन सोर्स</strong> है। आप <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> पर हर लाइन कोड जाँच सकते हैं।',
    pp_s2_title: 'कौन सा डेटा एक्सेस किया जाता है',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'यह डेटा ब्राउज़र की अंतर्निहित <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> API का उपयोग करके स्थानीय रूप से संग्रहीत होता है और कहीं और नहीं भेजा जाता।',
    pp_s3_title: 'हम क्या नहीं करते',
    pp_s3_items_html: '<li>कोई व्यक्तिगत पहचान योग्य जानकारी एकत्र नहीं करते</li><li>बाहरी सर्वर पर डेटा प्रसारित नहीं करते</li><li>एनालिटिक्स, ट्रैकिंग पिक्सल या टेलीमेट्री का उपयोग नहीं करते</li><li>तृतीय पक्षों के साथ डेटा साझा नहीं करते</li><li>आपकी बातचीत या कोई Codex सामग्री नहीं पढ़ते</li><li>कोटा प्रदर्शित करने के लिए आवश्यकता से अधिक डेटा संग्रहीत नहीं करते</li>',
    pp_s4_title: 'अनुमतियाँ समझाई गई',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — कोटा डेटा स्थानीय रूप से सहेजता है</li><li><strong style="color:#e8e8f0">tabs</strong> — "कोटा देखें" बटन क्लिक करने पर chatgpt.com खोलता है</li><li><strong style="color:#e8e8f0">alarms</strong> — हर 10 मिनट में बैकग्राउंड रिफ्रेश शेड्यूल करता है</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — मौजूदा सेशन कुकीज़ से उपयोग API पढ़ता है</li>',
    pp_s5_title: 'तृतीय पक्ष सेवाएँ',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'बच्चों की गोपनीयता',
    pp_s6_p: 'यह एक्सटेंशन 13 वर्ष से कम आयु के बच्चों के लिए नहीं है। हम जानबूझकर बच्चों से कोई जानकारी एकत्र नहीं करते।',
    pp_s7_title: 'इस नीति में बदलाव',
    pp_s7_p: 'यदि हम इस गोपनीयता नीति में महत्वपूर्ण बदलाव करते हैं, तो हम इस पृष्ठ के शीर्ष पर "अंतिम अपडेट" तारीख अपडेट करेंगे।',
    pp_s8_title: 'संपर्क',
    pp_s8_p: 'इस गोपनीयता नीति के बारे में प्रश्न होने पर हमसे संपर्क करें:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── BAHASA INDONESIA ─────────────────────────────────────── */
  id: {
    nav_install: 'GitHub →',
    hero_badge: 'Ekstensi Chrome Gratis',
    hero_title_html: 'Ketahui <em>kuota Codex</em>-mu<br/>sebelum habis',
    hero_desc_html: 'Pantau penggunaan sesi dan kuota mingguan Codex langsung di toolbar browser — tanpa pengaturan, tanpa gangguan. Gratis dan <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">open source</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'Lihat kode sumber',
    pill_session: 'Penggunaan sesi', pill_weekly: 'Penggunaan mingguan', pill_design: 'Codex credits',
    pill_refresh: 'Pembaruan otomatis', pill_langs: '10 bahasa', pill_free: 'Gratis', pill_opensource: 'Open source',
    features_title: 'Semua yang dibutuhkan, tidak lebih',
    features_sub: 'Sederhana dalam desain. Powerful di mana penting.',
    feat1_title: 'Penggunaan sesi (5j)',
    feat1_desc: 'Lihat persis berapa banyak jendela sesi 5 jam Anda yang telah digunakan, dengan bilah kemajuan berkode warna.',
    feat2_title: 'Penggunaan mingguan (7 hari)',
    feat2_desc: 'Pantau kuota 7 hari untuk semua model dan Codex credits secara terpisah, masing-masing dengan pengatur waktu reset sendiri.',
    feat3_title: 'Pembaruan otomatis di latar belakang',
    feat3_desc: 'Data diperbarui otomatis setiap 10 menit dan setelah setiap respons Codex. Tidak perlu tab terbuka.',
    feat4_title: 'Lencana di toolbar',
    feat4_desc: 'Persentase penggunaan selalu terlihat di ikon ekstensi. Berubah oranye di 70%, merah di 90%.',
    feat5_title: '10 bahasa',
    feat5_desc: 'Tersedia dalam bahasa Inggris, Portugis, Spanyol, Prancis, Arab, Bengali, Hindi, Indonesia, Rusia, dan Mandarin.',
    feat6_title: 'Privat & open source',
    feat6_desc_html: 'Tanpa akun, tanpa pelacakan, tanpa pengumpulan data. Semuanya tetap di browser Anda. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">Periksa kode sumber</a> dan verifikasi sendiri.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'Kebijakan Privasi',
    footer_copy: '© 2026 The Codex Quota Monitor team · Tidak berafiliasi dengan OpenAI',
    footer_email_html: 'Pertanyaan atau masukan? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'Kebijakan Privasi — Terakhir diperbarui: 15 Mei 2026',
    pp_s1_title: 'Ikhtisar',
    pp_s1_p: 'Codex Quota Monitor adalah ekstensi browser yang menampilkan kuota penggunaan Codex Anda langsung di toolbar browser.',
    pp_s1_h1: '🔒 Kami tidak mengumpulkan, mengirimkan, atau menyimpan data pribadi apa pun di server eksternal. Semuanya tetap di perangkat Anda.',
    pp_s1_h2_html: '🔓 Ekstensi ini bersifat <strong>open source</strong>. Anda dapat memeriksa setiap baris kode di <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> dan memverifikasi praktik privasi kami sendiri.',
    pp_s2_title: 'Data apa yang diakses',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'Data ini disimpan secara lokal di perangkat Anda menggunakan API bawaan browser <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> dan tidak pernah dikirim ke tempat lain.',
    pp_s3_title: 'Yang tidak kami lakukan',
    pp_s3_items_html: '<li>Tidak mengumpulkan informasi identitas pribadi</li><li>Tidak mengirimkan data ke server eksternal</li><li>Tidak menggunakan analitik, piksel pelacakan, atau telemetri</li><li>Tidak berbagi data dengan pihak ketiga</li><li>Tidak membaca percakapan atau konten Codex Anda</li><li>Tidak menyimpan data melebihi yang diperlukan untuk menampilkan kuota</li>',
    pp_s4_title: 'Izin dijelaskan',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — menyimpan data kuota secara lokal di perangkat Anda</li><li><strong style="color:#e8e8f0">tabs</strong> — membuka chatgpt.com saat Anda mengklik tombol "Lihat kuota"</li><li><strong style="color:#e8e8f0">alarms</strong> — menjadwalkan pembaruan latar belakang setiap 10 menit</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — membaca API penggunaan menggunakan cookie sesi Anda yang ada</li>',
    pp_s5_title: 'Layanan pihak ketiga',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'Privasi anak-anak',
    pp_s6_p: 'Ekstensi ini tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi dari anak-anak.',
    pp_s7_title: 'Perubahan kebijakan ini',
    pp_s7_p: 'Jika kami membuat perubahan material pada kebijakan privasi ini, kami akan memperbarui tanggal "Terakhir diperbarui" di bagian atas halaman ini.',
    pp_s8_title: 'Kontak',
    pp_s8_p: 'Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, hubungi kami di:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── RUSSIAN ──────────────────────────────────────────────── */
  ru: {
    nav_install: 'GitHub →',
    hero_badge: 'Бесплатное расширение Chrome',
    hero_title_html: 'Следите за <em>квотой Codex</em><br/>до того, как она закончится',
    hero_desc_html: 'Отслеживайте использование сессии и недельной квоты Codex прямо на панели инструментов браузера — без настройки, без отвлечений. Бесплатно и <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">с открытым исходным кодом</a>.',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: 'Исходный код',
    pill_session: 'Использование сессии', pill_weekly: 'Недельное использование', pill_design: 'Codex credits',
    pill_refresh: 'Автообновление', pill_langs: '10 языков', pill_free: 'Бесплатно', pill_opensource: 'Открытый код',
    features_title: 'Всё что нужно, ничего лишнего',
    features_sub: 'Простой дизайн. Мощный там, где важно.',
    feat1_title: 'Использование сессии (5ч)',
    feat1_desc: 'Точно видите, сколько из 5-часового окна сессии использовано, с цветовой индикацией.',
    feat2_title: 'Недельное использование (7 дней)',
    feat2_desc: 'Следите за 7-дневной квотой для всех моделей и Codex credits отдельно, у каждого свой таймер сброса.',
    feat3_title: 'Автообновление в фоне',
    feat3_desc: 'Данные обновляются автоматически каждые 10 минут и после каждого ответа Codex. Открытая вкладка не нужна.',
    feat4_title: 'Значок на панели инструментов',
    feat4_desc: 'Процент использования всегда виден на иконке расширения. Становится оранжевым при 70%, красным при 90%.',
    feat5_title: '10 языков',
    feat5_desc: 'Доступно на английском, португальском, испанском, французском, арабском, бенгальском, хинди, индонезийском, русском и китайском.',
    feat6_title: 'Приватный и открытый код',
    feat6_desc_html: 'Без аккаунта, без отслеживания, без сбора данных. Всё остаётся в вашем браузере. <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">Изучите исходный код</a> и убедитесь сами.',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: 'Политика конфиденциальности',
    footer_copy: '© 2026 The Codex Quota Monitor team · Не аффилирован с OpenAI',
    footer_email_html: 'Вопросы или отзывы? <a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: 'Политика конфиденциальности — Последнее обновление: 15 мая 2026',
    pp_s1_title: 'Обзор',
    pp_s1_p: 'Codex Quota Monitor — расширение браузера, которое отображает вашу квоту использования Codex прямо на панели инструментов.',
    pp_s1_h1: '🔒 Мы не собираем, не передаём и не храним личные данные на внешних серверах. Всё остаётся на вашем устройстве.',
    pp_s1_h2_html: '🔓 Это расширение с <strong>открытым исходным кодом</strong>. Вы можете проверить каждую строку кода на <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a>.',
    pp_s2_title: 'К каким данным осуществляется доступ',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: 'Данные хранятся локально на вашем устройстве с помощью встроенного API браузера <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> и никуда не отправляются.',
    pp_s3_title: 'Что мы не делаем',
    pp_s3_items_html: '<li>Не собираем персональные данные</li><li>Не передаём данные на внешние серверы</li><li>Не используем аналитику, пиксели отслеживания или телеметрию</li><li>Не передаём данные третьим лицам</li><li>Не читаем ваши переписки или контент Codex</li><li>Не храним данные сверх необходимого для отображения квоты</li>',
    pp_s4_title: 'Объяснение разрешений',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — сохраняет данные квоты локально на устройстве</li><li><strong style="color:#e8e8f0">tabs</strong> — открывает chatgpt.com при нажатии кнопки "Просмотр квоты"</li><li><strong style="color:#e8e8f0">alarms</strong> — планирует фоновое обновление каждые 10 минут</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — читает API использования через куки вашей сессии</li>',
    pp_s5_title: 'Сторонние сервисы',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: 'Конфиденциальность детей',
    pp_s6_p: 'Расширение не предназначено для детей до 13 лет. Мы намеренно не собираем данные от детей.',
    pp_s7_title: 'Изменения политики',
    pp_s7_p: 'При существенных изменениях в политике конфиденциальности мы обновим дату «Последнее обновление» в верхней части страницы.',
    pp_s8_title: 'Контакты',
    pp_s8_p: 'По вопросам о политике конфиденциальности обращайтесь к нам:',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

  /* ── CHINESE SIMPLIFIED ───────────────────────────────────── */
  zh_CN: {
    nav_install: 'GitHub →',
    hero_badge: '免费 Chrome 扩展',
    hero_title_html: '随时掌握您的 <em>Codex 配额</em><br/>不再措手不及',
    hero_desc_html: '直接在浏览器工具栏中跟踪您的 Codex 会话和每周使用情况 — 无需设置，无干扰。免费且<a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);text-decoration:underline;text-underline-offset:3px;">开源</a>。',
    version_notice: 'Changelog',
    cta_install: 'GitHub',
    cta_source: '查看源代码',
    pill_session: '会话用量', pill_weekly: '每周用量', pill_design: 'Codex credits',
    pill_refresh: '自动刷新', pill_langs: '10种语言', pill_free: '免费', pill_opensource: '开源',
    features_title: '您需要的一切，仅此而已',
    features_sub: '设计简洁，功能强大。',
    feat1_title: '会话用量（5小时）',
    feat1_desc: '通过颜色编码的进度条，精确查看您已使用的5小时会话窗口比例。',
    feat2_title: '每周用量（7天）',
    feat2_desc: '分别跟踪所有模型和 Codex credits 的7天配额，每项均有独立的重置计时器。',
    feat3_title: '自动后台刷新',
    feat3_desc: '数据每10分钟自动更新一次，每次 Codex 回复后也会更新。无需保持标签页打开。',
    feat4_title: '工具栏徽章',
    feat4_desc: '扩展图标上始终显示当前使用率。70%时变为橙色，90%时变为红色。',
    feat5_title: '10种语言',
    feat5_desc: '支持英语、葡萄牙语、西班牙语、法语、阿拉伯语、孟加拉语、印地语、印尼语、俄语和中文。',
    feat6_title: '隐私保护与开源',
    feat6_desc_html: '无账号、无追踪、无数据收集。一切保留在您的浏览器中。<a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple);">查看源代码</a>，自行验证。',
    preview_title: 'Preview',
    preview_sub: 'Product screenshots will be added soon.',
    preview_slide1_title: 'Popup overview',
    preview_slide2_title: 'Dark theme',
    preview_slide3_title: 'Onboarding',
    preview_slide_placeholder: 'Image placeholder',

    footer_github: 'GitHub',
    footer_privacy: '隐私政策',
    footer_copy: '© 2026 Codex Quota Monitor 团队 · 与 OpenAI 无关联',
    footer_email_html: '有问题或反馈？<a href="mailto:codexquotamonitor@gmail.com" style="color:var(--muted);text-decoration:underline;text-underline-offset:3px;">codexquotamonitor@gmail.com</a>',
    pp_subtitle: '隐私政策 — 最后更新：2026年5月15日',
    pp_s1_title: '概述',
    pp_s1_p: 'Codex Quota Monitor 是一款浏览器扩展，可直接在浏览器工具栏中显示您的 Codex 配额使用情况。',
    pp_s1_h1: '🔒 我们不会在外部服务器上收集、传输或存储任何个人数据。一切数据均保留在您的设备上。',
    pp_s1_h2_html: '🔓 本扩展为<strong>开源项目</strong>。您可以在 <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" style="color:var(--purple)">github.com/codexquotamonitor/codex-quota-monitor</a> 查阅每一行代码，自行验证我们的隐私实践。',
    pp_s2_title: '访问哪些数据',
    pp_s2_p: 'The extension reads quota data from ChatGPT’s own usage endpoint using your existing authenticated browser session:',
    pp_s2_items_html: '<li>Your current Codex usage limits</li><li>Session quota usage percentage and reset time (5-hour window)</li><li>Weekly quota usage percentage and reset time (7-day window)</li><li>Any extra Codex credits available beyond your plan limits</li><li>Your account plan type (for example, Plus)</li>',
    pp_s2_note_html: '这些数据使用浏览器内置的 <code style="font-size:12px;background:#1a1a2e;padding:1px 6px;border-radius:4px;color:#ffb74d">chrome.storage.local</code> API 存储在本地设备上，从不发送到其他地方。',
    pp_s3_title: '我们不做的事',
    pp_s3_items_html: '<li>不收集任何个人身份信息</li><li>不向外部服务器传输任何数据</li><li>不使用分析工具、跟踪像素或遥测</li><li>不与第三方共享数据</li><li>不读取您的对话或任何 Codex 内容</li><li>不存储超出显示配额所需的数据</li>',
    pp_s4_title: '权限说明',
    pp_s4_items_html: '<li><strong style="color:#e8e8f0">storage</strong> — 在本地设备上保存配额数据</li><li><strong style="color:#e8e8f0">tabs</strong> — 点击"查看配额"按钮时打开 chatgpt.com</li><li><strong style="color:#e8e8f0">alarms</strong> — 每10分钟安排一次后台刷新</li><li><strong style="color:#e8e8f0">host permission (chatgpt.com)</strong> — 使用现有会话 Cookie 读取使用量 API</li>',
    pp_s5_title: '第三方服务',
    pp_s5_p1: 'The extension does not integrate with any third-party services, SDKs, or APIs other than ChatGPT’s own usage endpoint, which you are already authenticated with.',
    pp_s5_p2_html: '',
    pp_s6_title: '儿童隐私',
    pp_s6_p: '本扩展不面向13岁以下儿童。我们不会故意收集儿童的任何信息。',
    pp_s7_title: '政策变更',
    pp_s7_p: '如果我们对本隐私政策进行重大更改，我们将更新本页顶部的"最后更新"日期。我们建议您定期查阅本页。',
    pp_s8_title: '联系方式',
    pp_s8_p: '如您对本隐私政策有任何疑问，请通过以下方式联系我们：',
    pp_s8_store_html: 'Project page: <a href="https://github.com/codexquotamonitor/codex-quota-monitor" target="_blank" rel="noopener">GitHub</a>',
    pp_footer_html: '&copy; 2026 The Codex Quota Monitor team',
  },

};

/* ── LANGUAGE DETECTION ─────────────────────────────────────── */
function cqmDetectLang() {
  const stored = localStorage.getItem('cqm_lang');
  if (stored && CQM_T[stored]) return stored;
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (nav.startsWith('pt')) return 'pt_BR';
  if (nav.startsWith('zh')) return 'zh_CN';
  if (nav.startsWith('ar')) return 'ar';
  if (nav.startsWith('bn')) return 'bn';
  if (nav.startsWith('hi')) return 'hi';
  if (nav.startsWith('id')) return 'id';
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('fr')) return 'fr';
  if (nav.startsWith('es')) return 'es';
  return 'en';
}

/* ── APPLY TRANSLATIONS ─────────────────────────────────────── */
function cqmApplyLang(lang) {
  const s = CQM_T[lang] || CQM_T['en'];
  const dir = CQM_LANGS[lang].dir;
  document.documentElement.lang = lang.replace('_', '-');
  document.documentElement.dir = dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = s[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = s[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  // Update switcher button label
  const btn = document.getElementById('cqm-lang-btn');
  if (btn) btn.querySelector('.cqm-lang-label').textContent = CQM_LANGS[lang].name;
  // Store
  localStorage.setItem('cqm_lang', lang);
  // Close dropdown
  const dd = document.getElementById('cqm-lang-dd');
  if (dd) dd.classList.remove('open');
}

/* ── LANGUAGE SWITCHER ──────────────────────────────────────── */
function cqmBuildSwitcher(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Inject CSS once
  if (!document.getElementById('cqm-i18n-css')) {
    const style = document.createElement('style');
    style.id = 'cqm-i18n-css';
    style.textContent = `
      .cqm-switcher { position: relative; display: inline-flex; }
      #cqm-lang-btn {
        display: inline-flex; align-items: center; gap: 6px;
        background: rgba(230,126,0,.08); border: 1px solid rgba(230,126,0,.2);
        border-radius: 8px; padding: 6px 12px; cursor: pointer; color: #ffb74d;
        font-size: 13px; font-weight: 500; font-family: inherit;
        transition: background .2s;
      }
      #cqm-lang-btn:hover { background: rgba(230,126,0,.15); }
      #cqm-lang-dd {
        display: none; position: absolute; top: calc(100% + 6px); right: 0;
        background: #0f0f1a; border: 1px solid rgba(230,126,0,.2);
        border-radius: 10px; overflow: hidden; z-index: 200;
        box-shadow: 0 8px 24px rgba(0,0,0,.5); min-width: 180px;
      }
      #cqm-lang-dd.open { display: block; }
      .cqm-lang-option {
        display: block; width: 100%; padding: 9px 14px; text-align: left;
        background: none; border: none; color: #9090b0; font-size: 13px;
        cursor: pointer; font-family: inherit; transition: background .15s, color .15s;
      }
      .cqm-lang-option:hover { background: rgba(230,126,0,.1); color: #fff; }
      .cqm-lang-option.active { color: #ffb74d; font-weight: 600; }
    `;
    document.head.appendChild(style);
  }

  const current = localStorage.getItem('cqm_lang') || cqmDetectLang();

  container.innerHTML = `
    <div class="cqm-switcher">
      <button id="cqm-lang-btn" aria-label="Select language">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span class="cqm-lang-label">${CQM_LANGS[current].name}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div id="cqm-lang-dd">
        ${Object.entries(CQM_LANGS).map(([code, meta]) =>
          `<button class="cqm-lang-option${code === current ? ' active' : ''}" data-lang="${code}">${meta.name}</button>`
        ).join('')}
      </div>
    </div>`;

  document.getElementById('cqm-lang-btn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('cqm-lang-dd').classList.toggle('open');
  });
  document.addEventListener('click', () => {
    const dd = document.getElementById('cqm-lang-dd');
    if (dd) dd.classList.remove('open');
  });
  container.querySelectorAll('.cqm-lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.cqm-lang-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cqmApplyLang(btn.dataset.lang);
    });
  });
}

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = cqmDetectLang();
  cqmBuildSwitcher('cqm-lang-switcher');
  cqmApplyLang(lang);
});
