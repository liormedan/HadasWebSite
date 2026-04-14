"use client";

import { useEffect, useMemo, useState } from "react";

const brand = {
  name: "הדס דרור",
  sub: "תודעה ערה | מנהיגות אישית וארגונית",
  logo: "https://www.awake-me.co.il/wp-content/uploads/2025/04/%D7%AA%D7%95%D7%93%D7%A2%D7%94_%D7%A2%D7%A8%D7%94_%D7%9C%D7%95%D7%92%D7%95.png",
  portrait:
    "https://www.awake-me.co.il/wp-content/uploads/2025/04/%D7%94%D7%93%D7%A1-%D7%93%D7%A8%D7%95%D7%A8-%D7%AA%D7%9E%D7%95%D7%A0%D7%94.png"
};

const navItems = [
  { id: "about", label: "אודות" },
  { id: "programs", label: "תוכניות" },
  { id: "work-modes", label: "מסלולים" },
  { id: "process", label: "תהליך" },
  { id: "faq", label: "שאלות" },
  { id: "contact", label: "יצירת קשר" }
];


const programs = [
  {
    title: "תודעה ערה",
    audience: "למנהלים.ות, עצמאיים.ות ואנשים בצמתי שינוי",
    goal: "יצירת בהירות פנימית, נוכחות מנהיגותית ויכולת בחירה מדויקת.",
    format: "7 מפגשי עומק קבוצתיים + תרגול יישומי בין מפגשים",
    benefits: ["זיהוי דפוסים אוטומטיים", "הובלה מתוך ערכים", "כלים פרקטיים ליום-יום"],
    href: "https://www.awake-me.co.il/course/",
    cta: "לתוכנית המלאה",
    featured: true,
    tag: "פרטי"
  },
  {
    title: "Game Changer | סדנת מנהלים",
    audience: "לחברות, הנהלות וצוותים",
    goal: "חיזוק תקשורת, אמון ויכולת הנהגה בתנאי לחץ ושינוי.",
    format: "סדנה ממוקדת לארגונים בהשראת עולם הכדורגל",
    benefits: ["יישום מהיר בשטח", "שפה ניהולית משותפת", "שיפור עבודה בין-צוותית"],
    href: "https://share.google/L61oP7KJYvZDorH4z",
    cta: "לפרטי הסדנה",
    featured: false,
    tag: "ארגוני"
  },
  {
    title: "מנהיגות ערה | גומא גבים",
    audience: "לארגונים ותוכניות פיתוח עובדים",
    goal: "פיתוח שכבת ניהול ועובדים עם חיבור בין עומק אישי לתוצאה ארגונית.",
    format: "תוכנית פיתוח מובנית בשיתוף קבוצת גומא גבים",
    benefits: ["שיפור איכות ניהול", "חוסן צוותי", "מדדי יישום והטמעה"],
    href: "https://share.google/zlhdNSD9pxOVEl2WT",
    cta: "לפרטי התוכנית",
    featured: false,
    tag: "ארגוני"
  }
];

const workModes = [
  {
    icon: "①",
    title: "ליווי מנהלים 1:1",
    summary: "תהליך אישי ממוקד להתמודדות עם אתגרי ניהול מורכבים.",
    forWho: "מנהלים בכירים ובעלי תפקידים מובילים.",
    includes: "מפגשים אישיים, דיוק אתגרים ניהוליים, ליווי בין מפגשים.",
    outcome: "בהירות בקבלת החלטות ונוכחות מנהיגותית חזקה יותר."
  },
  {
    icon: "②",
    title: "סדנאות הנהלה וצוות",
    summary: "עבודה קבוצתית קצרה ומדויקת לשיפור תפקוד תחת לחץ.",
    forWho: "הנהלות וצוותים בתקופות עומס או שינוי.",
    includes: "סדנאות ממוקדות תקשורת, אמון ושיתופי פעולה.",
    outcome: "שיפור תפקוד צוותי ויכולת הובלה משותפת."
  },
  {
    icon: "③",
    title: "תוכניות ארגוניות",
    summary: "מסלול ארגוני מלא לפיתוח מנהיגות והטמעת שפה ניהולית.",
    forWho: "ארגונים שרוצים תהליך פיתוח מנהיגות ארוך טווח.",
    includes: "תכנון תוכנית, מדדי הצלחה, הטמעה וליווי מנהלים.",
    outcome: "שכבת ניהול יציבה ומובילה תוצאות."
  }
];

const processSteps = [
  {
    step: 1,
    phase: "מודעות",
    title: "יוצאים לדרך",
    desc: "מיפוי גלגל החיים והגדרת כיוון אישי-ניהולי."
  },
  {
    step: 2,
    phase: "מודעות",
    title: "מי מנהל את המחשבות שלי?",
    desc: "זיהוי דפוסי חשיבה וגישה צומחת."
  },
  {
    step: 3,
    phase: "בירור",
    title: "מה מניע אותי באמת?",
    desc: "עבודה על אנרגיה, מיקוד וניהול עומסים."
  },
  {
    step: 4,
    phase: "בירור",
    title: "במה אני טוב.ה?",
    desc: "חיבור לחוזקות ולמשאבים פנימיים."
  },
  {
    step: 5,
    phase: "בירור",
    title: "מהם הערכים שלי?",
    desc: "ערכים כמצפן לקבלת החלטות נכונות."
  },
  {
    step: 6,
    phase: "יישום",
    title: "מי מפחד מרגשות?",
    desc: "חוסן רגשי ותגובה מיטיבה תחת לחץ."
  },
  {
    step: 7,
    phase: "יישום",
    title: "סוגרים מעגל, פותחים דלת",
    desc: "סיכום תהליך ותוכנית המשך אישית."
  }
];

const processPhases = [
  {
    key: "מודעות",
    title: "מודעות",
    subtitle: "יצירת בסיס של התבוננות פנימית והבנת נקודת המוצא.",
    steps: [1, 2]
  },
  {
    key: "בירור",
    title: "בירור",
    subtitle: "דיוק מניעים, ערכים וחוזקות שמייצרים בחירות מדויקות יותר.",
    steps: [3, 4, 5]
  },
  {
    key: "יישום",
    title: "יישום",
    subtitle: "הטמעת כלים לחיים ולניהול, עם תנועה יציבה קדימה.",
    steps: [6, 7]
  }
];

const testimonials = [
  {
    quote:
      "התהליך עם הדס שיפר לי את אופן קבלת ההחלטות ואת היכולת להוביל את הצוות בביטחון.",
    name: "יובל",
    role: "מנהל מוקד",
    org: "חברת שירותים"
  },
  {
    quote:
      "יצאתי עם שפה חדשה לניהול עצמי ועם כלים ישימים כבר מהשבוע הראשון.",
    name: "שירה",
    role: "מנהלת תחום",
    org: "ארגון חברתי"
  },
  {
    quote:
      "הסדנה יצרה קפיצה ממשית בתקשורת בין חברי ההנהלה שלנו.",
    name: "אורן",
    role: "סמנכ\"ל תפעול",
    org: "חברת טכנולוגיה"
  },
  {
    quote:
      "ליווי מדויק, אנושי ועמוק. בדיוק מה שהיינו צריכים כדי לייצר תנועה אמיתית בארגון.",
    name: "ליאת",
    role: "מנהלת משאבי אנוש",
    org: "חברה תעשייתית"
  }
];

const faqs = [
  {
    q: "איך אדע אם התהליך מתאים לי?",
    a: "אם יש רצון לייצר שינוי אמיתי באופן ההובלה, קבלת ההחלטות והנוכחות האישית - זה תהליך מתאים מאוד."
  },
  {
    q: "כמה זמן נמשך תהליך?",
    a: "התוכנית הקבוצתית כוללת 7 מפגשים. במסלולי ליווי ארגוניים משך התהליך מותאם לצורך."
  },
  {
    q: "האם אפשר להזמין סדנה לארגון?",
    a: "כן. הסדנאות נבנות בהתאמה לארגון, לאתגרים ולמטרות הניהוליות שלכם."
  },
  {
    q: "איך מתחילים?",
    a: "מתחילים משיחת היכרות קצרה כדי להבין צורך, להמליץ על מסלול ולבנות שלב ראשון ברור."
  },
  {
    q: "מה מקבלים בפועל מהתהליך?",
    a: "בהירות, שפה ניהולית פרקטית, חוסן אישי ויכולת להוביל מתוך יציבות והשפעה."
  }
];

const whatsappNumber = "972501234567";
const contactEmail = "hadasdror.office@gmail.com";
const youtubeChannel = "https://www.youtube.com/user/hadasbh";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const sections = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  useEffect(() => {
    if (!contactDialogOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setContactDialogOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [contactDialogOpen]);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 md:px-6 md:pt-8">
      <header
        className="rounded-3xl border border-[rgba(134,80,47,0.26)] bg-[rgba(244,233,214,0.9)] p-3 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <img src={brand.logo} alt="תודעה ערה" className="h-9 w-auto" />
            <div>
              <p className="m-0 text-xl font-black text-[var(--text)]">{brand.name}</p>
              <p className="m-0 text-xs font-semibold text-[var(--muted)]">{brand.sub}</p>
            </div>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(90,50,29,0.5)] bg-[linear-gradient(110deg,#7b4427,#a76139)] px-4 text-sm font-bold text-white no-underline shadow-[0_10px_20px_rgba(164,87,47,0.28)]"
          >
            לתיאום שיחת היכרות
          </a>
        </div>
        <nav className="mt-3 flex items-center gap-2.5 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-bold no-underline transition ${
                activeSection === item.id
                  ? "border-[rgba(134,80,47,0.5)] bg-[rgba(216,191,147,0.45)] text-[var(--text)]"
                  : "border-[rgba(134,80,47,0.22)] bg-transparent text-[var(--text)] hover:bg-[rgba(216,191,147,0.2)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="mt-4 grid gap-4 rounded-3xl border border-[rgba(255,255,255,0.55)] bg-[rgba(244,233,214,0.78)] p-5 shadow-[0_20px_40px_rgba(61,44,27,0.1)] backdrop-blur-lg md:grid-cols-[1.15fr_0.85fr] md:p-7">
        <div>
          <p className="m-0 text-sm font-extrabold tracking-wide text-[var(--primary-2)]">מנהיגות אישית וארגונית</p>
          <h1 className="mb-2 mt-2 text-5xl font-black leading-[1.04] md:text-7xl">הדס דרור</h1>
          <p className="m-0 text-xl font-bold text-[var(--text)] md:text-2xl">
            ליווי מנהלים, צוותים ואנשים בצמתי שינוי ליצירת בהירות, נוכחות והובלה אפקטיבית.
          </p>
          <p className="mt-3 text-base font-semibold text-[var(--muted)] md:text-lg">
            מאמנת מוסמכת | מגשרת | מנחת הנהלות וצוותים
          </p>
          <p className="mt-3 max-w-2xl text-[1.03rem] leading-8 text-[var(--muted)]">
            תהליכים פרקטיים ועמוקים שמחברים בין מודעות אישית לבין תוצאות ניהוליות בשטח,
            עם שפה ברורה וכלים ישימים ליום-יום.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(90,50,29,0.55)] bg-[linear-gradient(110deg,#7b4427,#a76139)] px-5 text-base font-bold text-white no-underline shadow-[0_10px_22px_rgba(164,87,47,0.28)]"
            >
              לתיאום שיחת היכרות
            </a>
            <a
              href="#programs"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(134,80,47,0.35)] bg-[rgba(224,211,187,0.75)] px-5 text-base font-bold text-[var(--text)] no-underline"
            >
              לצפייה בתוכניות
            </a>
          </div>
        </div>

        <figure className="m-0 mx-auto w-full max-w-[360px] overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.6)] bg-[rgba(255,248,235,0.65)] p-2 shadow-[0_14px_30px_rgba(61,44,27,0.14)]">
          <img src={brand.portrait} alt="הדס דרור" className="h-full w-full rounded-2xl object-cover" />
        </figure>
      </section>

      <section id="about" className="mt-8 rounded-3xl border border-[rgba(255,255,255,0.55)] bg-[rgba(244,233,214,0.76)] p-5 md:p-7">
        <h2 className="m-0 text-3xl font-black md:text-4xl">עם יד על הלב, מי באמת מנהל את החיים שלך?</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--muted)]">
          כשאנחנו פועלים על אוטומט, אנחנו מגיבים במקום להוביל. בתהליך עם הדס עוברים מהישרדות
          לניהול מודע: מבהירים מה חשוב באמת, מזהים דפוסים שמנהלים אותנו, ובונים דרך פעולה יציבה.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "הכאב", d: "עומס, תגובתיות וחוסר בהירות" },
            { t: "הבירור", d: "זיהוי דפוסים והגדרת ערכים" },
            { t: "התרגול", d: "כלים ישימים לניהול עצמי וצוותי" },
            { t: "התוצאה", d: "נוכחות, יציבות והובלה אפקטיבית" }
          ].map((item) => (
            <article
              key={item.t}
              className="rounded-2xl border border-[rgba(255,255,255,0.5)] bg-[rgba(255,250,241,0.52)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <h3 className="m-0 text-xl font-extrabold">{item.t}</h3>
              <p className="mb-0 mt-2 text-base leading-7 text-[var(--muted)]">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="programs" className="mt-10">
        <h2 className="m-0 text-center text-4xl font-black">תוכניות מובילות ללקוחות פרטיים וארגונים</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {programs.map((item) => (
            <article
              key={item.title}
              className={`relative isolate overflow-hidden rounded-3xl border p-5 text-center backdrop-blur-md ${
                item.featured
                  ? "border-[rgba(134,80,47,0.5)] bg-[linear-gradient(165deg,rgba(255,250,240,0.62)_0%,rgba(217,188,141,0.42)_100%)] shadow-[0_16px_30px_rgba(61,44,27,0.18)]"
                  : "border-white/50 bg-[linear-gradient(165deg,rgba(255,250,240,0.54)_0%,rgba(217,188,141,0.3)_100%)] shadow-[0_14px_26px_rgba(61,44,27,0.13)]"
              } flex h-full flex-col`}
            >
              <div className="pointer-events-none absolute left-[10%] top-3 h-[34%] w-[80%] rounded-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.14)_70%,rgba(255,255,255,0)_100%)]" />
              <span
                className={`relative z-10 inline-flex rounded-full border px-3 py-1 text-xs font-extrabold ${
                  item.tag === "פרטי"
                    ? "border-[rgba(63,122,99,0.36)] bg-[rgba(63,122,99,0.14)] text-[var(--primary-2)]"
                    : "border-[rgba(134,80,47,0.3)] bg-[rgba(134,80,47,0.12)] text-[var(--primary)]"
                } min-h-7 min-w-20 items-center justify-center text-center leading-none`}
              >
                {item.tag}
              </span>
              <h3 className="relative z-10 mb-1 mt-2 text-3xl font-black">{item.title}</h3>
              <p className="relative z-10 m-0 text-sm font-bold text-[var(--primary-2)]">{item.audience}</p>
              <p className="relative z-10 mb-0 mt-3 leading-7 text-[var(--muted)]">{item.goal}</p>
              <p className="relative z-10 mb-0 mt-2 text-sm leading-7 text-[var(--muted)]">{item.format}</p>
              <ul className="relative z-10 mb-0 mt-3 list-none p-0 text-center">
                {item.benefits.map((b) => (
                  <li key={b} className="mb-1 text-sm font-semibold text-[var(--text)]">
                    • {b}
                  </li>
                ))}
              </ul>
              <a
                className="relative z-10 mt-auto inline-flex h-11 items-center justify-center self-center rounded-full border border-[rgba(134,80,47,0.36)] bg-[rgba(224,211,187,0.86)] px-4 text-sm font-bold text-[var(--text)] no-underline"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="work-modes" className="mt-10 rounded-3xl border border-[rgba(255,255,255,0.56)] bg-[rgba(244,233,214,0.74)] p-5 md:p-7">
        <h2 className="m-0 text-center text-4xl font-black">איך אפשר לעבוד יחד?</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {workModes.map((mode) => (
            <article key={mode.title} className="relative rounded-2xl border border-white/50 bg-[rgba(255,249,238,0.58)] p-4 text-center shadow-[0_10px_22px_rgba(61,44,27,0.1)]">
              <h3 className="relative mb-0 mt-1 inline-block px-1 text-2xl font-black after:mx-auto after:mt-2 after:block after:h-[2px] after:w-12 after:rounded-full after:bg-[rgba(134,80,47,0.35)]">
                {mode.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-7 text-[var(--muted)]">{mode.summary}</p>
              <p className="mb-0 mt-3 text-sm leading-7 text-[var(--muted)] text-right">
                <span className="font-extrabold text-[var(--text)]">מתאים ל:</span>{" "}
                <span className="font-normal">{mode.forWho}</span>
              </p>
              <p className="mb-0 mt-1.5 text-sm leading-7 text-[var(--muted)] text-right">
                <span className="font-extrabold text-[var(--text)]">כולל:</span>{" "}
                <span className="font-normal">{mode.includes}</span>
              </p>
              <p className="mb-0 mt-1.5 text-sm leading-7 text-[var(--muted)] text-right">
                <span className="font-extrabold text-[var(--text)]">תוצאה:</span>{" "}
                <span className="font-normal">{mode.outcome}</span>
              </p>
            </article>
          ))}
        </div>
        <div className="mt-5 text-center">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(134,80,47,0.4)] bg-[rgba(224,211,187,0.86)] px-5 text-base font-bold text-[var(--text)] no-underline"
          >
            לא בטוחים מה מתאים? דברו איתי
          </a>
        </div>
      </section>

      <section id="process" className="mt-10 rounded-3xl border border-[rgba(255,255,255,0.56)] bg-[rgba(244,233,214,0.74)] p-5 md:p-7">
        <h2 className="m-0 text-center text-4xl font-black">תהליך הליווי ב-7 מפגשים</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-lg leading-8 text-[var(--muted)]">
          מעבר מדורג משליטה אוטומטית להובלה מודעת — דרך מודעות, בירור ויישום.
        </p>
        <p className="mx-auto mt-1 max-w-3xl text-center text-base leading-7 text-[var(--muted)]">
          כל מפגש בונה את השלב הבא, עם תרגול והטמעה בין לבין.
        </p>

        <div className="mt-5 grid gap-3">
          {processPhases.map((phase, idx) => {
            const phaseSteps = processSteps.filter((step) => phase.steps.includes(step.step));
            return (
              <details
                key={phase.key}
                className="group overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.6)] bg-[rgba(255,249,238,0.6)] transition-colors duration-300 open:bg-[rgba(255,251,244,0.72)]"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-3 p-4 md:p-5">
                  <div className="text-right">
                    <p className="m-0 text-2xl font-black">{phase.title}</p>
                    <p className="mb-0 mt-1 text-sm leading-7 text-[var(--muted)]">{phase.subtitle}</p>
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(134,80,47,0.35)] text-[var(--primary)] transition-transform duration-300 group-open:rotate-180">
                    ˅
                  </span>
                </summary>

                <div className="grid gap-2 border-t border-[rgba(134,80,47,0.16)] px-4 pb-4 pt-3 md:px-5 md:pb-5 md:pt-4">
                  {phaseSteps.map((item) => (
                    <article
                      key={item.step}
                      className="rounded-xl border border-[rgba(255,255,255,0.65)] bg-[rgba(255,255,255,0.35)] p-3 md:p-4"
                    >
                      <div className="flex items-start gap-3 text-right">
                        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[rgba(134,80,47,0.16)] px-2 text-xs font-black text-[var(--primary)]">
                          {item.step}
                        </span>
                        <div className="text-right">
                          <h3 className="m-0 text-lg font-black">{item.title}</h3>
                          <p className="mb-0 mt-1 text-sm leading-7 text-[var(--muted)]">{item.desc}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section
        className="mt-6 rounded-2xl border border-[rgba(255,255,255,0.58)] bg-[rgba(250,244,234,0.66)] p-4 backdrop-blur-sm md:p-5"
        aria-label="YouTube Channel Strip"
      >
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(204,24,30,0.12)] text-xl text-[#cc181e]">
              ▶
            </span>
            <div>
              <p className="m-0 text-lg font-extrabold">עוד תכנים עם הדס ביוטיוב</p>
              <p className="mb-0 mt-1 text-sm leading-7 text-[var(--muted)]">
                סרטונים קצרים על מנהיגות, עומס, בחירה והובלה מודעת
              </p>
              <p className="mb-0 mt-1 text-xs font-semibold text-[var(--muted)]">
                הדס דרור- מנטורית לשינוי והשפעה
              </p>
            </div>
          </div>

          <a
            href={youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-[150px] items-center justify-center rounded-full border border-[rgba(134,80,47,0.35)] bg-[rgba(224,211,187,0.78)] px-4 text-sm font-bold text-[var(--text)] no-underline transition hover:-translate-y-px hover:bg-[rgba(214,199,169,0.88)]"
          >
            לערוץ YouTube
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-[rgba(255,255,255,0.56)] bg-[rgba(244,233,214,0.74)] p-5 md:p-7">
        <h2 className="m-0 text-4xl font-black">להאזנה: שיחה על מנהיגות, נוכחות והשפעה</h2>
        <p className="mb-0 mt-3 text-lg leading-8 text-[var(--muted)]">
          פרק מומלץ על עומק אישי, בחירה והובלה אפקטיבית בעולם העבודה והחיים.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-[120px_1fr_auto] md:items-center">
          <div className="h-[120px] w-[120px] rounded-2xl bg-[linear-gradient(145deg,#b89263,#8d5e3c)] shadow-[0_10px_20px_rgba(61,44,27,0.2)]" />
          <div>
            <p className="m-0 text-xl font-black">"תודעה ערה" - פרק השראה</p>
            <p className="mb-0 mt-1 text-[var(--muted)]">שיחה מעשית על הובלה עצמית וניהול אנשים מתוך יציבות ובהירות.</p>
          </div>
          <a
            href="https://open.spotify.com/episode/5EISkQeSjPqbXuOLvLIojg?si=bClUXCJSRce0lYjuPk31pw"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(90,50,29,0.5)] bg-[linear-gradient(110deg,#7b4427,#a76139)] px-4 text-sm font-bold text-white no-underline"
          >
            להאזנה ב-Spotify
          </a>
        </div>
      </section>

      <section className="mt-10" id="testimonials">
        <h2 className="m-0 text-center text-4xl font-black">מה מספרים משתתפים וארגונים</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <article key={`${t.name}-${t.role}`} className="rounded-2xl border border-white/50 bg-[rgba(255,249,238,0.6)] p-5 shadow-[0_12px_24px_rgba(61,44,27,0.1)]">
              <p className="m-0 text-5xl leading-none text-[rgba(134,80,47,0.5)]">“</p>
              <p className="mb-0 mt-1 text-lg leading-8">{t.quote}</p>
              <p className="mb-0 mt-3 text-sm font-bold text-[var(--primary-2)]">{t.name} | {t.role}</p>
              <p className="mb-0 mt-1 text-sm text-[var(--muted)]">{t.org}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mt-10 rounded-3xl border border-[rgba(255,255,255,0.56)] bg-[rgba(244,233,214,0.74)] p-5 md:p-7">
        <h2 className="m-0 text-4xl font-black">שאלות נפוצות</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              open={idx === 0}
              className="faq-item group overflow-hidden rounded-2xl border border-white/50 bg-[rgba(255,249,238,0.58)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-lg font-black">
                <span>{item.q}</span>
                <span className="faq-icon inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(134,80,47,0.3)] text-[var(--primary)] transition-transform duration-300">
                  ˅
                </span>
              </summary>
              <div className="faq-content px-4">
                <p className="faq-answer mb-0 leading-8 text-[var(--muted)]">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-10 rounded-3xl border border-[rgba(255,255,255,0.6)] bg-[rgba(244,233,214,0.78)] p-5 text-center md:p-7">
        <h2 className="m-0 text-4xl font-black">יצירת קשר</h2>
        <p className="mx-auto mb-0 mt-2 max-w-4xl text-lg text-[var(--muted)]">
          להזמנת הרצאה, סדנה או תהליך ליווי - השאירו פרטים ואחזור אליכם תוך 1–2 ימי עסקים.
        </p>
        <button
          type="button"
          onClick={() => setContactDialogOpen(true)}
          className="mx-auto mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(90,50,29,0.5)] bg-[linear-gradient(110deg,#7b4427,#a76139)] px-6 text-base font-bold text-white"
        >
          יצירת קשר
        </button>
      </section>

      {contactDialogOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,18,15,0.45)] p-3 md:p-5"
          onClick={() => setContactDialogOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl border border-[rgba(255,255,255,0.72)] bg-[rgba(246,237,222,0.96)] p-4 shadow-[0_24px_44px_rgba(20,18,15,0.25)] backdrop-blur-xl md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="דיאלוג יצירת קשר"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="m-0 text-2xl font-black">יצירת קשר</h3>
              <button
                type="button"
                onClick={() => setContactDialogOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(134,80,47,0.35)] bg-[rgba(255,255,255,0.6)] text-lg leading-none text-[var(--text)]"
                aria-label="סגירת הדיאלוג"
              >
                ×
              </button>
            </div>

            <p className="mx-auto mb-0 mt-1 max-w-3xl text-center text-base text-[var(--muted)]">
              להזמנת הרצאה, סדנה או תהליך ליווי - השאירו פרטים ואחזור אליכם תוך 1–2 ימי עסקים.
            </p>

            <div className="mx-auto mt-4 grid max-w-4xl gap-3 md:grid-cols-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/55 bg-[rgba(255,249,238,0.7)] p-4 text-center no-underline"
              >
                <p className="m-0 text-xl font-black text-[var(--text)]">וואטסאפ</p>
                <p className="mb-0 mt-1 text-[var(--muted)]">{`+${whatsappNumber}`}</p>
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="rounded-2xl border border-white/55 bg-[rgba(255,249,238,0.7)] p-4 text-center no-underline"
              >
                <p className="m-0 text-xl font-black text-[var(--text)]">אימייל</p>
                <p className="mb-0 mt-1 text-[var(--muted)]">{contactEmail}</p>
              </a>
            </div>

            <form
              className="mx-auto mt-4 grid max-w-4xl gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                const name = String(form.get("name") || "");
                const phone = String(form.get("phone") || "");
                const type = String(form.get("type") || "");
                const message = String(form.get("message") || "");
                const subject = encodeURIComponent("פנייה חדשה מהאתר | הדס דרור");
                const body = encodeURIComponent(
                  `שם: ${name}\nטלפון/אימייל: ${phone}\nסוג פנייה: ${type}\n\nהודעה:\n${message}`
                );
                setContactDialogOpen(false);
                window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <input name="name" required placeholder="שם מלא" className="h-12 rounded-xl border border-[rgba(134,80,47,0.3)] bg-[rgba(255,249,238,0.9)] px-3 text-center text-base outline-none" />
                <input name="phone" required placeholder="טלפון או אימייל" className="h-12 rounded-xl border border-[rgba(134,80,47,0.3)] bg-[rgba(255,249,238,0.9)] px-3 text-center text-base outline-none" />
              </div>
              <input name="type" placeholder="סוג פנייה (ליווי 1:1 / סדנה / ארגוני)" className="h-12 rounded-xl border border-[rgba(134,80,47,0.3)] bg-[rgba(255,249,238,0.9)] px-3 text-center text-base outline-none" />
              <textarea name="message" required rows={4} placeholder="הודעה קצרה" className="rounded-xl border border-[rgba(134,80,47,0.3)] bg-[rgba(255,249,238,0.9)] p-3 text-center text-base outline-none" />
              <button
                type="submit"
                className="mx-auto inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-[rgba(90,50,29,0.5)] bg-[linear-gradient(110deg,#7b4427,#a76139)] px-6 text-base font-bold text-white"
              >
                לשליחת פנייה
              </button>
            </form>
          </div>
        </div>
      ) : null}

    </main>
  );
}
