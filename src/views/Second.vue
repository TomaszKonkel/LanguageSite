<template>
  <div class="page">

    <main class="hero-grid">
      <!-- Karty krajów -->
      <section class="country-grid">
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
      </section>

      <!-- Główna treść -->
      <section class="intro-wrapper">
        <div class="intro-text fade-in">
          <h2>Otwórz drzwi do świata języków</h2>
          <p>
            Uczymy z pasją! Nasze kursy prowadzone są przez doświadczonych lektorów, którzy pomogą Ci mówić pewnie i z przyjemnością.
          </p>
          <button class="cta-button">Sprawdź nasze kursy</button>
        </div>
      </section>

      <!-- Zaletki -->
      <section class="features">
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-users"></i></div>
          <h3>Małe grupy</h3>
          <p>Indywidualne podejście i więcej praktyki.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-laptop-house"></i></div>
          <h3>Nauka online</h3>
          <p>Elastyczny grafik i nauka z domu.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="fas fa-certificate"></i></div>
          <h3>Certyfikaty</h3>
          <p>Uznawane w Polsce i za granicą.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero-grid {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.country-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem auto 0;
  max-width: 1400px;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.country-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 120px;
  color: #2e2e2e;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}

.country-card.poland {
  background-image: url('/src/assets/pl.png');
}

.country-card.uk {
  background-image: url('/src/assets/gb.png');
}

.country-card.sweden {
  background-image: url('/src/assets/se.png');
}

.country-card.spain {
  background-image: url('/src/assets/es.png');
}

.intro-wrapper {
  text-align: center;
  padding: 1rem;
}

.features {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease forwards;
}

.feature-card {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 30%;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.cta-button {
  margin-top: 1rem;
  padding: 0.75rem 2rem;
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

@media (max-width: 768px) {
  .country-grid {
    grid-template-columns: 1fr;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  .country-card {
    min-height: 100px;
  }

  .features {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
  }

  .feature-card {
    width: 100%;
    max-width: 400px;
  }

  .intro-wrapper {
    padding: 1rem 0.5rem;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
