import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | BelleEclat",
  robots: "noindex",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)", padding: "60px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <a href="/" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.15em", fontFamily: "var(--font-body), sans-serif" }}>
          ← Вернуться на сайт
        </a>

        <h1 style={{ fontFamily: "var(--font-display), serif", fontSize: "2rem", fontWeight: 300, margin: "32px 0 40px", color: "var(--text)" }}>
          Политика конфиденциальности
        </h1>

        <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.9rem", lineHeight: 1.9, color: "var(--text-muted)" }}>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>1. Общие положения</h2>
          <p>Настоящая политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта belleeclat.ru.</p>
          <p>Оператор персональных данных: ООО «МИР МЛМ», ИНН 7725495829, г. Ростов-на-Дону.</p>
          <p>Контактный адрес: <a href="mailto:info@belleeclat.ru" style={{ color: "var(--gold)" }}>info@belleeclat.ru</a></p>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>2. Какие данные мы собираем</h2>
          <p>При заполнении формы на сайте мы получаем:</p>
          <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
            <li>Имя и название компании</li>
            <li>Номер телефона или адрес электронной почты</li>
            <li>Текст сообщения</li>
          </ul>
          <p>Автоматически собираются технические данные: IP-адрес, тип браузера, страницы посещения — через Яндекс Метрику (счётчик 110320862).</p>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>3. Цели обработки данных</h2>
          <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
            <li>Обработка заявок на оптовое сотрудничество</li>
            <li>Связь с потенциальными партнёрами</li>
            <li>Анализ посещаемости сайта и улучшение его работы</li>
          </ul>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>4. Файлы cookie</h2>
          <p>Сайт использует файлы cookie для корректной работы и анализа посещаемости через Яндекс Метрику. Cookie не содержат личных данных. Вы можете отключить cookie в настройках браузера.</p>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>5. Передача данных третьим лицам</h2>
          <p>Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ. Яндекс Метрика обрабатывает обезличенные данные о посещениях согласно политике конфиденциальности Яндекса.</p>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>6. Хранение данных</h2>
          <p>Данные, переданные через форму обратной связи, хранятся в течение срока, необходимого для рассмотрения заявки, но не более 3 лет.</p>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>7. Права пользователя</h2>
          <p>Вы вправе запросить уточнение, исправление или удаление ваших персональных данных, направив запрос на <a href="mailto:info@belleeclat.ru" style={{ color: "var(--gold)" }}>info@belleeclat.ru</a>.</p>

          <h2 style={{ color: "var(--text)", fontWeight: 400, fontSize: "1.1rem", margin: "32px 0 12px" }}>8. Правовое основание</h2>
          <p>Обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>

          <p style={{ marginTop: "40px", fontSize: "0.8rem" }}>Дата последнего обновления: 01.07.2026</p>
        </div>
      </div>
    </main>
  );
}
