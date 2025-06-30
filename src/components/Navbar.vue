<template>
    <nav class="navbar" ref="menuRef">
        <div class="container">
            <div class="logo">LinguaPlus
            </div>

            <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="isOpen.toString()">
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
                <span :class="{ open: isOpen }"></span>
            </button>

            <ul :class="['nav-links', { open: isOpen }]">
                <li><a href="/" @click="closeMenu">Start</a></li>
                <li><a href="/second" @click="closeMenu">O nas</a></li>
                <li><a href="/third" @click="closeMenu">Języki</a></li>
                <li><a href="#" @click="closeMenu">Zapisz się</a></li>
                <li><a href="#" @click="closeMenu">Kontakt</a></li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

function closeMenu() {
    isOpen.value = false
}

function toggleMenu() {
    isOpen.value = !isOpen.value
}

function handleClickOutside(event: MouseEvent) {
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

// const route = useRoute()

// // Obliczamy klasę na podstawie ścieżki
// // const navbarClass = computed(() =>
// //     route.path === '/third' ? 'navbar-light' : 'navbar-dark'
// // )
</script>

<style scoped>
.navbar {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

/* Styl na stronie głównej (jasny navbar z białymi linkami) */
.navbar-light .nav-links a {
    color: #2e2e2e;
}

/* Styl na innych stronach (ciemniejszy) */
.navbar-dark .nav-links a {
    color: #2e2e2e;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    position: relative;
}

.logo {
    font-weight: bold;
    font-size: 1.3rem;
    color: #005BAC;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

.nav-links li {
    margin: 0;
}

.nav-links a {
    text-decoration: none;
    font-weight: 500;
    position: relative;
}

/* Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1100;
}

.hamburger span {
    width: 24px;
    height: 2px;
    background-color: #333;
    transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
    opacity: 0;
}

.hamburger span.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* Responsywność */
@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 64px;
        right: 0;
        background-color: white;
        flex-direction: column;
        align-items: flex-start;
        width: 200px;
        padding: 0 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 0 0 0 8px;
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transform: translateY(-10px);
        transition: max-height 0.4s ease, opacity 0.3s ease, transform 0.3s ease;
    }

    .nav-links.open {
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
        border-radius: 10px;
    }

    .nav-links li {
        width: 100%;
        margin: 0.75rem 0;
    }

    .nav-links a {
        width: 100%;
        display: block;
    }

    .hamburger {
        display: flex;
    }
}
</style>
