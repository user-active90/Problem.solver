/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";

type Page = "about" | "calculator" | "contact";

export default function Home() {
  const [activePage, setActivePage] = useState<Page>("about");

  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(false);

  // Calculator functions
  function inputNumber(value: string) {
    if (display === "Error") {
      setDisplay(value === "." ? "0." : value);
      return;
    }

    if (newNumber) {
      setDisplay(value === "." ? "0." : value);
      setNewNumber(false);
      return;
    }

    if (value === "." && display.includes(".")) return;

    setDisplay(
      display === "0"
        ? value === "." ? "0." : value
        : display + value
    );
  }

  function chooseOperator(nextOperator: string) {
    if (display === "Error") return;

    const current = Number(display);

    if (operator && firstValue !== null && !newNumber) {
      const result = calculate(firstValue, current, operator);
      if (!Number.isFinite(result)) {
        setDisplay("Error");
        setFirstValue(null);
        setOperator(null);
        setNewNumber(true);
        return;
      }
      setFirstValue(result);
      setDisplay(String(Number(result.toPrecision(10))));
    } else {
      setFirstValue(current);
    }

    setOperator(nextOperator);
    setNewNumber(true);
  }

  function calculate(a: number, b: number, op: string) {
    switch (op) {
      case "+": return a + b;
      case "−": return a - b;
      case "×": return a * b;
      case "÷": return b === 0 ? NaN : a / b;
      default: return b;
    }
  }

  function showResult() {
    if (firstValue === null || !operator || display === "Error") return;

    const result = calculate(firstValue, Number(display), operator);

    setDisplay(
      Number.isFinite(result)
        ? String(Number(result.toPrecision(10)))
        : "Error"
    );

    setFirstValue(null);
    setOperator(null);
    setNewNumber(true);
  }

  function clearCalculator() {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
    setNewNumber(false);
  }

  function changePage(page: Page) {
    setActivePage(page);
  }

  // Replace this with your WhatsApp number.
  // Use country code, without + or spaces.
  const whatsappNumber = "923338617531";

  return (
    <main className="website">

      {/* HEADER */}
      <header className="header">
        <a href="#" className="brand">
          PROBLEM<span>SOLVER.</span>
          <small>SMART IDEAS. REAL SOLUTIONS.</small>
        </a>

        <span className="header-label">INNOVATION & SOLUTIONS</span>
      </header>

      {/* HERO */}
      <section className="hero">
        <p className="hero-tag">WELCOME TO PROBLEM SOLVER</p>

        <h1>
          Every problem has
          <br />
          a <span>solution.</span>
        </h1>

        <p className="hero-description">
          We believe that every challenge is an opportunity
          to think differently, find answers, and create
          something better.
        </p>

        {/* THREE MAIN BUTTONS */}
        <div className="navigation-buttons">
          <button
            className={activePage === "about" ? "nav-btn active" : "nav-btn"}
            onClick={() => changePage("about")}
          >
            About Us
          </button>

          <button
            className={activePage === "calculator" ? "nav-btn active" : "nav-btn"}
            onClick={() => changePage("calculator")}
          >
            Calculator
          </button>

          <button
            className={activePage === "contact" ? "nav-btn active" : "nav-btn"}
            onClick={() => changePage("contact")}
          >
            Contact
          </button>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="content-area">

        {/* ABOUT PAGE */}
        {activePage === "about" && (
          <div className="content-card">
            <p className="section-tag">01 / ABOUT US</p>

            <h2>Who We Are</h2>

            <p className="content-text">
              Problem Solver is a platform built around
              creativity, innovation, and practical thinking.
              Our goal is to make everyday tasks easier by
              providing simple and useful solutions.
            </p>

            <div className="about-grid">
              <div className="info-box">
                <h3>Our Mission</h3>
                <p>
                  To turn challenges into opportunities
                  through smart ideas and technology.
                </p>
              </div>

              <div className="info-box">
                <h3>Our Vision</h3>
                <p>
                  To create useful digital experiences
                  that make life simpler and better.
                </p>
              </div>

              <div className="info-box">
                <h3>Our Values</h3>
                <p>
                  Creativity, honesty, innovation,
                  and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CALCULATOR PAGE */}
        {activePage === "calculator" && (
          <div className="content-card calculator-section">
            <p className="section-tag">02 / DIGITAL TOOL</p>

            <h2>Simple Calculator</h2>

            <p className="content-text">
              Perform basic calculations quickly and easily.
            </p>

            <div className="calculator">
              <div className="calculator-display">
                <span>PROBLEM SOLVER CALCULATOR</span>
                <div className="display-number">{display}</div>
              </div>

              <div className="calculator-buttons">
                <button className="calc-special" onClick={clearCalculator}>
                  AC
                </button>
                <button className="calc-special" onClick={() => {
                  if (display !== "Error") setDisplay(String(-Number(display)));
                }}>
                  +/−
                </button>
                <button className="calc-special" onClick={() => {
                  if (display !== "Error") setDisplay(String(Number(display) / 100));
                }}>
                  %
                </button>
                <button className="calc-operator" onClick={() => chooseOperator("÷")}>÷</button>

                {["7", "8", "9"].map((n) => (
                  <button key={n} className="calc-number" onClick={() => inputNumber(n)}>{n}</button>
                ))}
                <button className="calc-operator" onClick={() => chooseOperator("×")}>×</button>

                {["4", "5", "6"].map((n) => (
                  <button key={n} className="calc-number" onClick={() => inputNumber(n)}>{n}</button>
                ))}
                <button className="calc-operator" onClick={() => chooseOperator("−")}>−</button>

                {["1", "2", "3"].map((n) => (
                  <button key={n} className="calc-number" onClick={() => inputNumber(n)}>{n}</button>
                ))}
                <button className="calc-operator" onClick={() => chooseOperator("+")}>+</button>

                <button className="calc-number zero" onClick={() => inputNumber("0")}>0</button>
                <button className="calc-number" onClick={() => inputNumber(".")}>.</button>
                <button className="calc-equals" onClick={showResult}>=</button>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT PAGE */}
        {activePage === "contact" && (
          <div className="content-card">
            <p className="section-tag">03 / GET IN TOUCH</p>

            <h2>Let&apos;s Connect.</h2>

            <p className="content-text">
              Have an idea, a question, or a problem that
              needs solving? We&apos;d love to hear from you.
            </p>

            <div className="contact-grid">
              <div className="info-box">
                <span className="contact-icon">✦</span>
                <h3>The Innovator</h3>
                <p>
                  Building ideas into practical digital
                  experiences through creativity and technology.
                </p>
              </div>

              <div className="info-box">
                <span className="contact-icon">☏</span>
                <h3>WhatsApp</h3>
                <p>Contact us directly for questions and enquiries.</p>

                <a
                  className="contact-link"
                  href={`https://wa.me/${+923338617531}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp →
                </a>
              </div>

              <div className="info-box">
                <span className="contact-icon">✉</span>
                <h3>Email</h3>
                <p>Send us your questions or business enquiries.</p>

                <a
                  className="contact-link"
                  href="mailto:Thealex8769@gmail.com"
                >
                  Send an email →
                </a>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>PROBLEM SOLVER.</strong>
          <p>Smart ideas. Real solutions.</p>
        </div>

        <p>© 2026 Problem Solver. All rights reserved.</p>
      </footer>

    </main>
  );
}
