<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <footer class="footer">
        <div class="container container--footer">
            <div class="footer__copyright">
                <p>© Jan-Luca Splettstößer 2021-2022</p>
            </div>
            <div class="footer__links">
                <p>
                    <RouterLink to="/legal" class="footer__link-item hover-underline">
                        Impressum - Legal Disclosure
                    </RouterLink>
                </p>
                <p>
                    <RouterLink to="/privacy" class="footer__link-item hover-underline">
                        Datenschutzerklärung – Privacy Policy
                    </RouterLink>
                </p>
            </div>
        </div>
    </footer>
</template>
