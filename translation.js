const translations = {
    en: {
        created: "Created: 20.01.26",
        privacyPolicy: "Privacy Policy",
        privacyPolicyPage: `
Last updated: 28.03.2026<br><br>

1. General Information<br>
This Privacy Policy explains how Atom Studio collects, uses, and protects user information when you use our games, applications, or websites.<br><br>

2. Information We Collect<br>
We may collect:<br>
- Basic usage data (e.g., app usage, interactions)<br>
- Device information (e.g., device type, OS)<br>
- No personal data is collected unless explicitly provided<br><br>

3. How We Use Information<br>
We use collected data to:<br>
- Improve our products<br>
- Fix bugs and errors<br>
- Analyze usage for better user experience<br><br>

4. Third-Party Services<br>
Our products may use third-party services (e.g., analytics, ads) that may collect information according to their own privacy policies.<br><br>

5. Data Security<br>
We take reasonable measures to protect user data, but no method is 100% secure.<br><br>

6. Children’s Privacy<br>
Our products are not intended to collect personal data from children under 13.<br><br>

7. Changes to This Policy<br>
We may update this Privacy Policy from time to time. Changes will be posted on this page.
        `,
        nameOfPage: "Privacy Policy",
        button: "EN"
    },

    ua: {
        created: "Створено: 20.01.26",
        privacyPolicy: "Політика конфіденційності",
        privacyPolicyPage: `
Останнє оновлення: 28.03.2026<br><br>

1. Загальна інформація<br>
Ця політика конфіденційності пояснює, як Atom Studio збирає, використовує та захищає інформацію користувачів при використанні наших ігор, програм або вебсайтів.<br><br>

2. Інформація, яку ми збираємо<br>
Ми можемо збирати:<br>
- Основні дані про використання (наприклад, взаємодія з додатком)<br>
- Інформацію про пристрій (тип пристрою, ОС)<br>
- Персональні дані не збираються без явної згоди<br><br>

3. Як ми використовуємо інформацію<br>
Ми використовуємо дані для:<br>
- Покращення продуктів<br>
- Виправлення помилок<br>
- Аналізу використання<br><br>

4. Сторонні сервіси<br>
Наші продукти можуть використовувати сторонні сервіси (аналітика, реклама), які мають власні політики конфіденційності.<br><br>

5. Безпека даних<br>
Ми вживаємо заходів для захисту даних, але жоден метод не є абсолютно безпечним.<br><br>

6. Дані дітей<br>
Наші продукти не призначені для збору персональних даних дітей до 13 років.<br><br>

7. Зміни політики<br>
Ми можемо оновлювати цю політику. Зміни будуть опубліковані на цій сторінці.
        `,
        nameOfPage: "Політика конфіденційності",
        button: "UA"
    }
};

function toggleLanguage() {
    let currentLang = localStorage.getItem('selectedLang') || 'en';
    let newLang = (currentLang === 'en') ? 'ua' : 'en';
    Translate(newLang);
}

function Translate(lang) {
    localStorage.setItem('selectedLang', lang);

    const btn = document.getElementById("translateButton");
    if (btn) btn.innerText = translations[lang].button;

    document.title = translations[lang].nameOfPage;

    const createdEl = document.getElementById("created");
    if (createdEl) createdEl.innerText = translations[lang].created;

    const privacyLinkEl = document.getElementById("privacypolicy");
    if (privacyLinkEl) privacyLinkEl.innerText = translations[lang].privacyPolicy;

    const privacyPageEl = document.getElementById("privacypolicyPage");
    if (privacyPageEl) privacyPageEl.innerHTML = translations[lang].privacyPolicyPage;
}

window.onload = () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    Translate(savedLang);
};