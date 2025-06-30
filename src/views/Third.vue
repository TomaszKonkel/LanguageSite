<template>
  <div class="page-wrapper">
    <div class="flag-strip">
      <div
        v-for="(flag, index) in flags"
        :key="index"
        class="flag"
        :style="getMaskStyle(index, flag)"
      >
        <div class="flag-text">{{ flag.greeting }}</div>
      </div>
    </div>

    <div class="overlay-row">
      <div class="overlay-card">
        <div class="card-icon"><i class="fas fa-users"></i></div>
        <h3 class="card-title">Małe grupy</h3>
        <p class="card-text">Indywidualne podejście i więcej praktyki.</p>
      </div>
      <div class="overlay-card">
        <div class="card-icon"><i class="fas fa-laptop-house"></i></div>
        <h3 class="card-title">Nauka online</h3>
        <p class="card-text">Elastyczny grafik i nauka z domu.</p>
      </div>
      <div class="overlay-card">
        <div class="card-icon"><i class="fas fa-certificate"></i></div>
        <h3 class="card-title">Certyfikaty</h3>
        <p class="card-text">Uznawane w Polsce i za granicą.</p>
      </div>
    </div>

    <div class="fill-space">
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
      <button class="cta-button">Sprawdź nasze kursy</button>
    </div>
  </div>
</template>

<script setup>
const flags = [
  {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    greeting: "Witaj!",
  },
  {
   src: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    greeting: "Welcome!",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    greeting: "Välkommen!",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    greeting: "¡Bienvenido!",
  },
];

const getMaskStyle = (index, flag) => {
  const maskLeft = index > 0;
  const maskRight = index < flags.length - 1;
  const isMobile = window.innerWidth < 768;
  const direction = isMobile ? "to bottom" : "to right";

  let gradient = "";

  if (maskLeft && maskRight) {
    gradient = `linear-gradient(${direction}, transparent 0%, black 50%, black 50%, transparent 100%)`;
  } else if (maskLeft) {
    gradient = `linear-gradient(${direction}, transparent 0%, black 90%, black 100%)`;
  } else if (maskRight) {
    gradient = `linear-gradient(${direction}, black 0%, black 10%, transparent 100%)`;
  } else {
    gradient = "none";
  }

  return {
    backgroundImage: `url(${flag.src})`,
    WebkitMaskImage: gradient,
    maskImage: gradient,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
};
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.flag-strip {
  display: flex;
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  flex-shrink: 0;
}

.flag {
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.flag-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  text-align: center;
  pointer-events: none;
}

.overlay-row {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 75%;
  margin: -75px auto 40px;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

.overlay-card {
  flex: 1;
  min-height: 200px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
}

.card-icon {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.fill-space {
  flex-grow: 1;
  background-color: #f9f9f9;
  border-radius: 20px 20px 0 0;
  margin: 0 10vw 20px;
  padding: 1rem;
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
  display: block;
  margin-left: auto;
}

.cta-button:hover {
  background-color: #254eda;
}

@media (max-width: 768px) {
  .flag-strip {
    flex-direction: column;
    height: auto;
    margin-bottom: 20px;
  }

  .flag {
    height: 150px;
    flex: none;
  }

  .overlay-row {
    flex-direction: column;
    width: 90%;
    margin: -75px auto 20px;
    gap: 20px;
  }
}
</style>
