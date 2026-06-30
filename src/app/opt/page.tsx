import type { Metadata } from "next";
import OptForm from "./OptForm";

export const metadata: Metadata = {
  title: "Оптовое партнёрство — BelleEclat",
  description:
    "Станьте партнёром BelleEclat. Маржинальность 57% — 2 000 ₽ с каждого флакона. Extrait de Parfum на концентратах Jean Niel (Франция). От 30 штук.",
};

const AROMAS = [
  { num: "#9",   name: "BelleEclat №9",   notes: "айва · гиацинт · кедр",              ref: "Chanel Chance Tendre" },
  { num: "#5",   name: "BelleEclat №5",   notes: "ваниль · ирис · мускус",             ref: "Chanel Chance" },
  { num: "#1",   name: "BelleEclat №1",   notes: "лимон · пион · кедр",               ref: "Lanvin Éclat d'Arpège" },
  { num: "#7",   name: "BelleEclat №7",   notes: "груша · чёрная смородина · роза",   ref: "Armani Sì" },
  { num: "#11",  name: "BelleEclat №11",  notes: "яблоко · сандал · фрезия",          ref: "Lacoste Pour Femme" },
  { num: "#3",   name: "BelleEclat №3",   notes: "жасмин · водные ноты · сандал",     ref: "D&G L'Impératrice" },
  { num: "#108", name: "BelleEclat №108", notes: "ежевика · лавровый лист · кедр",    ref: "Jo Malone Blackberry & Bay" },
  { num: "#2",   name: "Sports Charm",    notes: "морские ноты · апельсин · кедр",    ref: "Chanel Allure Homme Sport" },
];

const BENEFITS = [
  {
    icon: "◆",
    title: "Концентраты Jean Niel",
    desc: "Грас, Франция, с 1779 года. Те же поставщики, что у нишевых парфюмерных домов. Extrait de Parfum — стойкость 8–12 часов.",
  },
  {
    icon: "◆",
    title: "Защита вашей наценки",
    desc: "Минимальная розничная цена 3 500 ₽ — продавать дороже можно, дешевле запрещено договором. Мы мониторим рынок и штрафуем за демпинг. BelleEclat не продаётся на Ozon и WB — ни один партнёр не обрушит вам цену.",
  },
  {
    icon: "◆",
    title: "Фиксированная цена на 12 месяцев",
    desc: "Закупочная цена прописана в договоре и не меняется в одностороннем порядке год. Никаких сюрпризов с курсом.",
  },
  {
    icon: "◆",
    title: "Обучение продажам в подарок",
    desc: "Онлайн-тренинг по продукту и техникам продаж для ваших продавцов в течение 10 дней после первой поставки.",
  },
];

export default function OptPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)" }}>

      {/* ШАПКА */}
      <header style={{
        padding: "20px 24px",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.6rem",
            color: "var(--gold)",
            letterSpacing: "0.1em",
          }}>BelleEclat</span>
        </a>
        <span style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}>
          Партнёрам
        </span>
      </header>

      {/* HERO */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px 60px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "48px",
      }}>
        <div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)", opacity: 0.6 }} />
            <span style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.62rem",
              letterSpacing: "0.4em",
              color: "var(--gold)",
              textTransform: "uppercase",
              opacity: 0.8,
            }}>
              Оптовое партнёрство · 2026
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            marginBottom: "24px",
          }}>
            <span style={{ color: "var(--gold)" }}>2 000 ₽</span> чистой прибыли<br />
            с каждого флакона
          </h1>

          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1rem",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            maxWidth: "560px",
            marginBottom: "40px",
          }}>
            Авторская парфюмерия BelleEclat на французских концентратах Jean Niel.
            Маржинальность 57%. Никаких конкурентов на маркетплейсах — ваша наценка защищена договором.
          </p>

          {/* Три числа */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            maxWidth: "560px",
          }}>
            {[
              { val: "57%",      lbl: "маржинальность" },
              { val: "от 30",    lbl: "штук минимум" },
              { val: "8–12 ч",   lbl: "стойкость" },
            ].map(({ val, lbl }) => (
              <div key={lbl} style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.18)",
                padding: "20px 16px",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "2rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}>
                  {val}
                </div>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginTop: "6px",
                }}>
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* УСЛОВИЯ */}
      <section style={{
        background: "rgba(201,168,76,0.04)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
          <Label>Условия закупки</Label>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2px",
            marginTop: "32px",
          }}>
            {[
              { tier: "от 30 штук",  price: "1 500 ₽/шт", profit: "прибыль от 2 000 ₽" },
              { tier: "от 100 штук", price: "1 200 ₽/шт", profit: "прибыль от 2 300 ₽" },
              { tier: "Мин. розничная цена", price: "3 500 ₽", profit: "продавать дороже — можно" },
            ].map(({ tier, price, profit }) => (
              <div key={tier} style={{
                background: "#0f0f0f",
                border: "1px solid rgba(201,168,76,0.15)",
                padding: "28px 24px",
              }}>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}>
                  {tier}
                </div>
                <div style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "2rem",
                  color: "var(--text)",
                  marginBottom: "6px",
                }}>
                  {price}
                </div>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.82rem",
                  color: "var(--gold)",
                }}>
                  {profit}
                </div>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            marginTop: "20px",
          }}>
            Цены без НДС · Микс ароматов разрешён · 100% предоплата · Отгрузка 3 рабочих дня · Доставка СДЭК/ПЭК
          </p>
        </div>
      </section>

      {/* ПРОГРАММА ПАРТНЁРСТВА */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
        <Label>Программа партнёрства</Label>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2px",
          marginTop: "32px",
        }}>
          {/* Стандарт */}
          <div style={{
            background: "#0f0f0f",
            border: "1px solid rgba(201,168,76,0.15)",
            padding: "32px 28px",
          }}>
            <div style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "16px",
            }}>
              Партнёр
            </div>
            <div style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "1.6rem",
              color: "var(--text)",
              marginBottom: "20px",
            }}>
              от 30 флаконов
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "1 500 ₽/шт — от 30 шт",
                "1 200 ₽/шт — от 100 шт",
                "Без территориального ограничения",
              ].map((line) => (
                <div key={line} style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Эксклюзив */}
          <div style={{
            background: "#0f0f0f",
            border: "1px solid rgba(201,168,76,0.45)",
            padding: "32px 28px",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: "-1px",
              left: "28px",
              right: "28px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }} />
            <div style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "16px",
            }}>
              Эксклюзивный партнёр
            </div>
            <div style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "1.6rem",
              color: "var(--text)",
              marginBottom: "20px",
            }}>
              от 3 000 флаконов / квартал
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Специальная закупочная цена",
                "Территориальный эксклюзив по городу / региону",
                "Приоритет в поставках и маркетинговая поддержка",
              ].map((line) => (
                <div key={line} style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                  {line}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(201,168,76,0.15)",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
            }}>
              Условия эксклюзива обсуждаются индивидуально
            </div>
          </div>
        </div>

        {/* Ключевые условия */}
        <div style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2px",
        }}>
          {[
            { icon: "◆", text: "Продажа только конечному покупателю — субдистрибуция запрещена" },
            { icon: "◆", text: "РРЦ 3 500 ₽ · демпинг запрещён договором с штрафом" },
            { icon: "◆", text: "Только под брендом BelleEclat · перемаркировка запрещена" },
            { icon: "◆", text: "Продажа на маркетплейсах запрещена" },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              background: "rgba(201,168,76,0.03)",
              border: "1px solid rgba(201,168,76,0.1)",
              padding: "16px 18px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "0.55rem", flexShrink: 0, marginTop: "3px" }}>{icon}</span>
              <span style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
        <Label>Почему BelleEclat</Label>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2px",
          marginTop: "32px",
        }}>
          {BENEFITS.map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "#0f0f0f",
              border: "1px solid rgba(201,168,76,0.1)",
              padding: "28px 24px",
            }}>
              <div style={{ color: "var(--gold)", fontSize: "0.7rem", marginBottom: "12px" }}>{icon}</div>
              <div style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text)",
                fontWeight: 500,
                marginBottom: "10px",
              }}>
                {title}
              </div>
              <div style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* АРОМАТЫ */}
      <section style={{
        background: "rgba(201,168,76,0.04)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
          <Label>Коллекция для партнёров · 8 ароматов</Label>
          <div style={{ overflowX: "auto", marginTop: "32px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
                  {["Арт.", "Название", "Пирамида аромата", "Вдохновлён", "Розница"].map((h) => (
                    <th key={h} style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      fontWeight: 400,
                      padding: "0 16px 14px 0",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AROMAS.map(({ num, name, notes, ref }, i) => (
                  <tr key={num} style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                  }}>
                    <td style={{ padding: "14px 16px 14px 0", color: "var(--gold)", fontFamily: "var(--font-body), sans-serif", fontSize: "0.8rem" }}>{num}</td>
                    <td style={{ padding: "14px 16px 14px 0", fontFamily: "var(--font-display), serif", fontSize: "1rem", color: "var(--text)", whiteSpace: "nowrap" }}>{name}</td>
                    <td style={{ padding: "14px 16px 14px 0", fontFamily: "var(--font-body), sans-serif", fontSize: "0.82rem", color: "var(--text-muted)" }}>{notes}</td>
                    <td style={{ padding: "14px 16px 14px 0", fontFamily: "var(--font-body), sans-serif", fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic" }}>{ref}</td>
                    <td style={{ padding: "14px 0 14px 0", fontFamily: "var(--font-body), sans-serif", fontSize: "0.88rem", color: "var(--text)", whiteSpace: "nowrap" }}>3 500 ₽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px 100px" }}>
        <Label>Оставить заявку</Label>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.9rem",
          color: "var(--text-muted)",
          lineHeight: 1.8,
          marginTop: "16px",
          marginBottom: "40px",
        }}>
          Пришлём коммерческое предложение с каталогом и ценами. Свяжемся в течение рабочего дня.
        </p>
        <OptForm />
      </section>

      {/* ФУТЕР */}
      <footer style={{
        borderTop: "1px solid rgba(201,168,76,0.12)",
        padding: "28px 24px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
        }}>
          ООО «МИР МЛМ» · ИНН 7725495829 · Ростов-на-Дону ·{" "}
          <a href="mailto:info@belleeclat.ru" style={{ color: "var(--gold)", textDecoration: "none" }}>
            info@belleeclat.ru
          </a>
        </div>
      </footer>

    </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ width: "24px", height: "1px", background: "var(--gold)", opacity: 0.5 }} />
      <span style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "0.62rem",
        letterSpacing: "0.4em",
        color: "var(--gold)",
        textTransform: "uppercase",
        opacity: 0.8,
      }}>
        {children}
      </span>
    </div>
  );
}
