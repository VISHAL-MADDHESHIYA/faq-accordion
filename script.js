document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  const searchInput = document.getElementById("faqSearch");
  const tabButtons = document.querySelectorAll(".tab-btn");

  // 1. Accordion Toggle Logic
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items (Single open behavior)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          otherItem.querySelector(".faq-answer").style.maxHeight = "0";
        }
      });

      // Toggle clicked item
      if (isActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = "0";
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
        
        // Update URL Hash for deep linking without jumping page
        history.replaceState(null, null, `#${questionBtn.id}`);
      }
    });
  });

  // 2. Category Filtering Logic
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.getAttribute("data-category");

      faqItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (selectedCategory === "all" || itemCategory === selectedCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 3. Live Search Logic
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();

    faqItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(term)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // 4. Keyboard Arrow Navigation (Up & Down keys between questions)
  const questionButtons = document.querySelectorAll(".faq-question");
  questionButtons.forEach((btn, index) => {
    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextBtn = questionButtons[index + 1] || questionButtons[0];
        nextBtn.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevBtn = questionButtons[index - 1] || questionButtons[questionButtons.length - 1];
        prevBtn.focus();
      }
    });
  });

  // 5. Open item automatically if URL has a hash matching a question ID
  if (window.location.hash) {
    const targetBtn = document.querySelector(window.location.hash);
    if (targetBtn) {
      targetBtn.click();
    }
  }
});