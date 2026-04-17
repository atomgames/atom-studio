const translations = {
    en: {
        created: "Created: 20.01.26",
        privacyPolicy: "Privacy Policy",
        privacyPolicyPage: `
**Last updated: 17.04.2026**

---

## 1. General Information

This Privacy Policy explains how **Atom Studio** collects, uses, and protects user information when using our games, applications, or websites.

By using our products, you agree to the terms of this Privacy Policy.

---

## 2. Third-Party Services

Our products may use third-party services (such as analytics or advertising providers). These services may collect information in accordance with their own privacy policies.

We are not responsible for the practices of third-party services.

---

## 4. Children's Privacy

Our products are not intended to collect personal data from children under the age of 13.

If we become aware that such data has been collected, we will take steps to delete it.

---

## 5. Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
        `,
        nameOfPage: "Privacy Policy",
        button: "EN"
    },

    ua: {
        created: "Створено: 20.01.26",
        privacyPolicy: "Політика конфіденційності",
        privacyPolicyPage: `
**Останнє оновлення: 17.04.2026**<br><br>

---<br><br>

## 1. Загальна інформація<br><br>

У цій Політиці конфіденційності пояснюється, як **Atom Studio** збирає, використовує та захищає інформацію користувачів під час використання наших ігор, програм або веб-сайтів.<br><br>

Використовуючи наші продукти, ви погоджуєтеся з умовами цієї Політики конфіденційності.<br><br>

---<br><br>

## 2. Сторонні сервіси<br><br>

Наші продукти можуть використовувати сторонні сервіси (такі як аналітика або рекламні провайдери). Ці сервіси можуть збирати інформацію відповідно до власних політик конфіденційності.<br><br>

Ми не несемо відповідальності за дії сторонніх сервісів.<br>

---<br><br>

## 4. Конфіденційність дітей <br><br>

Наші продукти не призначені для збору персональних даних дітей віком до 13 років. <br>

Якщо нам стане відомо, що такі дані були зібрані, ми вживемо заходів для їх видалення. <br>

---<br><br>

## 5. Зміни до цієї Політики<br><br>

Ми можемо час від часу оновлювати цю Політику конфіденційності. Будь-які зміни будуть опубліковані на цій сторінці з оновленою датою.<br>
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
    document.getElementById("lang-en")?.classList.remove("active-lang");
    document.getElementById("lang-ua")?.classList.remove("active-lang");

    document.getElementById("lang-" + lang)?.classList.add("active-lang");
    localStorage.setItem('selectedLang', lang);

    const btn = document.getElementById("translateButton");
    if (btn) btn.innerText = translations[lang].button;

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
