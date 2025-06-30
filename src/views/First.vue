<template>
  <div>
    <main class="country-grid">
      <div class="country-card poland">
        <h2>Polska</h2>
      </div>
      <div class="country-card uk">
        <h2>Wielka Brytania</h2>
      </div>
      <div class="country-card sweden">
        <h2>Szwecja</h2>
      </div>
      <div class="country-card spain">
        <h2>Hiszpania</h2>
      </div>
    </main>
    <section class="intro-wrapper">
      <div class="intro-text">
        <h2>Otwórz drzwi do świata języków</h2>
        <p>
          W naszej szkole językowej uczysz się nie tylko słów, ale przede wszystkim komunikacji i kultury.
          Oferujemy zajęcia z języka angielskiego, szwedzkiego, hiszpańskiego i polskiego, prowadzone przez
          doświadczonych lektorów w przyjaznej atmosferze.
        </p>
        <p>
          Niezależnie od tego, czy uczysz się dla pracy, podróży, czy własnej przyjemności – pomożemy Ci osiągnąć Twój
          cel.
          Zapisz się już dziś i rozpocznij swoją językową przygodę!
        </p>
        <button class="cta-button" @click="changeFont">Sprawdź nasze kursy</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fonts = [
  "'Poppins', sans-serif",
  "'Nunito', sans-serif",
  "'Raleway', sans-serif",
  "'Playfair Display', serif",
  "'Source Sans Pro', sans-serif",
  "'Mukta', sans-serif",
  "'Josefin Sans', sans-serif",
  "'Quicksand', sans-serif",
  "'Muli', sans-serif",
  "'Crimson Text', serif"
]

let currentFontIndex = ref(0)

function changeFont() {
  currentFontIndex.value = (currentFontIndex.value + 1) % fonts.length
  document.body.style.setProperty('font-family', fonts[currentFontIndex.value])
}
</script>

<style scoped>
.country-grid {
  display: grid;
  gap: 3rem;
  padding: 2rem;
  margin: 5rem auto 0;
  max-width: 1400px;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1024px) {
  .country-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .country-grid {
    grid-template-columns: 1fr;
  }
}

.country-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* pionowe wyśrodkowanie */
  align-items: center;
  /* poziome wyśrodkowanie */
  text-align: center;

  height: 200px;
  /* lub więcej, zależnie od potrzeb */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: white;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  padding: 1rem;
}


/* Flag backgrounds */

.country-card.poland {
  background-image: url('/src/assets/pl.png');
  box-shadow: 0 100px 100px rgba(255, 0, 0, 0.3);
}

.country-card.uk {
  background-image: url('/src/assets/gb.png');
  box-shadow: 0 100px 100px rgba(0, 0, 128, 0.3);
}

.country-card.sweden {
  background-image: url('/src/assets/se.png');
  box-shadow: 0 100px 100px rgba(0, 123, 255, 0.3);
}

.country-card.spain {
  background-image: url('/src/assets/es.png');
  box-shadow: 0 100px 100px rgba(255, 165, 0, 0.3);
}

.country-card h2 {
  margin: 1rem 0;
  color: #2e2e2e;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.country-card:hover {
  transform: translateY(-5px);
}

.intro-wrapper {
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  /* background: linear-gradient(to bottom right, #f0f4ff, #ffffff); */
}

.intro-text {
  background-color: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  animation: fadeInUp 1s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.intro-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.intro-text p {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #555;
}

.cta-button {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background-color: #3366ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #254eda;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
